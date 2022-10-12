
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Main from './layout/main'
import Error from './components/Error/Error';
import Quiz from './components/Quiz/Quiz';

function App() {


  const router = createBrowserRouter([
    {
      path: '/', children:[
        {
          path: '/',loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },element: <Home></Home>
        },
        {
          path: '/statistics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')
          ,
          element: <Statistics></Statistics>
        },
        {
          path: '/blog', element: <Blog></Blog>
        },
        {
          path: '/quiz/:id',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`) 
          }
          , element: <Quiz></Quiz>
        }
      ], element: <Main></Main>
    },
    {
      path: '*', element: <Error></Error>
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
