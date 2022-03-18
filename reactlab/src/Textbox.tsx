import React from "react";


type textBoxProp = {
    label: string
    change: (text : string) => void
}

function TextBox(props : textBoxProp){
    return (
        <div>
            <p>{props.label}</p>
            <input type={'text'} onChange={event => props.change(event.target.value)}></input>
        </div>
    )
}
export default TextBox;