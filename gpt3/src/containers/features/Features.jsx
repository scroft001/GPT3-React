import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {
  return (
    <div className='features-container'>
      <div className='features-column left'>
        <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='features-column right'>
        <div className='features-feature_card'>
          <Feature text={"Improving end distrusts instantly"} />
          <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
        </div>
        <div className='features-feature_card'>
          <Feature text={"Become the tended active"} />
          <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
        </div>
        <div className='features-feature_card'>
          <Feature  text={"Message or am nothing"} />
          <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
        </div>
        <div className='features-feature_card'>
          <Feature text={"Really boy law county"} />
          <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
