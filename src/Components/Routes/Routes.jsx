import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Home/Home";
import ContactComponents from "../../Contact/ContactComponents";

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
            }
        ]
    }
])

export default router;