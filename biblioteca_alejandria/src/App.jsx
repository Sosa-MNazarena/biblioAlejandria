
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Libros } from './pages/Libros/Libros'
import { MisLibros } from './pages/MisLibros/MisLibros'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const routes = [
  { path: "/", name: "Home", component: <Home /> },
  { path: "/libros", name: "Libros", component: <Libros /> },
  { path: "/misLibros", name: "Mis Libros", component: <MisLibros /> },
];

function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
