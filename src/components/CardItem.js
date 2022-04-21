import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const CardItem = ({ src, text, label, path }) => {
   return (
      <>
         <li className='cards-item'>
            <Link to={path} className='cards-item-link'>
               <figure className='cards-item-pic-wrap' data-category={label}>
                  <img src={src} alt='Travel' className='cards-item-img' />
               </figure>
               <div className='cards-item-info'>
                  <h5 className='cards-item-text'>{text}</h5>
               </div>
            </Link>
         </li>
      </>
   );
}

export default CardItem;