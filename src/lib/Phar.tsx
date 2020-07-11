import React, { useState, useCallback, useEffect, Children, CSSProperties, memo, } from 'react'
interface PharBlockData {
    data: {
        text: Array<{text: string, style:CSSProperties}>
    }
}

interface PharIProps {
    blockData: PharBlockData
    onChange: (e: PharBlockData)=>void
}
const Phar: React.FC<PharIProps> = ({blockData, onChange})=> {

    const [data, setData] = useState<any>(blockData.data)
// console.log(data);

    const setValue = useCallback((value: string, idx: number)=>{
        const newData=data.text
        newData[idx] = {...data.text[idx], text: value}
        setData({
            ...data,
            text: newData
        })
        // console.log(data);
        onChange({...blockData, data})
    }, [setData, onChange])

    const handleSave = ()=> {
        onChange({...blockData, data})
    }

    const handleDiscard = ()=>{
        'ewwef'
    }

    return (<div className="reed-phar">
        <div
            className="reed-phar__content"
            contentEditable={true}
            suppressContentEditableWarning={true}
        >
                
            {data.text.map((subsection: {text: string, styles: CSSProperties}, idx: number)=>(<Textarea
                key={idx}
                setValue={setValue}
                handleSave={handleSave}
                // value={data.text}
                // escape={false}
                idx={idx}
                style={subsection.styles}
                text={subsection.text}

            />))}
            </div>
    </div>)
}

const Textarea = memo(({style, idx, text, handleSave, setValue}: any) => {

    const handleOnChange = useCallback((e)=>{
        setValue(e.target.innerHTML, idx)
        console.log(e);
            
    }, [setValue])

    const handleResize = (e: any)=>{
        var offset = e.target.offsetHeight - e.target.clientHeight
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + offset + 'px'
    }
    const handleOnKeyUp = useCallback(handleSave, [handleSave])

    return (<><div
        // onKeyUp={handleOnKeyUp}
        onInput={handleOnChange}
        // onKeyPress={handleResize}
        // onBlur={handleResize}
        // onKeyDown={handleOnChange}
        style={style}
        dangerouslySetInnerHTML={(()=>({__html: text}))()}
    /></>)
})
export default memo(Phar)