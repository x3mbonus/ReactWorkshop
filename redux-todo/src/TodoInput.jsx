import * as React from "react";
import { addTodo } from "./actionCreators";
import { connect } from "react-redux";

class TodoInputSFC extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            todoText:""
        }
    }
    
    onChange =(e) => {
        console.log(e.target);
        this.setState({todoText: e.target.value});
    };

    render(){
        return (
            <form onSubmit={e => {e.preventDefault(); this.props.onClick(this.state.todoText);}}>
                <input type="text" name="todoText" id="todoText" onChange={this.onChange}/>
                <button type="submit">Add</button>
            </form>
        )
    };
    
};



// const TodoInputSFC = props => (
//     <form onSubmit={e=>props.onClick(e.todoText.value)}>
//         <input type="text" name="todoText" id="todoText"/>
//         <button onClick={() => props.onClick('todosadasd')}>Add</button>
//     </form>
// );


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => ({
    onClick: (text) => dispatch(addTodo(text))
    });

export const TodoInput = connect(mapStateToProps, mapDispatchToProps)(TodoInputSFC)