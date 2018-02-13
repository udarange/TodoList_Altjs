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
 * Created by archana on 2/12/18.
 */

import alt from '../../alt'
import TodoAction from "../Actions/actions"
import {List, Map} from "immutable";

class TodoStore {
    constructor() {
        this.todos = [];
        this.nextTodoId =0;

        this.bindListeners({
            handleAddTodo: TodoAction.ADD_NEW_TODO,
            handleToggleTodo: TodoAction.TOGGLE_TODO,
            handleDeleteTodo: TodoAction.DELETE_TODO,
        });
    }

    handleAddTodo(task) {
        console.log("STORE ---> add")
        console.log(this.todos);
        this.todos.push({
            id : this.nextTodoId++,
            isDone : false,
            text : task
        })
    }

    handleToggleTodo(id) {
        console.log("STORE ---> toggle")

        this.todos.map(t => {
            if (t.id === id) {
                t.isDone = !t.isDone;
            }
        });
    }

    handleDeleteTodo(id) {
        console.log("STORE ---> delete")
        this.todos = this.todos.filter(t => t.id !== id)
    }
}

export default alt.createStore(TodoStore)