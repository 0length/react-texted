import React, { useState, useLayoutEffect, useCallback } from 'react'
import Block from './Block'

interface EditorIProps {
    payload: string
    tools: {[key: string]: React.FC<any>}
    //React.MemoExoticComponent<(tool: any, props: any)=>(JSX.Element)>
    onSave?: (payload: string)=>void
}

interface MurkupParserIProps {
    blockData: {data: any, type: string}
    idx: number
    save: (a: any)=>void
    tools: any
    setActive: any
    active: number
}

const Editor: React.FC<EditorIProps> = (props)=>{

    const [payload, setPayload] = useState<string>(props.payload)    
    const [active, setA] = useState<number>(-1)
    const setActive = useCallback((idx: number)=>{
        setA(idx)
    }, [setA])

    useLayoutEffect(()=>{
        if(props.onSave){
            props.onSave(payload)
        }
    }, [payload])

    const getTool = useCallback(({blockData, onChange}: any)=>((blockData: any, onChange)=>{
        // console.log({blockData, onChange})
        const El: any = props.tools[blockData.type]
        return <El {...{blockData, onChange}} />
    })(blockData, onChange), [])

    return (<>
        {
            (JSON.parse(payload) as Array<any>).map(({type, data}, idx: number)=>{
                return (<MarkupParse key={idx} {...{blockData: {type, data}, idx, save: (a)=>setPayload((b)=>{
                    const newData: Array<any> =[...JSON.parse(b)]
                    newData[idx] = a
                    return JSON.stringify(newData)
                }), tools: getTool, setActive, active}}/>)
            })
        }
    </>)
}

const MarkupParse: React.FC<MurkupParserIProps> = ({blockData, idx, save, tools, setActive, active})=>{
    const Children: any = tools
    const onChange = useCallback((a: any)=>{
        if(!a) return
        return save(a)
    }, [save])
    return <Block
    {
        ...{
            children: <Children {...{
                blockData,
                 onChange
                }}/>,
            setIdx: setActive,
            idx,
            active
        }
    } />
}


export default React.memo(Editor)