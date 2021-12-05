// Footer appears on every page
import React from 'react';


function Footer() {
    return (
        <main>
            <section className="contact" id="contact">
                <h3>Contact</h3>
                <ul>
                    <li><a href="mailto:wkropat@gmail.com" target="_blank" rel="noreferrer">wkropat@gmail.com</a></li>
                    <li><a href="https://github.com/wkropat" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/wkropat" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="./Assets/files/wkropat-resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </section>
        </main>
    );
  }


export default Footer;