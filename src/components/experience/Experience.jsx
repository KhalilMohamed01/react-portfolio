import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small class="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small class="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>JAVASCRIPT</h4>
              <small class="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>VUEJS</h4>
              <small class="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>REACTJS</h4>
              <small class="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small class="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small class="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>JAVASCRIPT</h4>
              <small class="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>VUEJS</h4>
              <small class="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>REACTJS</h4>
              <small class="text-light">Beginner</small>
            </article>
          </div>
      </div>
            </section>
  )
}
