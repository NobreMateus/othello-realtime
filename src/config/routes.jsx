import React, {useContext} from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import GamePage from "../pages/GamePage";
import HomePage from "../pages/HomePage";
import RoomsPage from "../pages/RoomsPage"
import ConnectionProvider from '../providers/ConnectionProvider'
import { UserConContext } from '../providers/UserConProvider'

function Routes() {
    const { userName } = useContext(UserConContext)
    return <>
        <Switch>
            <Route path="/" exact>
                <HomePage /> 
            </Route>
            <ConnectionProvider> 
                <Route path="/rooms" exact> 
                    {userName==="" ? <Redirect to="/" /> :  <RoomsPage></RoomsPage>} 
                </Route>
                <Route path="/game" exact>
                    {userName==="" ? <Redirect to="/" /> :  <GamePage></GamePage>}
                </Route>
            </ConnectionProvider>
            <div>Pagina Nao encontrada</div>
        </Switch>
    </>
}

export default Routes