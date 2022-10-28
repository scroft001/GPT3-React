import React from 'react';
import './blog.css';
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog-container' id='blog'>
      <h2 className='gradient-text'>A lot is happening, <br /> We are blogging about it.</h2>
      <div className='blog-container-stories'>
        <div className="blog-story-left">
          <div className="blog-card-tall">
            <img src={blog1} alt="tunnel" />
            <div className='title-section'>
              <div>
                <p className="blog-date">Sep 26, 2021</p>
                <h2 className="blog-title">GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
              </div>
              <p className="blog-read">Read Full Article</p>
            </div>
          </div>
        </div>
        <div className='blog-story-right'>
          <div className="blog-card">
              <img src={blog2} alt="face" />
              <div className='title-section'>
              <div>
                <p className="blog-date">Sep 26, 2021</p>
                <h2 className="blog-title">GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
              </div>
              <p className="blog-read">Read Full Article</p>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog3} alt="link" />
            <div className='title-section'>
              <div>
                <p className="blog-date">Sep 26, 2021</p>
                <h2 className="blog-title">GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
              </div>
              <p className="blog-read">Read Full Article</p>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog4} alt="numbers" />
            <div className='title-section'>
              <div>
                <p className="blog-date">Sep 26, 2021</p>
                <h2 className="blog-title">GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
              </div>
              <p className="blog-read">Read Full Article</p>
            </div>
          </div>
          <div className="blog-card">
            <img src={blog5} alt="warning" />
            <div className='title-section'>
              <div>
                <p className="blog-date">Sep 26, 2021</p>
                <h2 className="blog-title">GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
              </div>
              <p className="blog-read">Read Full Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog