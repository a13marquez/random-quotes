import React from 'react'

import './quote-box.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'



const QuotesBox = ({author, text, newQuoteCb}) => {

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="text">
  
    <div className="text-box">
              <span className="quote" ><FontAwesomeIcon icon={faQuoteLeft} color="white" size="xs" /></span>
    {text}
         <span className="quote" ><FontAwesomeIcon icon={faQuoteRight} color="white" size="xs" /></span>
    </div>
              <div id="author" className="author">
          - {author}
        </div>
      </div>
      <div className="buttons">
      <a
        target="_blank"
        rel="noopener noreferrer" 
        className="button square twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' -' + author)}`}
        id="tweet-quote"
        data-size="default"
      >
  
<FontAwesomeIcon icon={faTwitter} />
       
      </a>
      <button className="button" id="new-quote" onClick={newQuoteCb}>New quote</button>

      </div>
    </div>
  )
}
export default QuotesBox
