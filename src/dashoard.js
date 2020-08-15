import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Dashboard() {


    let [selectedCategory, setSelectedCategory] = useState(1);

    let [questions, setQuestions] = useState([]);
    let [showForm, setShowForm] = useState('none');
    let [formQuestionText, setFormQuestionText] = useState('');

    useEffect(() => {
        // fetch('http://localhost:3006/questions')
        //     .then((response) => {
        //         return response.json()
        //     }).then((data) => {
        //         setQuestions(data);
        //     });
        // setQuestions([{questionText: 'akljsdhkas'}, {questionText: 'akljsdhkas kjahsdkjhs'}])
        setQuestions([{questionText: 'this is a cat 1 question', category: 1}, {questionText: 'this is a cat 2 question', category: 2}])
    }, [])


    const showQuestionForm = () => {
        if(showForm == 'none'){
            setShowForm('block');
        } else {
            setShowForm('none');
        }
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formQuestionText);


        let obj = {questionText: formQuestionText};
        let currentQuestions = questions;
        currentQuestions.push(obj);
        setQuestions(currentQuestions);

        // perform a fetch request here
        // POST /questions

        // let body = JSON.stringify({questionText: formQuestionText});
        //
        // let res = await fetch('http://localhost:3006/questions', {method: 'POST', body: body});
        // let json = await res.json();
        // console.log(json)
        //
        // res = await fetch('http://localhost:3006/questions');
        // questions = await res.json();
        // setQuestions(questions);


        // show success notification
        // cleanup etc

        // reset the form

        setFormQuestionText('');


        // let value = document.getElementById('questionText').value;
        // console.log(value);
    }

    const updateFormValue = (event) => {
        // console.log(event.currentTarget.value);
        setFormQuestionText(event.currentTarget.value);
    }

    const updateCategory = (categoryNumber) => {
        setSelectedCategory(categoryNumber);
    }

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo" />*/}
            {/*    <h1>Dashboard Component!</h1>*/}
            {/*</header>*/}
            <button onClick={showQuestionForm}>New Question</button>

            <br/>
            <br/>

            <ul>
                <li style={{background: selectedCategory == 1 ? '#ddd' : ''}} onClick={() => {updateCategory(1)}}>Category 1</li>
                <li style={{background: selectedCategory == 2 ? '#ddd' : ''}} onClick={() => {updateCategory(2)}}>Category 2</li>
                <li style={{background: selectedCategory == 3 ? '#ddd' : ''}} onClick={() => {updateCategory(3)}}>Category 3</li>
            </ul>
            <div style={{display: showForm, border: '1px solid #ddd', padding: '10px'}}>

                <form method={'POST'} onSubmit={onFormSubmit}>
                    <textarea name={'questionText'}
                              value={formQuestionText}
                              onChange={updateFormValue}
                              id={'questionText'}></textarea>
                    <br/>
                    <button type={'submit'}>Submit</button>
                </form>

            </div>


            <h1>Questions List</h1>

            {questions && questions.map((question) => {
                if(question.category == selectedCategory) {
                    return <p key={question.id}>{question.questionText}</p>
                }
            })}


        </div>
    );
}

export default Dashboard;
