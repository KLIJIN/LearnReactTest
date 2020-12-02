import React, {useState} from "react";
import "./Personal.css"

export const Person = (props) => {
//    debugger;

 const [count, setCount] =  useState(4)
//  debugger;

 let decrementCount = (props) => {
    return(
        setCount(count - 1)
    )
 }
return (
        <div className = "person">
            <p onDoubleClick={props.click}> I'am a {props.name} and i am  {props.age} year old</p>
            <p>{props.children}</p>

            <button onClick={decrementCount}>кнопка</button>
            <span>{count}</span>
            <button onClick={props.clickProperty}>кнопка</button>
            <div>
                <input type="text" onChange = {props.changed} value = {props.name} />
            </div>
        </div>
)
}