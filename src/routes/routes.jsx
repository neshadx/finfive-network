import { createBrowserRouter } from "react-router";
import Errorpage from "../pages/Errorpage/Errorpage";
import Home from "../pages/home";
import About from "../pages/about/About";
import Favorite from "../pages/favorite/Favorite";
import PhonesDetails from "../Component/PhoneDetails/PhonesDetails";
import Cart from "../cart/Cart";
import Layout from "../Layout/Layout";

export const router=createBrowserRouter([
    {
      path:'/',
      Component:Layout,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            Component:Home,
            hydrateFallbackElement:<p className="text-3xl font-bold">Data are Loading...</p>,
            loader:()=>fetch('../phones.json')
        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'/favorite',
            Component:Favorite
        },
        {
            path:'/phone-details/:id',
            Component:PhonesDetails,
            hydrateFallbackElement:<p className="text-3xl font-bold">Data are Loading...</p>,
            loader:()=>fetch('../phones.json')
        },
        {
          path:'/cart',
          Component:Cart,
          hydrateFallbackElement:<p className="text-3xl font-bold">Data are Loading...</p>,
          loader:()=>fetch('../phones.json')
      }
      ]
    }
  ])