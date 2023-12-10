import React from 'react'
import '../Header/header.css'
import { Link } from 'react-router-dom'

function Header() {

  const handleresumeClick = () => {
    const pdf = "Meenakshi.pdf";
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Meenakshi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  return (
    <div className="header">
                <div className="header-logo">
                    <Link to="/"><h3 className="header-name">Meenakshi Suresh Babu</h3></Link>
                </div>
                <div className="header-container">
                    <div className="nav-item"><Link to="/about">About</Link></div>
                    <div className="nav-item"><Link to="/projects">Projects</Link></div>
                    <div className="nav-item"><Link to="/skills">Skills</Link></div>
                    <div className="nav-item"><button onClick={handleresumeClick}>Download Resume</button></div>
                </div>
        </div>
  )
}

export default Header