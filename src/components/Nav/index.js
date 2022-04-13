/* eslint-disable */
import React, { useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { cleanBoxClicked } from './../../redux/boxToyos/index'


function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();
    const logoUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/Logo_3x_swwtrs.png'
    /* const homeUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677738/Toyo/home_3x_wukx7g.png' */
    const itemsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637679596/Toyo/items_xnyybm.png'
    const toyosUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677739/Toyo/toyo_3x_hjr7v7.png'
    const bodyPartsUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637677736/Toyo/body_part_3x_mxq76n.png'
    /*   const selectedNavGlowUrl =
        'https://res.cloudinary.com/groovin/image/upload/v1637769744/Toyo/nav-item-glow_wkiqbj.png' */

    useEffect(() => {
        handleClick(window.localStorage.getItem("route"));
    }, [])

    function handleClick(rota) {
        dispatch(cleanBoxClicked());
        var navI = document.getElementById("navItems")
        var navT = document.getElementById("navToyos")
        var navP = document.getElementById("navParts")

        if(rota=="i") {
            window.localStorage.setItem("route", "i");
            if(navI.classList.contains("desactived")) {
                navI.classList.remove("desactived")
            }
            if(!navT.classList.contains("desactived")) {
                navT.classList.add("desactived")
            }
            if(!navP.classList.contains("desactived")) {
                navP.classList.add("desactived")
            }
            history.push(`/items`);
        } else if (rota == "t") {
            window.localStorage.setItem("route", "t");
            if(!navI.classList.contains("desactived")) {
                navI.classList.add("desactived")
            }
            if(navT.classList.contains("desactived")) {
                navT.classList.remove("desactived")
            }
            if(!navP.classList.contains("desactived")) {
                navP.classList.add("desactived")
            }
            history.push(`/toyos`);
        } else if (rota == "p") {
            window.localStorage.setItem("route", "p");
            if(!navI.classList.contains("desactived")) {
                navI.classList.add("desactived")
            }
            if(!navT.classList.contains("desactived")) {
                navT.classList.add("desactived")
            }
            if(navP.classList.contains("desactived")) {
                navP.classList.remove("desactived")
            }
            history.push(`/parts`);
        }
    }

    return (
        <div className="nav-items">
            {/*  <div className="selected-nav-item-glow">
                <img src={selectedNavGlowUrl} alt="selected-nav-item glow" />
            </div> */}
            <div className="logo">
                <img src={logoUrl} alt="logo" />
            </div>
            {/* <div className="nav-item">
                <Link className="link" to="/">
                    <img src={homeUrl} alt="home" />
                    <span>HOME</span>
                </Link>
            </div> */}
            <div className="nav-item" id="navItems" onClick={() => handleClick("i")}>
                <div className="link">
                    <img src={itemsUrl} alt="items" />
                    <span>BOXES</span>
                </div>
            </div>
            <div className="nav-item desactived" id="navToyos" onClick={() => handleClick("t")}>
                <div className="link">
                    <img src={toyosUrl} alt="toyos" />
                    <span>TOYOS</span>
                </div>
            </div>
            <div
                style={{ display: "none" }}
                className="nav-item desactived"
                id="navParts"
                onClick={() => handleClick("p")}
            >
                <div className="link">
                    <img src={bodyPartsUrl} alt="body parts" />
                    <span>
                        BODY
                        <br />
                        <span
                            style={{
                                display: 'block',
                                marginTop: '-0.7em',
                            }}
                        >
                            PARTS
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Nav
