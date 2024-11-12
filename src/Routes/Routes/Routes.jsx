import { createBrowserRouter } from "react-router-dom";
import Root from "../../Components/Root/Root/Root";
import Home from '../../Components/Home/Home';
import ServicesCompo from "../../Services/ServicesCompo";
import AboutCompo from "../../AboutCompo/AboutCompo";
import ServicesOrderForm from "../../Pages/ServicesOrderForm";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutCompo></AboutCompo>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/services',
                element: <ServicesCompo></ServicesCompo>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/services/order',
                element: <ServicesOrderForm></ServicesOrderForm>
            },
            // {
            //     path: '/profile',
            //     element: <Profile></Profile>
            // }
        ]
    }
])

export default router;