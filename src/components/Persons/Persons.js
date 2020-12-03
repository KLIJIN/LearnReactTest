import React from 'react';
import Person from "./Person/Person.js" /* импортируем только дочерние элементы, родительский элементы импортировать не нужно*/

export const Persons = (props) => {
    return (
        props.persons.map( (person, index) => {
        return <Person click = { () => props.clicked(index) } //стрелочная функция внутри параметра - альтернатива байнду функции. 
                       name = {person.name}
                       age = {person.age} 
                       key = {person.id}
                       changed = { (event) => props.changed(event, person.id) }
                />				
                        })

    ) 
}