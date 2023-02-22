import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/base.css'
import './styles/theme.css'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './libs/reducers';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/Root'
import ErrorPage from "./routes/ErrorPage";

import Holder from './pages/Holder';

const router = createBrowserRouter([
  {
    path: "/", //nav bar here, with rest as children
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/holder",
        element: <Holder/>,
      },
    ],
  },
]);

export const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
