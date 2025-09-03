
import './App.css'
import MainLayout from './Component/Layouts/MainLayout'
import AppRoute from './routes/AppRoute'
import { BrowserRouter  } from "react-router-dom"
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
