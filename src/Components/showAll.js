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
 * Created by archana on 2/16/18.
 */

import React from "react";
import AltContainer from "alt-container";
import TodoStore from "../Stores/store";
import TodoActions from "../Actions/actions";

export function Edit({text, id}) {
    console.log("##################" + text + " " + id);
    return <input type="text" value={text}/>
}

export function Todo({isDone, text, id}) {
    if (isDone) {
        return <div>
            <button onClick={() => TodoActions.toggleTodo(id)}>Undo</button>
            <button onClick={() => TodoActions.deleteTodo(id)}>Delete</button>
            <span> <strike><font color="LightGrey">{text}</font> </strike></span>
        </div>
    } else {
        let isEditing = false;
        if (isEditing) {
            return <div>
                <button >Cancel</button>
                <button >Save</button>
                <input type="text" value={text} readOnly={true}/>
            </div>
        } else {
            return <div>
                <button onClick={() => TodoActions.toggleTodo(id)}>Done</button>
                <button onClick={e => Edit({text, id})}>__Edit</button>
                <span> {text} </span>
            </div>
        }
    }
}

function TodosList({todos}) {
    return (
        <div>
            <h3>Show All List: <font color="red">{todos.length}</font> items</h3>
            {/*<EditTodo id={1} text={"Hello"}/>*/}
            <ul>
                {todos.map((t) =>
                    <li key={t.id}>
                        <Todo id={t.id} isDone={t.isDone} text={t.text}/>
                        {/*<TodoItem t={t}/>*/}
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
            todos: () => TodoStore.getState().todos
        }}
    >
        <TodosList/>
    </AltContainer>
}
