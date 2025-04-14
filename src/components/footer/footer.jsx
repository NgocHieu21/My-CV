import React from 'react'
import "./footer.css";

const footer = () => {
  return (
<footer className='footer'>
    <div className="footer__container container">
        <h1 className="footer__title">Ngoc Hieu</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#project" className="footer__link">Project</a>
            </li>
            <li>
                <a href="#skills" className="footer__link">Skill</a>
            </li>
        </ul>
        <div className="footer__social">
        <a href="https://www.facebook.com/DendiDota2/?locale=vi_VN" className="home__social-icon" target="_blank">
        <i class="bx bxl-facebook">
        </i>
    </a>

    <a href="" className="home__social-icon" target="_blank">
        <i class="bx bxl-instagram">
        </i>
    </a>

    <a href="" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt">
        </i>
    </a>
        </div>
        <span className='footer__copy'>&#169; Crypticalcoder. All rights reserved</span>
    </div>
</footer>
)
}

export default footer