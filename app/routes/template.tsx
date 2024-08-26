import Data from "./PetHomePage";
import Frompet from "./MyPetFrom";
import { useState } from "react";

export default function pet (){
    const [Page,setPage] = useState('Data');

    const renderPage = () => {
        switch (Page) {
          case 'Data':
            return <Data />;
          case 'Frompet':
            return <Frompet />;
          default:
            return <Data />;
        }
      };
    
    return (
        <div >
            <header style={{ backgroundColor: '#eee8aa'}}>
            <nav className="nav">
            <ul className="nav-list">
                <p style={{ fontSize: '36px' }}>
                MyPetHomePage
                </p>
                <li >
                    <button onClick={() => setPage('Data')}>Home</button>
                </li>
                <li className="nav-item">
                <button onClick={() => setPage('Frompet')}>PetFrom</button>
                </li>
            </ul>
            </nav>
            </header >
            <menu style={{ backgroundColor: '#deb887'}}>
                {renderPage()}
            </menu>
            <footer className="text-center" style={{ backgroundColor: '#7cfc00'}}>
                <hr />
            Ctrated by Natthapol Muangkhot
            </footer>
        </div>
    );
}