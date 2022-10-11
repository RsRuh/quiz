import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadQuiz from '../LoadQuiz/LoadQuiz';
import './Quiz.css'

const Quiz = () => {
    const questionLoad = useLoaderData();
    const allQuestion = questionLoad.data;
    const {name, id, questions} = allQuestion;
    return (
        <div>
            
            <h1 className='text-center text-4xl py-3  font-bold'>Quiz From {name}</h1>
            <div className=''>
                {
                    questions.map(each=> <LoadQuiz key={each.id} each={each}></LoadQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;