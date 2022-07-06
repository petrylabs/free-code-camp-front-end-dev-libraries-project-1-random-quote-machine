export default function Button(props) {
    const buttonCssClasses = [
        'bg-blue-500', 'text-white', 'font-bold', 'p-2', 'm-2', 'rounded'
    ]
    return (
        <button 
            id={props.id}
            className={buttonCssClasses.join(' ')}
            onClick={(event)=>props.clickHandler(event.target)}>
            {props.children}
        </button>
    )
}