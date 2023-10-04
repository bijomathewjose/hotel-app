import { useId } from 'react'
import Style from './Button.module.css'

const Button = ({children,onClick,customStyles={},id=useId()}) => {
    return (
        <div id={id} style={customStyles} onClick={onClick} className={Style.button}>
            {children}
        </div>
    )
}

export default Button