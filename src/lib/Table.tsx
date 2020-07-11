import React from 'react'
interface PharIProps {

}
const Phar: React.FC<PharIProps> = ({children})=> {
    return (<div className="reed-phar">
        <div className="reed-phar__content">{children}</div>
    </div>)
}

export default Phar