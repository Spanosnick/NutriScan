import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import Login from "./pages/Login";
import {StoresList} from "./pages/Authorized/StoresList";
import {StorePage} from "./pages/Authorized/Store";
import NotFoundPage from "./pages/NotFoundPage";
import {StoreNavigation} from "./pages/Authorized/StoreNavigation";
import {Dashboard} from "./pages/Authorized/Dashboard";
import RootLayout from "./pages/RootLayout";
import EditStore from "./pages/Authorized/EditStore";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateStore from "./pages/Authorized/CreateStore";
import {StoresRoot} from "./components/Stores/StoresRoot";
import {storeDetailsLoader} from "./utils/stores";
import {ProductsPage} from "./components/Products/AllProducts";
import {productDetailsLoader} from "./utils/products";
import EditProductPage from "./pages/Authorized/Products/EditProductPage";

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
                element: <ProtectedRoute><StoreNavigation/></ProtectedRoute>,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>
                    },
                    {
                        path: 'stores',
                        element: <StoresRoot/>,
                        children: [
                            {
                                index: true,
                                element: <StoresList/>
                            },
                            {
                                path: ':id',
                                element: <Outlet/>,
                                id: 'store-outlet',
                                loader: storeDetailsLoader,
                                children: [
                                    {
                                        index: true,
                                        element: <StorePage/>
                                    },
                                    {
                                        path: 'edit',
                                        element: <EditStore/>
                                    }
                                    ]
                            }
                            ]
                    },
                    {
                        path: 'products',
                        element: <Outlet />,
                        id: 'products-outlet',
                        loader: productDetailsLoader,
                        children: [
                            {
                                index: true,
                                element: <ProductsPage />,
                            },
                            {
                                path: ':productId/edit',
                                element: <EditProductPage />,
                            }

                        ]
                    },
                    {
                        path: 'create',
                        element: <CreateStore/>
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
