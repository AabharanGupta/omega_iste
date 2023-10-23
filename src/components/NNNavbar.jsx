import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';

const NNNavbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to='#About' smooth>About</Link></li>
            <li><Link to='#RuleBook' smooth>Rulebook</Link></li>
            <li><Link smooth>Our Team</Link></li>
            <li><Link to='#Sponsors' smooth>Sponsors</Link></li>
            <li><Link smooth>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default NNNavbar
