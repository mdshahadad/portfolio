import { createBrowserRouter } from "react-router-dom";
import Root from "../../Components/Root/Root/Root";
import Home from '../../Components/Home/Home';
import ServicesOrderForm from "../../Pages/ServicesOrderForm";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import AboutMe from "../../AboutCompo/AboutMe";
import Services from "../../Home/Services/Services";

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
                element: <AboutMe></AboutMe>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/service',
                element: <Services></Services>
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