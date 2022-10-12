import React from 'react';
import { Link } from 'react-router-dom';

import './Topics.css'
const Topics = ({ topic,handleClick }) => {



    const { id, name, logo, total } = topic;
    return (
        
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100 PerCart">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-100">Total Question: {total}</p>
                    </div>
                    
                    <Link to={`/quiz/${id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Start MCQ</button>
                    </Link>
                </div>
            </div>
        
    );
};

export default Topics;