import * as React from "react";
import { connect } from "react-redux";

const TodoListSFC = (props) => (
    <div>
        <ul>
            {props.todos.map(todo => (
                <li>{todo}</li>
            ) ) }
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};


export const TodoList = connect(mapStateToProps)(TodoListSFC);
