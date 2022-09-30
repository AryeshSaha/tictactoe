import React from "react";
import './Square.css'

const SquareComps = (props) => {
    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <span
            className={classes}
            onClick={() => props.onClick(props.index)}>
           {props.state}
        </span>
    )
}

export default SquareComps;