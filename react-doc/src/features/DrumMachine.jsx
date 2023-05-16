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
      id: 'majora',
      url: 'skull_kid.mp3'
    },
    {
      key: 'W',
      id: 'nes_secrect',
      url: 'nes_secret.mp3'
    },
    {
      key: 'E',
      id: 'hyrule_field',
      url: 'hyrule_field.mp3'
    },
    {
      key: 'A',
      id: 'zelda_nes',
      url: 'zelda_nes.mp3'
    },
    {
      key: 'S',
      id: 'zelda_cofre',
      url: 'zelda_cofre.mp3'
    },
    {
      key: 'D',
      id: 'fairy_flying',
      url: 'fairy_flying.mp3'
    },
    {
      key: 'Z',
      id: 'navi_hey',
      url: 'navi_hey.mp3'
    },
    {
      key: 'X',
      id: 'navi_listen',
      url: 'navi_listen.mp3'
    },
    {
      key: 'C',
      id: 'objeto_obtenido',
      url: 'objeto_obtenido.mp3'
    }
  ];

  const mario = [
    {
      key: 'Q',
      id: 'bros_1up',
      url: 'bros_1up.mp3'
    },
    {
      key: 'W',
      id: 'mario_gameover',
      url: 'mario_gameover.mp3'
    },
    {
      key: 'E',
      id: 'wii_fanfare',
      url: 'wii_fanfare.mp3'
    },
    {
      key: 'A',
      id: 'power_down',
      url: 'power_down.mp3'
    },
    {
      key: 'S',
      id: 'yoshis_island',
      url: 'yoshis_island.mp3'
    },
    {
      key: 'D',
      id: 'game_over',
      url: 'game_over.mp3'
    },
    {
      key: 'Z',
      id: 'moneda',
      url: 'moneda.mp3'
    },
    {
      key: 'X',
      id: 'nuevo_nivel',
      url: 'nuevo_nivel.mp3'
    },
    {
      key: 'C',
      id: '3_pausa',
      url: '3_pausa.mp3'
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