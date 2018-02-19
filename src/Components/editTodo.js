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


export default class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.text,
            previousVal: this.props.text,
            id: this.props.id,
            isEditable: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.edittodo = this.edittodo.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log("<<<" + this.state.value)
    }

    handleSubmit() {
        console.log(">>>>>>>>>>>>>>>>" + this.state.id + " " + this.state.value)
        TodoActions.updateTodo(this.state.id, this.state.value)
        // console.log("TEST");
        this.edittodo();
        event.preventDefault();
    }

    handleCancel() {
        this.setState({
            value: this.state.previousVal
        });
        this.edittodo();
        event.preventDefault();
    }

    edittodo() {
        this.setState({
            isEditable: !this.state.isEditable
        })
    }

    render() {
        // return <p>Testing</p>
        if (this.state.isEditable) {
            return <div>
                {/*<p>Testing</p>*/}
                <button onClick={e => this.handleCancel()}>Cancel</button>
                <button onClick={e => this.handleSubmit()}>Save</button>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
        } else {
            return <div>
                <button onClick={() => TodoActions.toggleTodo(this.state.id)}>Done</button>
                <button onClick={e => this.edittodo()}>__Edit</button>
                <span> {this.state.value} </span>
            </div>
        }


        // return (
        //     <div>
        //         <form onSubmit={this.handleSubmit}>
        //             <label>
        //                 <input type="text" value={this.state.value} onChange={this.handleChange}/>
        //             </label>
        //             <input type="submit" value="Submit"/>
        //         </form>
        //     </div>
        // );
    }
}

