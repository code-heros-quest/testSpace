import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';




const Dialogue = (props) => {
  const client = props.client;
  const [scene, setScene] = useState([]);

  
    client.on('scenario', (scenario) => {
      setScene([{ name: scenario.name, message: scenario.dialogue }])
      switch(scenario.type) {
        case 'roll':
          // code block
          break;
        case 'choice2':
          // code block
          break;
        case 'choice3':
          // code block
          break;
        case 'choice4':
          // code block
          break;
        case 'riddle':
          // code block
          break;
        case 'ready':

          // code block
          break;
        case 'luck':
          // code block
          break;
        default:
          // code block
      }
    });

    

  const renderScene = () => {
    return scene.map(({ name, message }, index) => (
      <div key={index} style={{ display: 'flex', flexDirection: 'column'}}>
        <h3 style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', fontSize: '1em', paddingTop: '35px', textAlign: 'center', fontFamily: 'fantasy'}}>
          {name}
        </h3>
        <div style={{ padding: '15px 30px 0px 30px', objectFit: 'contain', fontSize: '1em'}}>
      {message}
        </div>

      </div>
    ))
  }



  return (

      <div id="dialogue-window" style={{ backgroundImage: 'url(./images/textBox/text2.png)', backgroundSize: '100% 100%', borderRadius: '10px', fontSize: '1.7em', color: 'black', display: 'inline-block', width: '778px', minHeight: '510px', height: 'auto', border: '6px solid black', padding: '5px 10px 10px 10px'}}>
        {renderScene()}``
      </div>

  )
}

export default Dialogue;