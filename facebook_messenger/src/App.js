
import { useState } from 'react';
// import { Button } from '@material-ui/core';
import Button from '@mui/material/Button';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    
      event.preventDefault();
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
       <form>
         <input value ={input} onChange = {event => setInput(event.target.value)}/>
          
          
          {/* button */}
              <Button
              disabled = {!input}
              variant = "outlined"
              onClick = {sendMessage}
              type ='submit'
              >Send Message</Button>
        </form>
       

       

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
