import React, {useState} from 'react';
import {Button} from './components/Button';
import {ListComponets} from './components/ListComponets';
import {ListCar} from './components/ListCar';
import {InputButtonFull} from './components/InputButtonFull';



function App() {


    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'X5', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Mersedes', model: 'MLS', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Audi', model: 'Q7', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Ford', model: 'Kuga', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'VW', model: 'Polo', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Subaru', model: 'Forester', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Isuzu', model: 'Dragon', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Opel', model: 'Kadet', year: 2008, odometr: 25000, condition: 'good'},
        {manufacturer: 'Renault', model: 'Fufel', year: 2008, odometr: 25000, condition: 'good'}
    ]

  const [count, setCount] = useState(0);

  const callBack=()=>{
    setCount(count + 1);
    console.log(count)
  }

  const buttonReset=()=> {
    setCount(0);
  }

  const [message, setMessage] = useState([
      {message: 'message1'},
      {message: 'message2'},
      {message: 'message3'},
      {message: 'message4'}

  ]);
const addMessage=(title:string)=> {
    let newMessage = {message: title}
    setMessage([newMessage, ...message])
}

  return (

      <>
          <InputButtonFull addMessage={addMessage} />
          {message.map((el, index)=>{
              return (
                  <div key={index}>{el.message}</div>
              )
          })}
          <ListCar topCars={topCars} />
          <ListComponets students={students} />
          <div style={{margin: '30px 500px', display: 'flex', justifyContent: 'center'}}>

              <h1>{count}</h1>
              <Button name={'CURE'} callBack={callBack}/>
              <Button name={'RESET'} callBack={buttonReset}/>
          </div>
      </>

  );
}

export default App;
