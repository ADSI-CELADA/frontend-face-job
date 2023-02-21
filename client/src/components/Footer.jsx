import logo from '../assets/img/logo.png'

export const Footer = () => {
  return (
    <footer>
            <img src={logo} alt="logo" />
            <h2>Face-Job</h2>
            <div className="footer-info">
                <a href="">facejob011@gmail.com</a>
            </div>
                <p>© 2023 Face-Job</p>            
    </footer>
  )
}
