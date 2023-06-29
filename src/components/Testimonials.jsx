import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import Ashutosh from "../assets/Ashutosh.jpg";
import Rashmi from "../assets/Rashmi.jpg";
import Ankur from "../assets/Ankur.jpg"



export default function Testimonials() {
  return (


    <Section id="testimonials">
      <div className="title">
        <h2>Our Happy Customers And Their Experiences</h2>
      </div>
      <div className="testimonials">


        <div className="testimonial">
          <p>
            I had chosen the Weekend Break Plan and the tours an services provided during the travelling was
            just fabulous and mind-blowing.
          </p>
          <div className="info">
            <img src={Ashutosh} alt="" />
            <div className="details">
              <h4>Ashutosh Kumar</h4>
              <span>Software Engineer at Microsoft</span>
            </div>
          </div>
        </div>


        <div className="testimonial">
          <p>
          I had chosen the Package Holiday Plan and the tours an services provided during the travelling was
            just fabulous and mind-blowing.
          </p>
          <div className="info">
            <img src={Rashmi} alt="" />
            <div className="details">
              <h4>Rashmi Singh</h4>
              <span>Data Analyst At Amazon</span>
            </div>
          </div>
        </div>


        <div className="testimonial">
          <p>
          I had chosen the Group Tour Plan and the tours an services provided during the travelling was
            just fabulous and mind-blowing.
          </p>
          <div className="info">
            <img src={Ankur} alt="" />
            <div className="details">
              <h4>Ankur Roshan</h4>
              <span>CEO & Founder of Coding Nation</span>
            </div>
          </div>
        </div>


      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;

  .title 
  {
    text-align: center;
    margin-bottom: 2rem;
  }

  .testimonials 
  {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial 
    {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;

      &:hover 
      {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .info 
      {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img 
        {
          border-radius: 3rem;
          height: 3rem;
        }
        .details 
        {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) 
  {
    .testimonials 
    {
      flex-direction: column;
      margin: 0;
      .testimonial 
      {
        justify-content: center;
        .info 
        {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
