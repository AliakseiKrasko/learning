
import * as React from 'react';

type StudentsPropsType = {
    students: Array<StudentsTitle>
};

type StudentsTitle = {
    id: number
    name: string
    age: number
}
export const ListComponets = (props: StudentsPropsType) => {
    return (
        <ul>
            {props.students.map((student, index)=> {
                return (
                    <li key={index}>
                        <span>{student.id}</span>
                        <span>{student.name}</span>
                        <span>{student.age}</span>
                    </li>
                )
            })}


        </ul>
    );
};