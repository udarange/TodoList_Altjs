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

import React from "react";
import AltContainer from "alt-container";
import TodoStore from "../Stores/store";
import TodoActions from "../Actions/actions";

export function Todo(props) {
    const {isDone, text} = props;
    if (isDone) {
        return <strike> <font color="LightGrey">{text}</font> </strike>;
    } else {
        return <span> {text} </span>
    }
}

function TodosList({todos}) {

    return (
        <div>
            <h3>Show Todo List: <font color="red">{todos.length}</font> items</h3>

            <ul>
                {todos.map((t, id) =>
                    <li key={id}>
                        <button onClick={()=>TodoActions.toggleTodo(t.id)}>Done</button>
                        <button onClick={()=>TodoActions.deleteTodo(t.id)}>Delete</button>
                        <Todo id={t.id} isDone={t.isDone} text={t.text}/>
                    </li>
                )}
            </ul>


        </div>
    )
}

export default function () {
    return <AltContainer
        stores={[TodoStore]}
        inject={{
            todos: () => TodoStore.getState().todos,
        }}
    >
        <TodosList/>
    </AltContainer>
}
