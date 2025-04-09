import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Homepage} from "./features/Homepage/views/homepage";
import Login from "./features/Login/views/login";
import {StoresList} from "./features/Store/views/StoresList";
import {StorePage} from "./features/Store/views/Store";
import NotFoundPage from "./common/views/notFoundPage";
import {StoreNavigation} from "./features/Store/views/StoreNavigation";
import {Dashboard} from "./features/Dashboard/views/Dashboard";
import EditStore from "./features/Store/views/EditStore";
import ProtectedRoute from "./common/components/ProtectedRoute";
import CreateStore from "./features/Store/views/CreateStore";
import {StoresRoot} from "./common/components/Stores/StoresRoot";
import {storeDetailsLoader} from "./common/utils/stores";
import {ProductsPage} from "./common/components/Products/AllProducts";
import {productDetailsLoader} from "./common/utils/products";
import EditProductPage from "./features/Product/views/EditProduct/EditProductPage";
import React from "react";

const router = createBrowserRouter([
    {
        path: '',
        element: <Outlet/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <Homepage/>
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
