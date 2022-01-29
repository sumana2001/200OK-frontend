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
                    <li><a href='https://www.postman.com/crimson-moon-76125/workspace/api-fest-200ok'>API SCHEMA</a></li>
                    <li><a href='https://github.com/sumana2001/200OK-frontend'>GITHUB</a></li>
                </ul>
            </div>
            <h3><a href='https://hospitalapi200ok.herokuapp.com/admin'>Admin</a></h3>
        </header>
        </>
     );
}
 
export default Header;