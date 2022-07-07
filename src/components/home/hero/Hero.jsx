import React from 'react';
import './Hero.css';
import { FaSearch } from 'react-icons/fa';
import Heading from '../../common/Heading';


const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <Heading title='Serach Your Next Home' subtitle='Find new & featured property located in your city.' />
                    <form action="" className="flex">
                        <div className="box">
                            <span>City/Street</span>
                            <input type="text" placeholder='Location' />
                        </div>
                        <div className="box">
                            <span>Property type</span>
                            <input type="text" placeholder='Property type' />
                        </div>
                        <div className="box">
                            <span>Price Range</span>
                            <input type="text" placeholder='Price Range' />
                        </div>
                        <div className="box">
                            <h4>Advanced Filter</h4>
                        </div>
                        <button className='btn'>
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Hero;