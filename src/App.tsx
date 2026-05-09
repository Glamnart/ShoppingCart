import Header from './components/Header.tsx'
import Products from './components/Products.tsx'
import './App.css'

const App:React.FC = () =>{
  return <div className="bg-[url('src/assets/headerBackground.webp')] bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay">
    <Header/>
    <Products/>
  </div>
}

export default App
