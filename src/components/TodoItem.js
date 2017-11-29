import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import '../styles/TodoItem.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            text: "",
            done: false
        };
    }
    handleInput = (e) => {
        this.setState({ text: e.target.value });
    }
    catchEnter = (e) => {
        if (e.key === "Enter") {
            this.toggleEditing();
        }
    }
    toggleEditing = () => {
        this.setState(prevState => ({ editing: !prevState.editing }))
    }

    render() {
        let content = null;
        const style = {
            float:"left",
            width:"auto"
        }
        const editButton = <IconButton onClick={this.toggleEditing}>{this.state.editing ? <ContentSave/> : <EditorModeEdit/>}</IconButton>;

        if (this.state.editing) {
            content = <TextField name="content" value={this.state.text} onKeyPress={this.catchEnter} onChange={this.handleInput} />
        } else {
            content = <span className={this.props.done ? 'done' : 'active'}>{this.state.text}</span>
        }
        return (
            <div><Checkbox style={style} onCheck={this.props.toggle} checked={this.props.done}/> {content} {editButton}</div>
        );
    }
}