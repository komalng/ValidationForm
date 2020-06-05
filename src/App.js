import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHookForm from "./component/ReactHookForm";
import Basic from "./component/Formik";
import ReactFinalForm from "./component/ReactFinalForm";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ReactFinalForm />
       {/* <MaterialUiForm /> */}
       {/* <SimpleReactValidation /> */}
      </header>
    </div>
  );
}

export default App;
