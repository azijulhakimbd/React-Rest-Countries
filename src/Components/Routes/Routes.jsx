import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import App from '../../App';
import Root from '../../Root/Root';
import Countries from '../Pages/Countries/Countries';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children:[
        {   index:true,
            path:"/",
            loader:()=>fetch('https://restcountries.com/v3.1/all'),
            Component:Countries,
        }
    ]
    },
  ]);

