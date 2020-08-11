import React from "react";
import {
    Route, Switch,
} from "react-router-dom";
import {CheckoutContainer} from "../Checkout";
import {Home} from "../Home/Home";
import {Item} from "../Item/Item";
import ItemsList from "../Item/ItemsList";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/check-out" component={CheckoutContainer}/>
            <Route exact path="/item" component={Item}/>
            <Route exact path="/items" component={ItemsList}/>
            {/*<Route exact path="/settings" component={SettingsPage}/>*/}
        </Switch>
    );
}