
import icon from '../../assets/img/bear.jpg'

export const MiniCard = () =>  {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" className="mini-card">
      <img src={icon} alt="Icon User"/>
      <div className="mini-card-info">
        <h2>User Profile Name</h2>
        <p>Profesion</p>
        <a href="/">Ver Mas</a>      
      </div>
    </div>
  )
}
