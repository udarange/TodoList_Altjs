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
import TodoActions from "../Actions/actions";


// export function Todo({isDone, text, isEditable}) {
//     if (isDone) {
//         return <span> <strike><font color="LightGrey">{text}</font> </strike></span>
//     } else {
//         if (isEditable) {
//             return (
//                 <form >
//                     <label>
//                         <input type="text" value={text}/>
//                     </label>
//                     <input type="submit" value="Submit"/>
//                 </form>
//             )
//         } else {
//             return <span> {text} </span>
//         }
//     }
// }

export function Todo({isDone, text}) {
    return isDone ?
        <span> <strike><font color="LightGrey">{text}</font> </strike></span> :
        <span> {text} </span>
}

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
        };
    }

    render() {
        return (
            <div>

                <button onClick={() => TodoActions.toggleTodo(t.id)}>Done</button>
                <button onClick={() => TodoActions.deleteTodo(t.id)}>Delete</button>
                {/*<button onClick={() => this.setState({isEditable: true})}>Edit</button>*/}
                <Todo id={this.props.t.id} isDone={this.props.t.isDone} text={this.props.t.text}/>
            </div>
        )
    }
}
