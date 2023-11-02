import './css/Header.css'
import header from './images/header.jpeg'

const Header = () => {
    return ( 
        <div className="main-header">
            <img src={header} alt="header" className="header-image"/>
        </div>
     );
}
 
export default Header;