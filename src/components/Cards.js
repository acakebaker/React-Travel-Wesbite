import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
   // JSON data for the cards
   const DATA = [
      {src: 'images/img-9.jpg', text: 'Explore the hidden waterfall deep inside the Amazon Jungle', label: 'Adventure', path: '/services'},
      {src: 'images/img-2.jpg', text: 'Travel through the islands of Bali in a Private Cruise', label: 'Luxery', path: '/services'},
      {src: 'images/img-3.jpg', text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters', label: 'Mystery', path: '/services'},
      {src: 'images/img-4.jpg', text: 'Experience Football on Top of the Himilayan Mountains', label: 'Adventure', path: '/products'},
      {src: 'images/img-8.jpg', text: 'Ride through the Sahara Desert on a guided camel tour', label: 'Adrenaline', path: '/sign-up'},
   ];

   return (
      <div className='cards'>
         <h1>Check out these epic desinations!</h1>
         <div className='cards-container'>
            <div className='cards-wrapper'>
               <ul className='cards-items'>
                  <CardItem src={DATA[0].src} text={DATA[0].text} label={DATA[0].label} path={DATA[0].path} />
                  <CardItem src={DATA[1].src} text={DATA[1].text} label={DATA[1].label} path={DATA[1].path} />
                  <CardItem src={DATA[2].src} text={DATA[2].text} label={DATA[2].label} path={DATA[2].path} />
                  <CardItem src={DATA[3].src} text={DATA[3].text} label={DATA[3].label} path={DATA[3].path} />
                  {/* <CardItem src={DATA[4].src} text={DATA[4].text} label={DATA[4].label} path={DATA[4].path} /> */}
               </ul>
            </div>
         </div>
      </div>
   );  
}

export default Cards;