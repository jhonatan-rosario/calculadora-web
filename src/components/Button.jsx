import React from "react";
import '../style/Button.css';

const Button = props => {
    
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';
    /*
    classes += props.noBorderBottom ? 'no-border-bottom' : '';
    classes += props.noBorderRight ? 'no-border-right' : '';
    */
    return (
        <button 
            onClick={e => props.click && props.click(props.value)}
            className={classes} >
            {props.label}
        </button>
    );
};
export default Button