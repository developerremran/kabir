import { createBrowserRouter } from "react-router-dom";
import Error from "../ErrorPage/Error";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import App from "../App";
import Home from "../Layout/Home";
import Recipe from "../Comonent/Recipe/Recipe";
import Details from "../Comonent/Recipe/Details";
import Blog from "../Comonent/Blog";
import Spinner from "../Comonent/Spinner/Spinner";
import Contact from "../Comonent/Contact";
import About from "../Comonent/About";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch(`https://asb-kabi-r.vercel.app/recipe`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'recipe',
                element:<Recipe></Recipe>,
                loader:() =>fetch(`https://asb-kabi-r.vercel.app/recipe`)
            },
            {
                path:'/recipe/:id',
                element:<Details></Details>,
                loader: ({params}) => fetch(`https://asb-kabi-r.vercel.app/recipe/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: 'loader',
                element: <Spinner></Spinner>
              },
            
        ]
    }
])
export default router;