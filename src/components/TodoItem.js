import React, { Component } from 'react';
import '../styles/TodoItem.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            active: true
        };
    }

    render() {
        let content = "TODO!"
        if (this.state.text !== "") {
            content = <input type="text" value={this.state.text} />
         } else {
             content = this.state.text
         }
        return (
            <li className={this.state.active ? 'active' : 'done'}> {content}</li>
        );
    }
}