import { useEffect, useState } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import Button from './Button';
import quotesJson from '../quotes.json';

export default function QuoteBox(props) {
    const [quote, setQuote] = useState({
        quote: '',
        author: ''
    });
    // const [quote, setQuote] = useState('Loading Quote...');
    // const [author, setAuthor] = useState('Loading Author...');
    const componentCssClasses = [
        'w-full', 'max-w-2xl', 'p-[40px]', 'border-solid', 'border-2', 'rounded-[8px]'
    ]
    const quoteTextAndAuthorCssClasses = [
        'min-h-[10rem]'
    ]
    const actionsButtonsCssClasses = [
        'flex', 'justify-between', 'mt-[16px]'
    ]
    const getEncodedTweet = (quoteText, quoteAuthor) => {
        return encodeURI(quoteText) + ' - ' + encodeURI(quoteAuthor);
    }
    const getNewQuote = async (quotes) => {
        const randomQuote = getRandomQuote(quotes);
        setQuote({
            quote: randomQuote.quote,
            author: randomQuote.author
        });        
    }
    const getRandomQuote = (quotes) => {
        const random = Math.floor(Math.random() * quotes.length);
        return quotes.at(random);
    }
    useEffect(()=>{
        getNewQuote(quotesJson.quotes);
    }, []);
    return (
        <div id={props.id} className={componentCssClasses.join(' ')}>
            <div className={quoteTextAndAuthorCssClasses.join(' ')}>
                <QuoteText 
                    text={quote.quote}
                    id='text'/>
                <QuoteAuthor 
                    id='author'
                    name={quote.author}/>
            </div>
            <div className={actionsButtonsCssClasses.join(' ')}>
                <a
                    id='tweet-quote'
                    href={`https://twitter.com/intent/tweet?text=${getEncodedTweet(quote.quote, quote.author)}`}>Tweet Quote</a>
                <Button
                    id='new-quote'
                    clickHandler={()=>{
                        getNewQuote(quotesJson.quotes);
                    }}>New Quote</Button>
            </div>
        </div>
    )
}