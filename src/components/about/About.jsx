import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiBrain} from 'react-icons/gi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image" />
      </div>
    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <GiBrain className="about__icon"/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>
        <article className='about__card'>
          <FiUsers className="about__icon"/>
          <h5>Clients</h5>
          <small>200+ Worldwide</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className="about__icon"/>
          <h5>Projects</h5>
          <small>80+ Completed</small>
        </article>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus adipisci quisquam voluptas quis saepe fuga rerum pariatur, reiciendis deleniti modi, illo nulla id corporis officiis autem eaque atque cupiditate explicabo!</p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>  
  )
}
