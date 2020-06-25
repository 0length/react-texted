import React, { useState, useCallback, useEffect, Children, } from 'react'
interface PharBlockData {
    data: {
        text: string
    }
}

interface PharIProps {
    blockData: PharBlockData
    onChange: (e: PharBlockData)=>void
}
const Phar: React.FC<PharIProps> = ({blockData, onChange})=> {

    const [data, setData] = useState<any>(blockData.data)

    const setValue = useCallback((e)=>{
        var offset = e.target.offsetHeight - e.target.clientHeight
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + offset + 'px'
        setData({ ...data, text: e.target.value})
    }, [setData, onChange])

    // const handleSave = ()=> {
    //     onChange({...blockData, data})
    // }

    const handleDiscard = ()=>{
        'ewwef'
    }

    return (<div className="reed-phar">
        <div className="reed-phar__content">
                
                    <textarea
                        onChange={setValue}
                        // onKeyUp={handleSave}
                        value={data.text}
                    />
            </div>
    </div>)
}

export default React.memo(Phar)