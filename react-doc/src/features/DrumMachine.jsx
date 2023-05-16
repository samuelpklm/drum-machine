import React, { useState, useEffect } from 'react'
import './drumMachine.css'
import { FaFreeCodeCamp } from "react-icons/fa";

import ReactHowler from 'react-howler'

function DrumMachine(){
  const [posicionPower, setPosicionPower] = useState(false);
  const [posicionBank, setPosicionBank] = useState(0);
  const [nombreMusic, setNombreMusic] = useState('');
  const [volumen, setVolumen] = useState(1);

   

  const play = (id, name) => {
   
      const audio = document.getElementById(id);
      audio.currentTime = 0;
     
      audio.play();
      setNombreMusic(name);
  }

  const ajustarVolumen = (e) => {
    setVolumen(e.target.value);
  }

  const setKeyVolume = () => {
    const audioes = zelda.map(sound => document.getElementById(sound.key));
    audioes.forEach(audio => {
      if(audio) {
        audio.volume = volumen;
      }
    }) 
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
      key: 'q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      key: 'w',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: 'e',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: 'a',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: 's',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      key: 'd',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 'z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: 'x',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: 'c',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const mario = [
    {
      key: 'q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      key: 'w',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      key: 'e',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      key: 'a',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      key: 's',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      key: 'd',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      key: 'z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      key: 'x',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      key: 'c',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

  const music = [zelda, mario];

    return (
      <div className="card" >
        {setKeyVolume()}
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

function Dboton({ src, play, id, name, vol, power}){

  useEffect(() => {
    document.addEventListener('keydown', logKey);
  }, []);

 function logKey(e) {
   switch (e.key) {
    case 'q':
      play('q', 'Heater-1');
      break;
    case 'w':
      play('w', 'Heater-2');
      break;
    case 'e':
      play('e', 'Heater-3');
      break;
    case 'a':
      play('a', 'Heater-4');
      break;
    case 's':
      play('s', 'Clap');
      break;
    case 'd':
      play('d', 'Open-HH');
      break;
    case 'z':
      play('z', 'Kick-n-Hat');
      break;
    case 'x':
      play('x', 'Kick');
      break;
    case 'c':
      play('c', 'Closed-HH');
      break;
   }
 
}
  
  return (
    <button onClick={() => play(name, id)} className='button-personalizado boton'>
      <audio src={power ? src : '#'} id={name}/>
     {name}
    </button>
    
  );
}

function Power({ estado, presionar, nombre }){
  return (
    <div>
    <span className='nombre'>{nombre}</span>
      <div className='power'>
        <button onClick={presionar}  className='power-boton' style={{float: estado}}></button>
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