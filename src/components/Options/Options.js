import React from 'react';

const Options = ({ option, handleOption }) => {
    return (
      
            <div className="form-control w-[70%]">
                <label onClick={()=>handleOption(option)} className="label cursor-pointer bg-gray-100 rounded-md hover:bg-green-400">
                        <input type="radio" name="radio-6" className="radio checked:bg-green-800" checked />
                        <span className="label-text text-xl font-semibold mx-auto">{option}</span>
                </label>
            </div>
           
       
    );
};

export default Options;

