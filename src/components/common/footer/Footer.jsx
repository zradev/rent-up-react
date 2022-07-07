import React from 'react'
import './Footer.css';
import { footer } from '../../data/Data';

const Footer = () => {
    return (
        <>
            <section className="footerContact">
                <div className="container">
                    <div className="send flex">
                        <div className="text">
                            <h1>Do You Have Any Questions?</h1>
                            <p>We will help you to grow your career!</p>
                        </div>
                        <button className="btn5">Contact Us Today</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="box">
                        <div className="logo">
                            <img src="../images/logo-light.png" alt="" />
                            <h2>Do You Need Help With Anything?</h2>
                            <p>Receive updates, hot deals, tutorials, discounts and more sent straight into your inbox every month!</p>
                            <div className="input flex">
                                <input type="text" placeholder='Email@Address' name='' id='' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    {footer.map((val, index) => (
                        <div className="box" key={index}>
                            <h3>{val.title}</h3>
                            <ul>
                                {val.text.map((items, index) => (
                                    <li key={index}>{items.list}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
            <div className="legal">
                <span>2022 RentUP. Developed by Zlatomir Radev following GorkCoder.</span>
            </div>
        </>
    )
}

export default Footer