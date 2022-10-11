
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

import Footer from '../Footer/Footer';

import Topics from '../Topics/Topics';


const Home = ({handleClick}) => {
    const data = useLoaderData();
    const topics = data.data;
    

    return (
        <div>
            
            <Banner></Banner>
            <div className='flex justify-evenly my-10 gap-10 flex-col md:flex-row'>
            {
                topics.map(topic=><Topics handleClick={handleClick} key={topic.id} topic={topic}></Topics>)
            }
            </div>
            
            <Footer></Footer>
            
       
        </div>
    );
};

export default Home;