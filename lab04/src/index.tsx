import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Zad01 } from "./Zad01/Zad01";
import { Zad02 } from "./Zad02/Zad02";
import { Zad04 } from "./Zad04/Zad04";
import reportWebVitals from "./reportWebVitals";
import { Zad06 } from "./Zad06/Zad06";
import { Zad09 } from "./Zad09/Zad09";
import { Zad11 } from "./Zad011/Zad11";
import { Zad14 } from "./Zad14/Zad14";
import { Zad16 } from "./Zad16/Zad16";
import { Card, CardContent, CardHeader } from "@mui/material";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Card>
            <CardHeader title="Zad01"></CardHeader>
            <CardContent>
                <Zad01 />
            </CardContent>
        </Card>
        <br></br>
        <Card>
            <CardHeader title="Zad02 - 03, 12, 13"></CardHeader>
            <CardContent>
                <Zad02 />
            </CardContent>
        </Card>
        <br></br>
        <Card>
            <CardHeader title="Zad04 - 05"></CardHeader>
            <CardContent>
                <Zad04 />
            </CardContent>
        </Card>
        <br></br>
        <Card>
            <CardHeader title="Zad06 - 08"></CardHeader>
            <CardContent>
                <Zad06 />
            </CardContent>
        </Card>
        <br />

        <Card>
            <CardHeader title="Zad09 - 10"></CardHeader>
            <CardContent>
                <Zad09 />
            </CardContent>
        </Card>
        <br />
        <Card>
            <CardHeader title="Zad11"></CardHeader>
            <CardContent>
                <Zad11 />
            </CardContent>
        </Card>
        <br />
        <Card>
            <CardHeader title="Zad14 - 15"></CardHeader>
            <CardContent>
                <Zad14 />
            </CardContent>
        </Card>
        <br />
        <Card>
            <CardHeader title="Zad16"></CardHeader>
            <CardContent>
                <Zad16 />
            </CardContent>
        </Card>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
