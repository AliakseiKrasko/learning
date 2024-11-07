
import * as React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void;
};
export const Button = (props: ButtonPropsType) => {
    return (
        <div style={{padding:'10px 20px'}}>
            <button onClick={props.callBack}>{props.name}</button>
        </div>
    );
};