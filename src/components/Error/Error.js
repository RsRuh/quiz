import React from 'react';
import Lottie from 'lottie-react';
import four from '../../assets/four.json';


const Error = () => {
    return (
        <div>
            <section className="flex items-center h-screen sm:p-16 bg-gray-900 text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <Lottie animationData={four} loop={true} />
                    <p className="text-3xl">Looks like our services are currently offline</p>
                    <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</a>
                </div>
            </section>
        </div>
    );
};

export default Error;