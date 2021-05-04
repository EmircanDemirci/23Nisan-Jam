import "./Navi.css"
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Unutulmaz from './Unutulmaz'
import Ana from './Ana'
import Sozler from './Sozler'
import Galeri from './Galeri'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navi() {
    const [navbar, setNavbar] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [showMenu , setMenu] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 150) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    const closeClicked = ()=>{
        setMenu(false)
    }
    window.addEventListener("scroll", changeNavbar)
    return (
        <div>
            <Router>
                <nav>
                    <div className={navbar ? "background active" : "background"}>
                        <div>
                            <div className="first">
                                <div>
                                    <h1>23 Nisan Ulusal Egemenlik Ve Çocuk</h1>
                                </div>
                                <div>
                                    <h1>Bayramınız Kutlu Olsun</h1>
                                </div>
                            </div>
                            <div className={showMenu ? "second clicked" : "second"}>
                                <ul>
                                    <li><Link to="/">Ana Sayfa</Link></li>
                                    <li><Link to="/unutulmaz">Unutulmaz Anlar</Link></li>
                                    <li><Link to="/sozler">Sözler</Link></li>
                                    <li><Link to="/galeri">Galeri</Link></li>
                                    <li><button onClick={()=>closeClicked()} className={showMenu ? "close active":"close"}>Kapat</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="third">
                            <FontAwesomeIcon id="fabars" icon={faBars} onClick={()=>setMenu(true)} />
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Ana} />
                    <Route exact path="/unutulmaz" component={Unutulmaz} />
                    <Route exact path="/sozler" component={Sozler} />
                    <Route exact path="/galeri" component={Galeri} />
                </Switch>
            </Router>
        </div>
    )
}

export default Navi;
