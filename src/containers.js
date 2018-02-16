/*
 * (C) Copyright 2010-2018 hSenid Mobile Solutions (Pvt) Limited.
 * All Rights Reserved.
 *
 * These materials are unpublished, proprietary, confidential source code of
 * hSenid Mobile Solutions (Pvt) Limited and constitute a TRADE SECRET
 * of hSenid Mobile Solutions (Pvt) Limited.
 *
 * hSenid Mobile Solutions (Pvt) Limited retains all title to and intellectual
 * property rights in these materials.
 */

/**
 * Created by archana on 2/9/18.
 */

import React from "react";
import {Link, Route, Switch} from "react-router-dom";

import AddTodoList from "./Components/addTodoList";
import ShowAll from "./Components/showAll";
import ShowCompleted from "./Components/showCompleted";
import ShowActive from "./Components/showActive";

export default class Container extends React.Component {
    render() {
        return (
            <div>
                <h1><font color="brown">ToDos App</font></h1>
                <AddTodoList/>

                <br/>

                <button><Link to="/">Show All</Link></button>
                <button><Link to="/show-completed">Completed</Link></button>
                <button><Link to="/show-active">Active</Link></button>

                <Switch>
                    <Route exact path="/" component={ShowAll}/>
                    <Route path="/show-completed" component={ShowCompleted}/>
                    <Route path="/show-active" component={ShowActive}/>
                </Switch>
            </div>
        )
    }
}
