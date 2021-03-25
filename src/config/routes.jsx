import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import HomePage from "../pages/HomePage";

function Routes() {
    return <>
        <Switch>
            <Route path="/" exact>
                <HomePage /> 
            </Route>
            <Route path="/rooms" exact> 
                <div>Rooms</div>
            </Route>
            <Route path="/game" exact>
                <div>Game</div>
            </Route>
            <div>Pagina Nao encontrada</div>
        </Switch>
    </>
}

export default Routes