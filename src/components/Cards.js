import React from 'react';
import mainImageEq from '../images/image-equilibrium.jpg';
import eth from '../images/icon-ethereum.svg';
import eye from '../images/icon-view.svg'
import clock from '../images/icon-clock.svg';
import profileJules from '../images/image-avatar.png';
import styles from './Cards.css';
function Cards() {
  return (
    <Equilibrium mainImg={mainImageEq} 
      header={'Equilibrium #3429'} 
      info={'Our Equilibrium collection promotes balance and calm.'} 
      price={'0.041 ETH'}
      profile={profileJules}
      person = {'Jules Wyvern'}
    />
  );
}

function Equilibrium(props) {
  return(
    <div className='card'>
      <div className='hover'>
        <img className='mainImg' src={props.mainImg} />
        <img className='eye' src={eye} />
      </div>
      <h1 className='header' >{props.header}</h1>
      <p className='info'>{props.info}</p>
      <div className='wrapper'> 
        <div className='innerWraper1'>
          <img src={eth} />
          <p className='price'>{props.price}</p>
        </div>
        <div className='innerWraper2'>
          <img src={clock} />
          <p className='time'>3 days left</p>
        </div>
      </div>
      <div className='wrapper2'>
      <img className='profile' src = {props.profile} />
      <p className='p1'>Creation of</p> <p className='p2'>{props.person}</p>
      </div>
    </div>
    
  )
  
}

export default Cards;

