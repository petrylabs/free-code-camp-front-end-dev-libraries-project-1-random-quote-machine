export default function QuoteButtons(props) {
    const className = [
        'flex', 'justify-between', 'border-solid', 'border-red-500'
    ]
    return (
        <div 
            id={props.id}
            className={className.join(' ')}>
            {props.children}
        </div>
    )
}