
import './App.css'
import Consulting from './Components/Consulting'
import InBound from './Components/InBound'
import NameAndImages from './Components/NameAndImages'
import NewsLetter from './Components/NewsLetter'
import PopularPage from './Components/PopularPage'

function App() {
  

  return (
  <div className="w-3/4 mx-auto py-16">
   <NameAndImages/>
   <Consulting/>
   <InBound/>
   <PopularPage/>
   <NewsLetter/>
  </div>
  )
}

export default App
