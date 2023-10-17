
import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
      console.log('I am working');
      // all the logic to send a message goes here
      setMessages([...messages, input]);
      setInput('');
  }
  return (
    <div className="App">
      <h1>Let's build the Facebook Messenger Clone</h1>
      {/* input field
       */}
       <input value ={input} onChange = {event => setInput(event.target.value)}/>

       {/* button */}
        <button
        onClick = {sendMessage}
        >Send Message</button>

        {/* messages themselves */}
        
        {
          messages.map(message => (
            <p>{message}</p>
          ))
        }


    </div>
  );
}

export default App;
