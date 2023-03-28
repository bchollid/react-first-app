import logo from './logo.svg';
import './App.css';
import Link from "./shared/link.jsx"

function NewHeader(){
  let heading = "Hello World!";
  return(
    <div>
      <h1>{heading}</h1>
      <p>{"Trying it out!"}</p>
      <ul>
        <li>"Mic check"</li>
        <li>1</li>
        <li>2</li>
      </ul>
  </div>
  );
}

function App() {
  let text = "React Demo. This is text from a variable."

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <NewHeader />
         <Link />
      </header>
    </div>
  );
}

export default App;
