import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  return (
    <div className="layout">
        {/*Cabecera del sitio*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Peliculas</h1>
        </header>

        {/*Barra de navegacion*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido Principal*/}
        <section id="content" className="content">
            {/*Aqui va el listado de peliculas*/}
            <Listado/>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador/>
            <Crear/>
            
        </aside>
        {/*Pie de Pagina*/}
        <footer className="footer">
            &copy; Curso en JavaScrip ES12 y TypeScrip - <a href="http://www.google.com.mx">Luisarmenta.mx</a>
        </footer>

    </div>
  );
}

export default App;
