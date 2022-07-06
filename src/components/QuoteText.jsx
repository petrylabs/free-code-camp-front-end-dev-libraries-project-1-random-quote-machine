export default function QuoteText(props) {
    const quoteTextCssClasses = [
        'text-2xl', 'font-bold', 'text-center', 'text-gray-700', 'leading-8' 
    ]
    return (
        <div 
            id={props.id}
            className={quoteTextCssClasses.join(' ')}>
            {props.text}
        </div>
    )
}