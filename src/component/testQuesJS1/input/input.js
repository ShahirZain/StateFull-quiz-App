import React from 'react';

const Input  = (props) =>   {
    const{
        text,placeholder,value,onChange,id,className,label
    } = props
    return (
        <div className="mainReact">
            <div className="box">
                <label htmlFor={label}></label>
                <input type={text}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
                className={className}
                />
            </div>
        </div>
    )
}
export default Input;