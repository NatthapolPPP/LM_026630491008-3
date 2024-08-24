import Data from "./PetHomePage";
import { Outlet, Link } from "react-router-dom";

export default function pet (){

    return (
        <div >
            <header style={{ backgroundColor: '#eee8aa'}}>
            <nav className="nav">
            <ul className="nav-list">
                <p style={{ fontSize: '36px' }}>
                MyPetHomePage
                </p>
                <li className="nav-item"><Link to="/PetHomePage">Home</Link></li>
                <li className="nav-item"><Link to="/MyPetFrom">PetFrom</Link></li>
            </ul>
            </nav>
            </header >
            <menu style={{ backgroundColor: '#deb887'}}>
                <Data />
            </menu>
            <footer className="text-center" style={{ backgroundColor: '#7cfc00'}}>
                <hr />
            Ctrated by Natthapol Muangkhot
            </footer>
        </div>
    );
}