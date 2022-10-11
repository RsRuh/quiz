import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../assets/animetion.json';
import './Banner.css'

const Banner = () => {
  return (

   

      <div className=" bg-indigo-400 text-gray-900 banner">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-3xl tracking-tighter font-bold">This Page Is About <br /> <span className='text-md'>importance of quiz</span>
            </h2>
            
            <p className="space-x-2 text-center py-2 lg:py-0">
              <span>In the generation of modern education, there are so many subjects to consolidate. <br /> Sometimes it is being very difficult to remember and learned effectively. <br /> Therefore, it the responsibility of the teachers to encourage them on learning. <br /> Some of the top cbse school in howrah providing the best teaching methodology to children <br /> for having a better learning capacity in the future.  The school organizes the <br /> group quiz to promote education and learning together.</span>
              <span className="font-bold text-lg">Rs Ruhul</span>
            </p>
            <Lottie className='animetion' animationData={animation} loop={true} />
          </div>
        </div>
      </div>


  );
};

export default Banner;