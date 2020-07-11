import React, { useCallback } from 'react'

// interface BlockIProps {
// }

const Block: React.FC<any> = (props)=>{
    const callback = useCallback((e)=>{
        // console.log(Object.keys(e).map((i)=>[i,e[i]]))
        props.setIdx(props.idx)
    }, [])
    return (<div className={"reed-block "+ (props.active===props.idx?"reed-block_active":'')} onClick={callback}>
        <div className="reed-block__content">
            {props.children}
        </div>
    </div>)
}


export default Block