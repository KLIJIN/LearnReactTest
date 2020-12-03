import React from 'react';
import Radium from "radium";
import  "./Cockpit.css"


const Cockpit =(props) => {
    
    let classes = [];
    if (props.persons.length <=2) {
        classes.push("red");
    }

    if (props.showPersons ) {
        props.styleEl.backgroundColor = "gray";
        props.styleEl[":hover"] = {backgroundColor: "yellow", 	color: "black"}
        console.log( "showPersons", props.showPersons)
    }else {
        props.styleEl.backgroundColor = "white";
        props.styleEl[":hover"] = { backgroundColor: "lightgreen", color: "black" }

    }

console.log( "showPersons", props.showPersons)
 return(
    
    <div>
        <h1> Hello, I'm a React </h1>
        <p className= {classes} > Some text </p>
        <button style ={props.styleEl} 
                onClick  = { props.togglePersonsHandler }
        >Переключалка Имен</button>
    </div >	
 );
}


export default Radium(Cockpit);