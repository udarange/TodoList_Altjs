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
import AddTodoList from "./Components/addTodoList";
import ShowTodoList from "./Components/showTodoList";

export default class Container extends React.Component {
    render() {
        return <div>
            <h1>ToDos App</h1>
            <AddTodoList/>
            <ShowTodoList/>
        </div>
    }
}
