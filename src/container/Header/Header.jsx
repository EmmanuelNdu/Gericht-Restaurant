import React from 'react';
import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading  title = "Chase the New Flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>During the eclipse, the lantern's velvet glow seemed to tangle with the mirage in the distance, while obsidian stones and ember </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img  src={images.welcome} alt='header'/>
    </div>
  </div>
);

export default Header;
