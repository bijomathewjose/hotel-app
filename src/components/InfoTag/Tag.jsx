import React from 'react'
import Style from './Tag.module.css'
const Tag = ({children,customStyles}) => {
  return (
    <div className={Style.Tag} style={customStyles}>
        {children}
    </div>
  )
}

export default Tag