import * as React from "react";
import { addTodo } from "./actionCreators";
import { connect } from "react-redux";


const TodoInputSFC = props => (
    <div>
        <input type="text" name="" id=""/>
        <button onClick={props.onClick('todo')}>Add</button>
    </div>
);


const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => ({
    onClick: () => (dispatch(addTodo()))
});

export const TodoInput = connect(mapStateToProps, mapDispatchToProps)(TodoInputSFC)