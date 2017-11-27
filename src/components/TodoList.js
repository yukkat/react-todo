import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    addItem = () => {
        this.setState((prevState) => (prevState.items.push({
            id: prevState.items.lenght + 1
        })))
    }

    render() {
        const list = this.state.items.map(item => <TodoItem key={item.id} item={item} />)

        return (
            <div>
                <input type="text"/>
                <ul>{list}</ul>
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }
}