import React, {useState, useEffect} from 'react'
import QuotesBox from './components/QuoteBox'
import './App.css'
import quotesService from './services/quoteService.js'


function App() {
  const [quote, setQuote] = useState({
    text: '',
    author: ''
  });
  useEffect(()=> {
    fetchData();
  }, []);
  
  const fetchData =  async  () => {
    const response  = await quotesService.getRandomQuote()   
    const {content, author} = response.data
    setQuote({
      text: content,
      author
    });
   }
  return (
    <div className="App">
      <QuotesBox  text={quote.text} author={quote.author } newQuoteCb={fetchData}/>
    </div>
  )
}

export default App
