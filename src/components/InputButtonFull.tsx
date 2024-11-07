
import * as React from 'react';
import {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage:(title:string)=>void,
};
export const InputButtonFull = (props: FullInputPropsType) => {


    const [title, setTitle] = useState<string>('');

    const ChangeHundler=(event: ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value);

    }
    const onClickHundler=()=> {
        props.addMessage(title);
        setTitle('');
    }

    return (
        <div>
            <input onChange={ChangeHundler}/>
            <button onClick={onClickHundler}>Added</button>
        </div>
    );
};