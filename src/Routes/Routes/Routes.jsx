import { createBrowserRouter } from "react-router-dom";
import Root from "../../Components/Root/Root/Root";
import Home from '../../Components/Home/Home';
import ProjectsCompo from "../../Projects/ProjectsCompo";
import ServicesCompo from "../../Services/ServicesCompo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/about',
            //     element: <AboutCompo></AboutCompo>
            // },
            {
                path: '/projects',
                element: <ProjectsCompo></ProjectsCompo>
            },
            {
                path: '/services',
                element: <ServicesCompo></ServicesCompo>
            },
            // {
            //     path: '/contact',
            //     element: <ContactComponents></ContactComponents>
            // },
            // {
            //     path: '/services/order',
            //     element: <ServicesOrderForm></ServicesOrderForm>
            // },
            // {
            //     path: '/profile',
            //     element: <Profile></Profile>
            // }
        ]
    }
])

export default router;