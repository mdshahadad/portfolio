import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import ContactComponents from "../../Contact/ContactComponents";
import ServicesCompo from "../../Services/ServicesCompo";
import ProjectsCompo from "../../Projects/ProjectsCompo";
import AboutCompo from "../../AboutCompo/AboutCompo";

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
                element: <ProjectsCompo></ProjectsCompo>
            },
            {
                path: '/services',
                element: <ServicesCompo></ServicesCompo>
            },
            {
                path: '/contact',
                element: <ContactComponents></ContactComponents>
            },
        ]
    }
])

export default router;