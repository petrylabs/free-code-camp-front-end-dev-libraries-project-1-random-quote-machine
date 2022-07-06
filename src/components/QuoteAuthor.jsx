export default function QuoteAuthor(props) {
    const quoteAuthorCssClasses = [
        'text-right', 'text-gray-700', 'leading-8'
    ]
    return (
        <div 
            id={props.id}
            className={quoteAuthorCssClasses.join(' ')}>
            {props.name}
        </div>
    )
}