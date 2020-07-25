import React, { useState, useEffect } from 'react';


export default function Functional() {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('John');

    // const [text, setText] = useState('');
    // const [obj, setObj] = useState({as});


    useEffect(() => {
        console.log('Effect was triggered!');
    }, [])

    useEffect(() => {
        if(name=='Jane'){
            console.log('Effect was triggered on state name change to Jane!');
        } else {
            console.log('Effect was triggered on state name change!');
        }
    }, [name])


    // useEffect(() => {
    //     console.log('Effect was triggered!');
    //     console.log('the name now is ' + name);
    // }, [name]);


    // let name = 'John';

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter(counter => counter + 1);
    //     }, 1000);
    //
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    const changeName = () => {
        setName('Jane');

        // if(name=='Jane'){
        //     console.log('Effect was triggered on state name change to Jane!');
        // } else {
        //     console.log('Effect was triggered on state name change!');
        // }

        // call another function
        // this.setState({name: 'jane'})
        // console.log('the name now is ' + name)
    }

    // const onChangeText = (ev) => {
    //     // console.log(ev.currentTarget.value);
    //     setText(ev.currentTarget.value);
    // }

    // const submitText = () => {
    //     // fetch(post, text)
    //     console.log(text)
    // }

    const changeCounter = () => {
        let newCounterValue = counter + 1;
        setCounter(newCounterValue);
    }


    return (<div>
        functional component!
        <br/>

        {/*<input onChange={onChangeText}/>*/}
        {/*<button onClick={submitText}>Submit Text</button>*/}

        {name}

        <button onClick={changeName}>Change name</button>

        <button onClick={changeCounter}>Change Counter</button>

        {/*<button onClick={changeName}>Change Name</button>*/}

        {/*<br/>*/}

        {/*React hooks and functional components*/}

        {counter}
    </div>)

}
