import Image from 'next/image';
import React from 'react';
import "./style.css"; 
import Photo from '@/components/Photo';
import photo from "../../public/image/ss.png"
import Link from 'next/link';

const Page = () => {
  return (
    <div className='mt-40'>
      <section className="main-section ">
        <div className="left-part">
          <div className="photo-container">
            <Image src={photo}/>
          </div>
          <div className="contact-container">
            <h2 className="title">Contact Me</h2>
            <div className="contact-list">
              <div className="icon-container">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="contact-text">
                <p>E/815 Parbatipur, Dinajpur</p>
              </div>
            </div>
            <div className="contact-list">
              <div className="icon-container">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="contact-text">
                <p>arifahmmadsumon@gmail.com</p>
              </div>
            </div>
            <div className="contact-list">
              <div className="icon-container">
                <i className="bi bi-laptop"></i>
              </div>
              <div className="contact-text ">
                <Link href="/https://sumon-portfolio-five.vercel.app/">
                <p className='border-b-2'>Portfolio</p>
                </Link>
              </div>
            </div>
            <div className="contact-list">
              <div className="icon-container">
                <i className="bi bi-linkedin"></i>
              </div>
              <div className="contact-text">
                <p>01751260010</p>
              </div>
            </div>
          </div>

          <div className="education-container">
            <h2 className="title">Education</h2>
            <div className="course">
              <h2 className="education-title">Bsc in Agricultural Engineering</h2>
              <h5 className="college-name">Hajee Mohammad Danesh Science and Technology University,Dinajpur</h5>
              <p className="education-date">2016 - 2022</p>
            </div>
            <div className="course">
              <h2 className="education-title">HSC</h2>
              <h5 className="college-name">Cantonment Public School and college, BUSMS</h5>
              <p className="education-date">2014 - 2015</p>
            </div>
            <div className="course">
              <h2 className="education-title">SSC</h2>
              <h5 className="college-name">Cantonment Public School and college, BUSMS</h5>
              <p className="education-date">2012 - 2013</p>
            </div>
          </div>

          <div className="skills-container">
            <h2 className="title">Skills</h2>
            <div className="skill">
              <div className="left-skill">
                <p>HTML 5</p>
              </div>
              <div className="right-skill">
                <div className="outer-layer">
                  <div className="inner-layer" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="left-skill">
                <p>CSS</p>
              </div>
              <div className="right-skill">
                <div className="outer-layer">
                  <div className="inner-layer" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="left-skill">
                <p>JavaScript</p>
              </div>
              <div className="right-skill">
                <div className="outer-layer">
                  <div className="inner-layer" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="left-skill">
                <p>React</p>
              </div>
              <div className="right-skill">
                <div className="outer-layer">
                  <div className="inner-layer" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="left-skill">
                <p>NextJs</p>
              </div>
              <div className="right-skill">
                <div className="outer-layer">
                  <div className="inner-layer" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="banner">
            <h1 className="firstname">Arif</h1>
            <h1 className="lastname">Ahmmad</h1>
            <p className="position">Frontend Web Developer</p>
          </div>

          <div className="work-container">
            <h2 className="title text-left">Projects</h2>
            <div className="work">
              <div className="job-date">
                <p className="job">Frontend</p>
                <p className="date">NextJs, Js, Tailwind</p>
              </div>
              <h2 className="company-name">E-commerce Website</h2>
              <div className='flex justify-between'>
              
              <p className="work-text  font-semibold">
              <Link href="https://nextjs-ecom-kappa.vercel.app/">
              Link : E-commerce
              </Link>
                
                </p>
                <p className="work-text font-semibold">
                <Link href="https://nextjs-ecom-kappa.vercel.app/">
                Source code: E-commerce
              </Link>
               
                </p>
              </div>
              
            </div>

            <div className="work">
              <div className="job-date">
                <p className="job">Frontend</p>
                <p className="date">NextJs, Js, Tailwind</p>
              </div>
              <h2 className="company-name">E-commerce Website</h2>
              <div className='flex justify-between'>
              
              <p className="work-text  font-semibold">
              <Link href="https://nextjs-ecom-kappa.vercel.app/">
              Link : E-commerce
              </Link>
                
                </p>
                <p className="work-text font-semibold">
                <Link href="https://nextjs-ecom-kappa.vercel.app/">
                Source code: E-commerce
              </Link>
               
                </p>
              </div>
              
            </div>
            <div className="work">
              <div className="job-date">
                <p className="job">Frontend</p>
                <p className="date">NextJs, Js, Tailwind</p>
              </div>
              <h2 className="company-name">BD Martyres 2024 Website</h2>
              <div className='flex justify-between'>
              
              <p className="work-text  font-semibold">
              <Link href="https://shohid-nextjs.vercel.app/">
              Link : BD Martyres
              </Link>
                
                </p>
                <p className="work-text font-semibold">
                <Link href="https://shohid-nextjs.vercel.app/">
                Source code: BD Martyres
              </Link>
               
                </p>
              </div>
              
            </div>
            
              <div className="work">
              <div className="job-date">
                <p className="job">Frontend</p>
                <p className="date">NextJs, Js, Tailwind</p>
              </div>
              <h2 className="company-name">Law Service</h2>
              <div className='flex justify-between'>
              
              <p className="work-text font-semibold ">
              <Link href="https://irs-strat-2huj.vercel.app/">
              Link : Law Service
              </Link>
                
                </p>
                <p className="work-text font-semibold">
                <Link href="https://irs-strat-2huj.vercel.app/">
                Source code: Law Service
              </Link>
               
                </p>
              </div>
              
            </div>
            </div>
          <div className="work-container">
            <h2 className="title text-left">Work Experience</h2>
            <div className="work">
              <div className="job-date">
                <p className="job">Web Design Intern Program</p>
                <p className="date">2023 - 2023</p>
              </div>
              <h2 className="company-name">Qtec Solutions, Dhaka</h2>
              <p className="work-text">
              As a Web Design Intern at Qtec Solutions, I gained practical experience in creating user-friendly, responsive websites. I worked with design and development teams to enhance UI/UX, conduct usability testing, and ensure design consistency. This role helped me sharpen my front-end skills and deepen my understanding of web design principles.
              </p>
            </div>

            <div className="work">
              <div className="job-date">
                <p className="job">Frontend Webdeveloper</p>
                <p className="date">2023 - present</p>
              </div>
              <h2 className="company-name">Freelance</h2>
              <p className="work-text">
              As a Freelance Frontend Web Developer, I've crafted responsive websites and enhanced user experiences through innovative design. I turn client needs into visually appealing interfaces, optimize performance, and ensure cross-browser compatibility. My work spans various industries, utilizing HTML, CSS, JavaScript, and frameworks like React and Next.js.
              </p>
            </div>

            <div className="work">
              <div className="job-date">
                <p className="job">Business Developemnet Officer</p>
                <p className="date">2022 - 2023</p>
              </div>
              <h2 className="company-name"> The Metal Prvt Ltd</h2>
              <p className="work-text">    
              As a Business Development Officer at The Metal Pvt Ltd, I played a key role in identifying new business opportunities and building strong client relationships. My responsibilities included market research, developing strategic plans to drive sales growth, and collaborating with cross-functional teams to implement new business initiatives. This role enhanced my skills in negotiation, strategic thinking, and project management.
              </p>
            </div>
          </div>
          {/* <div className="references-container">
            <h2 className="title text-left">References</h2>
            <div className="references">
              <div className="left-references">
                <h4 className="name">Name Surname</h4>
                <p className="company-name">Job Position, Company Name</p>
                <div className="phone">
                  <div className="phone-text">
                    <p>Phone:</p>
                    <p>Email:</p>
                  </div>
                  <div className="phone-number">
                    <p>123-456-7890</p>
                    <p>hello@reallygreatsite.com</p>
                  </div>
                </div>
              </div>
              <div className="right-references">
                <h4 className="name">Name Surname</h4>
                <p className="company-name">Job Position, Company Name</p>
                <div className="phone">
                  <div className="phone-text">
                    <p>Phone:</p>
                    <p>Email:</p>
                  </div>
                  <div className="phone-number">
                    <p>123-456-7890</p>
                    <p>hello@reallygreatsite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
