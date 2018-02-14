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
import TodoActions from "../Actions/actions";

export default class AddTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        if(e.keyCode === 13){
            let newItem = this.refs.newItem.value;
            TodoActions.addNewTodo(newItem);
            this.refs.newItem.value = "";
        }
    }

    render(){
        return (
            <div>
                <input type="text"
                       ref="newItem"
                       placeholder="Add Todo" onKeyDown={this.handleSubmit}  />
            </div>
        )
    }
}

