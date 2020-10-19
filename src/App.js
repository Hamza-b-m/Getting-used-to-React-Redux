import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import { plus } from "./actions/plus";
import { minus } from "./actions/minus";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer);

  return (
    <div className="App">
      <header className="App-header" >
        <div style={{ width: 150, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <MinusCircleTwoTone onClick={() => dispatch(minus(-1))} />
          <p>{counter}</p>
          <PlusCircleTwoTone onClick={() => dispatch(plus(+1))} />
        </div>
      </header>
    </div>
  );
}

export default App;
