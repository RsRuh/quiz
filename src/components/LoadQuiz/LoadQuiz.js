
import Options from '../Options/Options';
import './LoadQuiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'

import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

  

const LoadQuiz = ({ each }) => {
    
    const { question, options, correctAnswer } = each;


    const handleOption = (option) =>{
     if(option === correctAnswer){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Answer Is Right',
            showConfirmButton: false,
            timer: 1500
          })
     }
     else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Opps, Wrong Answer',
            showConfirmButton: false,
            timer: 1500
          })
     }
    }

    

    const notify = () =>{
        Swal.fire({
            text: 'Is Your Currect Answer ',
            title: `${correctAnswer}`,
            imageUrl: 'https://img.freepik.com/free-vector/feeling-proud-concept-illustration_114360-5118.jpg?w=826&t=st=1665499619~exp=1665500219~hmac=d319263ff90b6f4fda2cbdd3e030dbd67043091194d93cd885cad673b5ec16a3',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }


    return (
        <div className='eachQuestion mb-10 m-auto md:w-[70%]'>

            <EyeIcon onClick={notify} className="h-6 flex justify-end w-6 text-black mr-3 mt-3 float-right cursor-pointer" />
            

            <h1 className='text-center py-5 text-xl font-semibold'>{question}</h1>
           
            <div className='grid gap-4 justify-items-center p-10'>

                {
                    options.map(option => <Options handleOption={handleOption} option={option}></Options>)
                }
            </div>
        </div>
    );
};

export default LoadQuiz;