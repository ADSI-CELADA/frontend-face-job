import image from "../../assets/img/image.png"

export const Hero = () =>  {

  return (
    <header>
      <div data-aos="fade-up" data-aos-duration="1000" className="hero">
          <div className="hero-body">
            <h1 className="hero-title">
              <p data-aos="fade-up" data-aos-duration="1500" className="text-primary">FaceJob</p>
              <p data-aos="fade-up" data-aos-duration="1500" className="text-second">Contacta Con Trabajadores</p>
            </h1>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="hero-image">
              <img src={image} alt="Contact" />
          </div>
      </div>
    </header>
  )
}
