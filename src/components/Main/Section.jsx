import { Link } from 'react-router-dom';

export const Section = () => {
  return (
    <div className="section">
        <div className="section-info">
            <h2>Paquetes que ofrecemos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero quae accusantium, porro rem quo voluptatibus mollitia numquam nesciunt aut ipsa ut alias dolores veniam soluta corrupti, recusandae suscipit. Illum.</p>
        </div>
      <div className="section-btn">
        <Link to="/paquetes">Ver más</Link>
        </div>
    </div>
  )
}
