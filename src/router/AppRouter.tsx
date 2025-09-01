import { createBrowserRouter, Navigate } from "react-router";


import { AdminLayout } from "@/admin/layout/AdminLayout";
import { AdminPages } from "@/admin/pages/AdminPages";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";


// import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { lazy } from "react";
import { HomePage } from "@/heroes/pages/home/HomePage";

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

export const router = createBrowserRouter([

    {
        path: '/',
        element: <HeroesLayout/>,
        children:[
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'heroes/:idSlug',
                element: <HeroPage/>,
            },
            {
                path: 'search',
                element: <SearchPage/>,
            },
            {
                path: '*',
                element: <Navigate to={'/'}/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <AdminPages/>,
            }
        ]
    }
],
    {
        basename: '/heroes-app/'
    }
)