import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GameContainer from './GameContainer';

ReactDOM.render(<GameContainer size={5} winnerSize={3}></GameContainer>, document.getElementById("root"))