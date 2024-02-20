import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import ContactComponents from "../../Contact/ContactComponents";
import ServicesCompo from "../../Services/ServicesCompo";
import ProjectsCompo from "../../Projects/ProjectsCompo";

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
                path: '/contact',
                element: <ContactComponents></ContactComponents>
            },
            {
                path: '/services',
                element: <ServicesCompo></ServicesCompo>
            },
            {
                path: '/projects',
                element: <ProjectsCompo></ProjectsCompo>
            }
        ]
    }
])

export default router;