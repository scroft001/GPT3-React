import React from 'react'
import './possibility.css'
import possiblity from '../../../src/assets/possibility.png'

const Possibility = () => {
  return (
    <div className='possibility-container'>
      <div className='possibility-column possibility-column-left'>
        <img src={possiblity} alt={"Girl in VR headset"} />
      </div>
      <div className='possibility-column possibility-column-right'>
        <p id='blue'>Request Early Access to Get Started</p>
        <h2>The possibilities are beyond your imagination</h2>
        <p id='main'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p id='orange'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility