
import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Azmoniak Tattoo Studio</title>
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      </Head>
      
      <header className="header">
        <h1>Azmoniak</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#artistas">Artistas</a>
          <a href="#galeria">Galería</a>
          <a href="#info">Información</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <h2>Blackwork & Lettering</h2>
        <p>Estudio con orígenes en Mendoza, Argentina, ahora en Barcelona.</p>
        <a href="#galeria" className="cta">Ver Galería</a>
      </section>

      <section id="artistas" className="section">
        <h2>Artistas</h2>
        <p><strong>Nacho Lipski</strong> & <strong>Maxi Montenegro</strong></p>
        <p>Especialistas en Black & Grey, Lettering, Realismo y Dotwork.</p>
      </section>

      <section id="galeria" className="section">
        <h2>Galería</h2>
        <div className="gallery">
          <img src="/images/PHOTO-2022-02-09-01-01-18-6.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-00-57-30-4.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-01-13-03.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-01-03-54-7.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-00-55-27-6.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-01-01-18-4.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-00-58-51.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-01-06-37-1.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-00-58-51-1.jpeg" alt="Tattoo" />
          <img src="/images/PHOTO-2022-02-09-00-58-51-5.jpeg" alt="Tattoo" />
        </div>
      </section>

      <section id="info" className="section">
        <h2>Información Práctica</h2>
        <p>Dirección: Camellies 82, Barcelona</p>
        <p>Horario: Consulta por privado</p>
        <p>Condiciones: Superficie de tatuaje previamente afeitada</p>
      </section>

      <section id="contacto" className="section">
        <h2>Contacto / Reservas</h2>
        <p>Teléfono: <strong>662283125</strong></p>
        <p>Instagram: @nacholipski & @wyokv</p>
      </section>

      <footer>
        <p>© 2025 Azmoniak Tattoo Studio</p>
      </footer>
    </div>
  )
}
