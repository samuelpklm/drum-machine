import React, { useState, useEffect } from 'react'
import './drumMachine.css'
import { FaFreeCodeCamp } from "react-icons/fa";

import ReactHowler from 'react-howler'

function DrumMachine(){
  const [posicionPower, setPosicionPower] = useState(false);
  const [posicionBank, setPosicionBank] = useState(0);
  const [nombreMusic, setNombreMusic] = useState('');
  const [volumen, setVolumen] = useState(1);

    useEffect(() => {
      document.addEventListener('keydown', logKey);
    }, []);

  // const input = document.querySelector("button");
  // input.addEventListener("keydown", logKey);

   function logKey(e) {
   
     
     switch (e.key) {
      case 'q':
        play(music[posicionBank][0].id);
        break;
      case 'w':
        play(music[posicionBank][1].id);
        break;
      case 'e':
        play(music[posicionBank][2].id);
        break;
      case 'a':
        play(music[posicionBank][3].id);
        break;
      case 's':
        play(music[posicionBank][4].id);
        break;
      case 'd':
        play(music[posicionBank][5].id);
        break;
      case 'z':
        play(music[posicionBank][6].id);
        break;
      case 'x':
        play(music[posicionBank][7].id);
        break;
      case 'c':
        play(music[posicionBank][8].id);
        break;
     }
   
  }

  const play = (id) => {
   
      const audio = document.getElementById(id);
      audio.currentTime = 0;
      audio.volume = volumen;
      audio.play();
      setNombreMusic(id);
  }

  const ajustarVolumen = (e) => {
    setVolumen(e.target.value);
  }

  const botonPower = () => {
    setPosicionPower(!posicionPower);
  }

  const botonBank = () => {
    if(posicionBank){
      setPosicionBank(0);
    }else{
      setPosicionBank(1);
    }
  }

  const zelda = [
    {
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const mario = [
    {
      key: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      key: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      key: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      key: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      key: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      key: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      key: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      key: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      key: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

  const music = [zelda, mario];

    return (
      <div className="card" >
        <div className='logo'>
          <div class="inner-logo ">FCC&nbsp;</div>
          <FaFreeCodeCamp style={{height: '100%', width: '100%'}}/>
        </div>
        <div className='control-boton'>
          <div className='fila-boton' >
          
            <Dboton power={posicionPower} src={music[posicionBank][0].url} id={music[posicionBank][0].id} play={play} name={music[posicionBank][0].key}/>
            <Dboton power={posicionPower} src={music[posicionBank][1].url} id={music[posicionBank][1].id} play={play} name={music[posicionBank][1].key}/>
            <Dboton power={posicionPower} src={music[posicionBank][2].url} id={music[posicionBank][2].id} play={play} name={music[posicionBank][2].key}/>

          </div>
          <div className='fila-boton'>
            
            <Dboton power={posicionPower} src={music[posicionBank][3].url} id={music[posicionBank][3].id} play={play} name={music[posicionBank][3].key}/>
            <Dboton power={posicionPower} src={music[posicionBank][4].url} id={music[posicionBank][4].id} play={play} name={music[posicionBank][4].key}/>
            <Dboton power={posicionPower} src={music[posicionBank][5].url} id={music[posicionBank][5].id} play={play} name={music[posicionBank][5].key}/>

          </div>
          <div className='fila-boton'>
            
            <Dboton power={posicionPower} src={music[posicionBank][6].url} id={music[posicionBank][6].id} play={play} name={music[posicionBank][6].key}/>
            <Dboton power={posicionPower} src={music[posicionBank][7].url} id={music[posicionBank][7].id} play={play} name={music[posicionBank][7].key}/>
            <Dboton power={posicionPower} src={music[posicionBank][8].url} id={music[posicionBank][8].id} play={play} name={music[posicionBank][8].key}/>

          </div>
        </div>
        <div className='control-general'>
          <Power estado={posicionPower ? 'right': 'left'} presionar={botonPower} nombre={'Power'}/>
          <Display pantalla={nombreMusic} power={posicionPower}/>
          <Volumen volumen={volumen} cambiarVolumen={ajustarVolumen}/>
          <Power estado={posicionBank ? 'right': 'left'} presionar={botonBank} nombre={'Bank'}/>
        </div>
      </div>    
    );
}

function Dboton({ src, play, id, name, key, power}){
  
  return (
    <button onClick={() => play(id)} className='button-personalizado boton'>
      <audio src={power ? src : '#'} id={id}/>
     {name}
    </button>
    
  );
}

function Power({ estado, presionar, nombre }){
  return (
    <div>
    <span className='nombre'>{nombre}</span>
      <div className='power'>
        <button onClick={presionar} className='power-boton' style={{float: estado}}></button>
      </div>
    </div>
  );
}

function Display({ pantalla, power }){
  return (
    <div className='display'>
      <p>{power ? pantalla : ''}</p>
    </div>
  );
}

function Volumen({ volumen, cambiarVolumen }){
  return (
    <div className="volume-slider">
      <input max="1" min="0" step="0.01" type="range" value={volumen} onChange={cambiarVolumen}/>
    </div>
  );
}


export default DrumMachine