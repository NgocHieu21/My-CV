import React from 'react'

const Info = () => {
  return (
    <div className="about__info gird">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">E-commerce and UX/UI</span>
        </div>

        <div className="about__box">
        <i class='bx bx-building-house about__icon' ></i>
            <h3 className="about__title">University</h3>
            <span className="about__subtitle">Thuong Mai University</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">10+</span>
        </div>
    </div>
  )
}

export default Info