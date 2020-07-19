import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SpotifyLogin } from "./components/spotify-login";

let clientId = "12c525e678244bbb9286a166bcb97c57";
let redirectUri = "https://www.spotify.com/";

function onSuccess() {
    console.log("Success");
}

function onFailure() {
    console.log("Error");
}

function App() {
    return <SpotifyLogin />;
}

export default App;
