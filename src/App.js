import './App.css';


import {createBrowserRouter, Link, Route, RouterProvider, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import Login from "./pages/Login";
import {StoresList} from "./pages/Authorized/StoresList";
import {Store} from "./pages/Authorized/Store";

import NotFoundPage from "./pages/NotFoundPage";
import {StoreNavigation} from "./pages/Authorized/StoreNavigation";
import {Dashboard} from "./pages/Authorized/Dashboard";
import RootLayout from "./pages/RootLayout";
import EditStore from "./pages/Authorized/EditStore";

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'app',
                element: <StoreNavigation/>,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>
                    },
                    {
                        path: 'stores',
                        element: <StoresList/>,
                        children: [
                            {
                                path: ':id',
                                element: <Store/>
                            }
                        ]
                    },
                    {
                        path: 'edit',
                        element: <EditStore/>
                    }
                ]
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App;
