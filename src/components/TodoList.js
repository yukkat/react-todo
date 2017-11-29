import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TodoItem from './TodoItem';
import _without from 'lodash/without';
import _filter from 'lodash/filter';
import _concat from 'lodash/concat';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            items: []
        };
    }
    addItem = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
            items: _concat(prevState.items, { idx: prevState.counter + 1, done: false })
        })
        )
    }
    toggleDone = (i) => {
        this.setState(prevState => {
            const el = { idx: i.idx, done: !i.done }
            const oldArr = _without(prevState.items, i);
            let newArr = [el];
            if (i.done) {
                newArr = _concat(newArr, oldArr)
            } else {
                newArr = _concat(oldArr, newArr)
            }
            return {
                items: newArr
            }
        });
    }
    clearDone = () => {
        this.setState(prevState => ({
            items: _filter(prevState.items, { done: false })
        }));
    }

    render() {
        const list = this.state.items.map((item, index) => <ListItem key={item.idx}><TodoItem item={item} done={item.done} toggle={() => this.toggleDone(item)} /></ListItem>)

        return (
            <div style={{width:400,margin:"auto"}}>
                <List>{list}</List>
                <RaisedButton onClick={this.addItem} label="Create" />
                <RaisedButton onClick={this.clearDone} label="Clear done" primary={true} />
            </div>
        );
    }
}