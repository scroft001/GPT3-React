import React from 'react'
import './brand.css';
import atlassian from '../../assets/atlassian.png';
import google from '../../assets/google.png';
import dropbox from '../../assets/dropbox.png';
import slack from '../../assets/slack.png';
import shopify from '../../assets/shopify.png';

const brands = [google, slack, atlassian, dropbox, shopify];

const Brand = () => {
  return (
    <div className='brand-row'>
      {brands.map(brand => <img src={brand} alt={brand} />)}
    </div>
  )
}

export default Brand
