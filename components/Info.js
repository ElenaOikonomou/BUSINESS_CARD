import React from "react"


export default function Info(){
    return(
    <nav className="info--nav">
        <img src="../Images/eleni_oikonomou.jpg" className="profile_pic"/>
        <h1 className="name">Eleni Oikonomou</h1>
        <h2 className="profession">FrontEnd Developer</h2>
        <h3 className="website">elenaoikonomou.website</h3>
        <div className="buttons">
        <button className="email-button">
          <img src="../Images/envelope.jpg" className="email-icon"/>Email
        </button>
         <button className="linkedin-button">
          <img src="../Images/linkedin.png" className="linkedin-icon" />LinkedIn
        </button>
        </div>
    </nav>)
}

// */