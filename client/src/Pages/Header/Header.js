import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
    return ( 
        <>
        <header>
            <h3>HAPI</h3>
            <div className="Links">
                <ul>
                    <li><Link to="/">HOME</Link> </li>
                    <li><Link to="/addhospital">ADD HOSPITAL</Link></li>
                    <li><Link to="/updatehospital">UPDATE HOSPITAL</Link></li>
                    <li>API DOCS</li>
                    <li>GITHUB</li>
                </ul>
            </div>
            <h3><a href='http://127.0.0.1:8000/admin'>Admin</a></h3>
        </header>
        </>
     );
}
 
export default Header;