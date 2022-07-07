import React from 'react';
import Heading from '../../common/Heading';
import './Recent.css';
import RecentCard from './RecentCard';

const Recent = () => {
    return (
        <>
            <section className="recent padding">
                <div className="container">
                    <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Deleniti sed beatae molestiae corrupti voluptatem fuga architecto amet perspiciatis incidunt quis.' />
                    <RecentCard />
                </div>
            </section>
        </>
    );
}

export default Recent;