import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/App'
import ChangeBgColor from '../src/components/ChangeBgColor'

createRoot(document.getElementById('root')).render(
 
 <>
 <StrictMode>
   <ChangeBgColor/>
   {/* <App/> */}
   </StrictMode>
 </>
)
