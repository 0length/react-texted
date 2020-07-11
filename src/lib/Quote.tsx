import React, { useState, useCallback } from 'react'
interface QuoteBlockData {
    data: {
        text: string
    }
}
interface QuoteIProps {
    blockData: QuoteBlockData
    onChange: (e: QuoteBlockData)=>void
}
const Quote: React.FC<QuoteIProps> = ({blockData, onChange})=> {
    
    const [data, setData] = useState<any>(blockData.data)

    const setValue = useCallback((e)=>{
        var offset = e.target.offsetHeight - e.target.clientHeight
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + offset + 'px'
        setData({ ...data, text: e.target.value})
    }, [setData, onChange])

    const adCursor = useCallback((e)=>{
        e.target.focus()
        console.log(Object.keys(e).map((i)=>[i,e[i]]))

        
    }, [])
    const handleSave = ()=> {
        onChange({...blockData, data})
    }

    return (<div className="reed-quote">
        <div className="reed-quote__content">
            {/* <textarea
                onChange={setValue}
                onKeyUp={handleSave}
                // value={data.text}
            > */}
                {data.text.split("").map((char: string, idx: number)=><span key={idx} onClick={adCursor}>{char}</span>)}
                {/* </textarea> */}
        </div>
    </div>)
}

export default Quote