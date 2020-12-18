import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import socket from '../components/connect.js';



const styleShow = {
  margin: 'auto', 
  backgroundImage: 'url(./images/scroll.png)', 
  backgroundSize: '100% 100%', 
  borderRadius: '10px', 
  fontSize: '1.7em', 
  color: 'black', 
  display: 'inline-block', 
  width: '935px', 
  minHeight: '610px', 
  height: 'auto', 
  padding: '5px 10px 10px 10px',
}
const styleHide = {
  display: 'none'
}
let characterPicked = null;

const JoinScreen = () => {
  const[state, setState] = useState('')
  const [gameData, setGameData] = useState('');
  const [charInfo, setCharInfo] = useState({char: 'hunter', name: 'michael'});
  const [startTheme, setStartTheme] = useState(styleShow);
  const [charTheme, setCharTheme] = useState(styleHide);
  const [gameTheme, setGameTheme] = useState(styleHide);
  const [nameTheme, setNameTheme] = useState(styleHide);

// ------------ CHANGE THEMES/ SHOW SELECTED FORMS ------------- //

  const changeTheme = (e) =>{
    e.preventDefault();
    setStartTheme(styleHide);
    setCharTheme(styleShow);
  }

  const showGameLink = () =>{
    setNameTheme(styleHide);
    setGameTheme(styleShow);
  }

  //-------------- CHOSEN CHARACTER FUNCTION ---------- //

  const chosenCharacter = (e) =>{
    e.preventDefault();
    setCharInfo({...charInfo, [e.target.name]: e.target.alt}) 
    if(e.target.alt === 'Hunter'){
      setCharTheme(styleHide);
      setNameTheme(styleShow);
       characterPicked = <img src='./images/Hunter.png' style={{height: '150px', marginTop: '110px'}} name="char" alt="Hunter"/>;
      return characterPicked;
    }
    if(e.target.alt === 'Assassin'){
      setCharTheme(styleHide);
      setNameTheme(styleShow);
      characterPicked = <img src='./images/Assassin.png' style={{height: '120px', marginTop: '131px'}} name="char" alt="Assassin" />;
      return characterPicked;
    }
    if(e.target.alt === 'Wizard'){
      setCharTheme(styleHide);
      setNameTheme(styleShow);
      characterPicked = <img src='./images/Wizard.png' style={{height: '150px', marginTop: '110px'}} name="char" alt="Wizard"/>;
      return characterPicked;
    }
    if(e.target.alt === 'Warrior'){
      setCharTheme(styleHide);
      setNameTheme(styleShow);
      characterPicked = <img src='./images/Warrior.png' style={{height: '150px', paddingRight: '10px', marginTop: '110px'}} name="char" alt="Warrior" />;
      return characterPicked;
    }
    else{
      return alert('error in character picked function')
    }
  }


  const onTextChange = e => {
    setState(e.target.value);
  }
  const createGameHandler = (e) => {
    e.preventDefault();
    socket.emit('join game', state);
  }
  const onNameChange = e => {
    console.log(e.target.name, e.target.char);
    setCharInfo({...charInfo, [e.target.name]: e.target.value })
    console.log(charInfo.name, charInfo.char);
  }
  const submitChar = (e) => {
    e.preventDefault();
    console.log(charInfo);
    socket.emit('start game', charInfo);
  }
  
  useEffect(() => {
    socket.on('choose character', game => {
      setGameData(game.id);
    })
    
  })
  
  return (
    <div style={{background: 'none', marginTop: '350px', textAlign: 'center'}}>
      <div style={startTheme}>
      <Card.Body style={{ marginLeft: '70px', marginTop: '100px', width: '750px'}}>
      <Card.Title style={{ fontSize: '1.5em', fontWeight: 'bolder', fontFamily: 'cursive'}}>JOIN A NEW GAME</Card.Title>
          <Form onSubmit={createGameHandler}>
            <Form.Group>
              <Form.Label>Enter your game code</Form.Label>
              <Form.Control style={{width: '40%', margin: 'auto'}} type="text" placeholder="name" onChange={(e) => onTextChange(e)}/>
            </Form.Group>
            <button  style={{ color: 'white', boxShadow: '5px 5px 10px black', backgroundColor: '#595959', borderRadius: '10px' , fontSize: '1em'}} type="submit" onClick={changeTheme}>
              Submit
            </button>
          </Form>
        </Card.Body>
      </div>

      <div style={charTheme}>
        <Card.Title style={{ fontSize: '1.5em', fontWeight: 'bolder', fontFamily: 'cursive', marginTop: '190px'}}>Choose Your Character Name and role</Card.Title>
        <Card.Title style={{ fontSize: '1.5em', fontWeight: 'bolder', fontFamily: 'cursive', color: 'white' }}>{gameData}</Card.Title>
        <Form onSubmit={submitChar}>
        <Form.Control style={{width: '40%', margin: '50px auto 10px auto'}} type="text" placeholder="name" name="name" onChange={(e) => onNameChange(e)}/>
        <Form.Control style={{width: '40%', margin: '10px auto 10px auto'}} type="text" placeholder="role" name="char" onChange={(e) => onNameChange(e)}/>
        <button style={{ color: 'white', boxShadow: '5px 5px 10px black', backgroundColor: '#595959', borderRadius: '10px' , fontSize: '1em'}} type="submit" onClick={showGameLink}>Submit</button>
        </Form>
      </div>

      <div style={gameTheme}>
      <section style={{marginTop: '25%'}}>
      <h1 style={{ paddingBottom: '30px', fontSize: '1.5em', fontWeight: 'bolder', fontFamily: 'cursive', marginTop: '190px'}}>Start Your Quest</h1>
      <Link to='/game'>
        <button type="submit" style={{ color: 'white', boxShadow: '5px 5px 10px black', backgroundColor: '#595959', borderRadius: '10px' , fontSize: '1em'}}>Start</button>
      </Link>
      </section>
      </div>
    </div>
  )
}
export default JoinScreen




