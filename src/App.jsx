import QuoteBox from './components/QuoteBox';
import './App.css'

function App() {
  const appCssClasses = [
    'h-screen', 'w-screen', 'flex', 'justify-center', 'items-center'
  ]
  const bgColorClasses = ['red', 'blue', 'orange', 'green', 'purple', 'pink', 'yellow', 'gray', 'brown'];
  return (
    <div className={appCssClasses.join(' ')}>
      <QuoteBox id="quote-box"/>
    </div>
  )
}

export default App
