import Image from "next/image";
import styles from "./page.module.css";
import profilePic from "../../public/profilePic.jpeg";
import ASTN from "../../public/ASTN.jpeg";
import RobsGarments from "../../public/robsGarments.png";
import HousingMarket from "../../public/housing.png";
import ContactForm from "@/app/components/contact/ContactForm";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.infoContainer}>
        <Image src={profilePic} alt="profile image" height={600} width={800} className={styles.image} loading="eager"/>
        <div className={styles.info}>
          <h2>Nate Natividad</h2>
          <p>B.S in Computer Science from UC Riverside</p>
          <ul>
            <li><a href="https://github.com/nnatividad"><u>{"-->github"}</u></a></li>
            <li><a href="https://www.linkedin.com/in/nathaniel-natividad-bb3871227/"><u>{"-->linkedIn"}</u></a></li>
            <li><a href="/"><u>{"-->resume"}</u></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.componentContainer}>
        <div id="about" className={styles.about}>
          <div className={styles.title}><h1>ABOUT</h1></div>
          <div className={styles.textContainer}>
            <p>
              I'm Nate Natividad, a software engineer and web developer based in the Bay Area. 
              I build things for businesses that need a real web presence — e-commerce stores, portfolio sites, custom platforms, whatever the problem calls for. 
              I graduated from UC Riverside in 2024 with a degree in Computer Science and I'm currently seeking full-time software engineering roles alongside freelance work. 
              Outside of work, I workout, play golf, and indulge in lots of video games lol. Let's connect.
            </p>
          </div>
        </div>
        <div id="experience" className={styles.experience}>
          <div className={styles.title}><h1>EXPERIENCE</h1></div>
          <div className={styles.experienceContainer}>
            <ul>
              <li>
                <div className={styles.jobInfo}>
                  <div>
                    <Image src={ASTN} alt="astn" height={600} width={800} className={styles.image}/>
                  </div>
                  <div>
                    <div className={styles.jobTitle}>
                      <h2>Full Stack Developer</h2>
                      <h3>Oct 2024 - Oct 2025</h3>
                    </div>
                    <div className={styles.textContainer}>
                      <p>
                        Built the initial MVP architecture for a mobile athlete marketplace from the ground up using React Native, Expo, and Firebase. 
                        Owned the full development of user onboarding, profile management, and marketplace UI, working closely with product design to deliver an experience aligned with the company's vision. 
                        Established Git-based version control workflows and documented engineering standards with the broader team. 
                        Collaborated directly with leadership to translate business requirements into scalable technical solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <div className={styles.title}><h1>PROJECTS</h1></div>
          <div className={styles.experienceContainer}>
            <ul>
              <li>
                <div className={styles.jobInfo}>
                  <div>
                    <Image src={RobsGarments} alt="robsgarments" height={600} width={800} className={styles.image}/>
                  </div>
                  <div>
                    <div className={styles.jobTitle}>
                      <h2>Robin's Garments</h2>
                      <div className={styles.projectLinks}>
                        <a href="https://robs-garments.vercel.app/"><u>live site (wip)</u></a>
                        <a href="https://github.com/nnatividad/robs-garments"><u>repo</u></a>
                      </div>
                    </div>
                    <div className={styles.textContainer}>
                      <p>
                        A custom e-commerce platform for Robin's Garments. Local to the Bay Area, a business that curates and sells vintage
                        clothing and accessories. Built using Next.js, React, Vercel, Sanity, and Stripe.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.jobInfo}>
                  <div>
                    <Image src={HousingMarket} alt="housing market analysis" height={600} width={800} className={styles.image}/>
                  </div>
                  <div>
                    <div className={styles.jobTitle}>
                      <h2>Housing Market Analysis</h2>
                      <div className={styles.projectLinks}>
                        <a href="https://github.com/nnatividad/HousingAnalysis/tree/main"><u>repo</u></a>
                      </div>
                    </div>
                    <div className={styles.textContainer}>
                      <p>
                        College senior design project focused on using big data technologies. 
                        My main contribution to this project is developing an interactive data visualization dashboard with Flask, HTML, and CSS, integrating with a PostgreSQL database to allow users to query and explore housing data across the U.S. through an interactive map.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="contact" className={styles.contact}>
          <div className={styles.title}><h1>CONTACT</h1></div>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
