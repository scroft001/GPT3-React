import React from 'react';
import './blog.css';
import { Article } from '../../components';
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog-container' id='blog'>
      <h1 className='gradient__text blog-heading'>A lot is happening, <br />We are blogging about it.</h1>
      <div className='gpt3__blog-container'>
        <div className="gpt3__blog-container_groupA">
          <Article 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
            image={blog1}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article 
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              date="Sep 26, 2021"
              image={blog2}
          />
          <Article 
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              date="Sep 26, 2021"
              image={blog3}
          />
          <Article 
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              date="Sep 26, 2021"
              image={blog4}
          />
          <Article 
              title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
              date="Sep 26, 2021"
              image={blog5}
          />
        </div>
      </div>
    </div>
  )
}

export default Blog