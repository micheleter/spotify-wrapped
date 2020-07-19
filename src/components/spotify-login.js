import React from "react";
import ReactDOM from "react-dom";

export class SpotifyLogin {
    constructor(props) {}
    auth_user() {
        console.log("Starting auth process...");
    }

    render() {
        return (
            <div>
                <button onClick={this.auth_user}>Login to Spotify!</button>
            </div>
        );
    }
}
