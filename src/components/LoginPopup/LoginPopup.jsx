import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Se connecter")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Se connecter"?<></>:<input type="text" placeholder='Votre nom' required/>}
          <input type="email" placeholder='Votre email' required/>
          <input type="password" placeholder='Votre mots de passe' required/>
        </div>
        <button>{currState==="S'inscrire"?"Créer un compte":"Se connecter"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>Pour continuer, veuilliez accepter les conditions, et les thèrmes d'utilisation.</p>
        </div>

        {currState==="Se connecter"
        ?<p>Pas encore inscrit ? <span onClick={()=>setCurrState("S'inscrire")}>Cliquez ici</span></p>
        :<p>Déjà inscrit ? <span onClick={()=>setCurrState("Se connecter")}>Se connecter</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
