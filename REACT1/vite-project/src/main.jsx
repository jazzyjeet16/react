import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const AnotherElement=(
  <a href='http://youtube.com' target='_blank'>youtube</a>
)

const reactElement= React.createElement(
  'a',
  {href:'http://youtube.com',target:'_blank'},
  'click here to visit youtube'
)
ReactDOM.createRoot(document.getElementById('root')).render(
    AnotherElement
)
