import { Link } from 'react-router-dom'
export const Categorie = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="categorie">
      <div className="categorie-body">
        <div data-aos="fade-down-right" data-aos-duration="1000" className="mini-categorie-card">
          <div className="categorie-btn">
            <Link to="">Profesor</Link>
          </div>
        </div>
        <div data-aos="fade-down-left" data-aos-duration="1000" className="mini-categorie-card">
          <div className="categorie-btn">
            <Link to="">Programador</Link>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className="mini-categorie-card">
          <div className="categorie-btn">
            <Link to="">Diseñador</Link>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="mini-categorie-card">
          <div className="categorie-btn">
            <Link to="">Administrador</Link>
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-duration="1000" className="mini-categorie-card">
          <div className="categorie-btn">
            <Link to="">Constructor</Link>
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="1000" className="mini-categorie-card">
          <div className="categorie-btn-other">
            <Link to="">Otros</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
