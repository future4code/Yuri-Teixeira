import React from 'react';
import './sectionShare.css'

import face from '../../img/face.svg'
import twitter from '../../img/twitter.svg'
import pinterest from '../../img/pinterest.svg'


export default class IconShare extends React.Component {

  onClick1 = () => {
    alert('Esta publicação foi compartilhada no Facebook!');
  }
  onClick2 = () => {
    alert('Esta publicação foi compartilhada no Twitter!');
  }
  onClick3 = () => {
    alert('Esta publicação foi compartilhada no Pinterest!');
  }

  render() {
    console.log('Onde deseja compartilhar?');
    return (
      <div className='redes'>
        <img src={face} alt="" onClick={this.onClick1}/>
        <img src={twitter} alt="" onClick={this.onClick2}/>
        <img src={pinterest} alt="" onClick={this.onClick3}/>
      </div>
    )
  }
}