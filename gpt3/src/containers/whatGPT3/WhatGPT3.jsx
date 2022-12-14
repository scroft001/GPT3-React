import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='what-container'>
      <div className='what-row-top'>
        {/* Todo: refactor as a feature component with props */}
        <Feature text={"What is GPT-3"} />
        {/* <h2 className="what-heading">What is GPT-3</h2> */}
        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
      </div>
      <div className='what-row-middle'>
        <h2>The possibilities are beyond your imagination</h2>
        <p>Explore The Library</p>
      </div>
      <div className='what-row-bottom'>
        <div className='what-card'>
          <Feature text={"Chatbots"} />
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
        </div>
        <div className='what-card'>
          <Feature text={"Knowledgebase"} />
          <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
        </div>
        <div className='what-card'>
          <Feature text={"Education"} />
          <p>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3