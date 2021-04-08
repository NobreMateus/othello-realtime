import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import GamePage from "../pages/GamePage";
import HomePage from "../pages/HomePage";
import RoomsPage from "../pages/RoomsPage"
import ConnectionProvider from '../providers/ConnectionProvider'

function Routes() {
    return <>
        <Switch>
            <Route path="/" exact>
                <HomePage /> 
            </Route>
            <ConnectionProvider> 
                <Route path="/rooms" exact> 
                    <RoomsPage></RoomsPage>
                </Route>
                <Route path="/game" exact>
                    <GamePage></GamePage>
                </Route>
            </ConnectionProvider>
            <div>Pagina Nao encontrada</div>
        </Switch>
    </>
}

export default Routes