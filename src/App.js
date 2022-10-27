import './App.css';
import Home from "./Pages/Home";
import Header from "./Components/Header";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useRoutes} from "react-router-dom"
import ErrorPage from "./Pages/Error";
import Account from "./Pages/Account/Account";
import Register from "./Pages/Auth/Register";
import Diagnoses from "./Pages/Diagnose/Diagnoses";
import Records from "./Pages/Record/Records";
import Record from "./Pages/Record/Record";
import React from "react";
import NewRecord from "./Pages/Record/NewRecord";
import Diagnose from "./Pages/Diagnose/Diagnose";
import NewDiagnose from "./Pages/Diagnose/NewDiagnose";
import Accounts from "./Pages/Account/Accounts";
import Login from "./Pages/Auth/Login";
import Doctors from "./Pages/Doctor/Doctors";
import Doctor from "./Pages/Doctor/Doctor";
import NewDoctor from "./Pages/Doctor/NewDoctor";
import UpdateAccount from "./Pages/Account/UpdateAccount";
import UpdateDoctor from "./Pages/Doctor/UpdateDoctor";

function App() {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <ErrorPage/>
        },
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/accounts",
            element: <Accounts/>,
            children: [
                {path: ":id", element: <Account/>},
            ]
        },
        {
            path: "/diagnoses",
            element: <Diagnoses/>,
            children: [
                {path: "new", element: <NewDiagnose/>},
                {path: ":id", element: <Diagnose/>},
            ]
        },
        {
            path: "/records",
            element: <Records/>,
            children: [
                {path: "new", element: <NewRecord/>},
                {path: ":id", element: <Record/>},
            ]
        },
        {
            path: "/doctors",
            element: <Doctors/>,
            children: [
                { path: "new", element: <NewDoctor/> },
                { path: ":id", element: <Doctor/>},
            ]
        },
    ]);

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/accounts">
                        <Route index element={<Accounts/>}/>
                        <Route path=":id" element={<Account/>}/>
                        <Route path=":id/edit" element={<UpdateAccount/>}/>
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                    <Route path="/diagnoses">
                        <Route index element={<Diagnoses/>}/>
                        <Route path=":id" element={<Diagnose/>}/>
                        <Route path="new" element={<NewDiagnose/>}/>
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                    <Route path="/records">
                        <Route index element={<Records/>}/>
                        <Route path=":id" element={<Record/>}/>
                        <Route path="new" element={<NewRecord/>}/>
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                    <Route path="/doctors">
                        <Route index element={<Doctors/>}/>
                        <Route path=":id" element={<Doctor/>}/>
                        <Route path="new" element={<NewDoctor/>}/>
                        <Route path="*" element={<ErrorPage />} />
                        <Route path=":id/edit" element={<UpdateDoctor/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
