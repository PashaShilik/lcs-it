import React, { useState } from 'react';
import './scheme.scss';
import userActive from '../../../assets/img/userActive.png';
import user from '../../../assets/svg/user.svg';
import blocknot from '../../../assets/svg/blaknot.svg';
import rocket from '../../../assets/svg/rocket.svg';
import schemeActiveExample from '../../../assets/img/schemeActiveExample.png';
import Lottie from "lottie-react";
import animation from "../../../assets/lottieAnimations/shemeAnimation.json";
import { motion, useInView } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';
import { useRef } from 'react';
import { useEffect } from 'react';

function Scheme() {

    const ref = useRef();
    const isInView = useInView(ref);

    const scrollRef = useRef();
    const startScroll = useInView(scrollRef);

    const [animationStart, setAnimationStart] = useState(false);
    const [animationScrollAmount, setAnimationScrollAmount] = useState(0);
    const [scrollAnimation, setScrollAnimation] = useState(false);
    const [scrollActive, setScrollActive] = useState(false);
    
    useEffect(() => {
        if(isInView) {
            setAnimationStart(true);
        }
    }, [isInView]);

/*     useEffect(() => {
        if(startScroll && !scrollAnimation) {
            setAnimationScrollAmount(0);
            document.body.className = 'body-scroll-hidden';
            setScrollActive(true);
        }
    }, [startScroll]);
    
    useEffect(() => {
        if(animationScrollAmount === 3) {
            document.body.className = 'body-scroll-default';
            setAnimationScrollAmount(3);
            setScrollAnimation(true);
            setScrollActive(false);
        }   else if(animationScrollAmount === -1) {
                document.body.className = 'body-scroll-default';
                setAnimationScrollAmount(0);
                setScrollActive(false);
        }
    }, [animationScrollAmount]);

    const setScrollAmount = (scrollDown) => {
        if(scrollDown.deltaY === -100 && scrollActive) {
            setAnimationScrollAmount((prev) => prev - 1);
        }   else if(scrollActive) {
                setAnimationScrollAmount((prev) => prev + 1);
        }
    } */

   /*  onWheel={/* setScrollAmount  (e) => console.log(e)} */

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }} 
            className='scheme'
            variants={motionAnimation}
        >
            <h2 className='scheme__title'>Scheme of Work</h2>
            <div className="scheme__content">
                <div className="scheme__list">
                    <div className="scheme__row-icons">
                        <div className="scheme__row-example">
                            <div className="scheme__row-icon-wrap">
                                <img src={userActive} alt="" className='scheme__row-icon scheme-user--active' />
                                <img src={user} alt="" className='scheme__row-icon scheme-user' />
                            </div>
                            <div className="scheme__triangles scheme__triangles--transform">
                                <div className="scheme__triangle scheme__triangle-mini"></div>
                                <div className="scheme__triangle scheme__triangle-mid"></div>
                                <div className="scheme__triangle scheme__triangle-big"></div>
                            </div>
                            <img src={schemeActiveExample} alt="" className='scheme__row-example-img' />
                        </div>
                        <div className="scheme__row-icon-wrap">
                            {/* <img src={userActive} alt="" className='scheme__row-icon scheme-user--active' /> */}
                            <img src={user} alt="" className={animationScrollAmount === 1 ? 'scheme__row-icon scheme__row-icon--active' : 'scheme__row-icon'}/*  scheme-user  *//>
                        </div>
                        <div className={animationScrollAmount === 2 ? 'scheme__row-line scheme__row-line--active' : 'scheme__row-line'}></div>

                        <div className="scheme__row-icon-wrap">
                            <img src={blocknot} alt="" className={animationScrollAmount === 2 ? 'scheme__row-icon scheme__row-icon--active' : 'scheme__row-icon'} />
                        </div>
                        <div className={animationScrollAmount === 3 ? 'scheme__row-line scheme__row-line--active' : 'scheme__row-line'}></div>

                        <div className="scheme__row-icon-wrap">
                            <img src={rocket} alt="" className={animationScrollAmount === 3 ? 'scheme__row-icon scheme__row-icon--active' : 'scheme__row-icon'} />
                        </div>
                    </div>
                    <ul className='scheme__row-cards'>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Contact us</h3>
                            <p className={animationScrollAmount === 1 ? 'scheme__row-text scheme__row-text--active' : 'scheme__row-text'}>Fill out the contact form, brifle descride your project or ask us a question</p>
                        </li>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Discovery call</h3>
                            <p className={animationScrollAmount === 2 ? 'scheme__row-text scheme__row-text--active' : 'scheme__row-text'} ref={ref}>Andrew - our CEO will arrange a video meeting with you in order to clarify the project assumptions</p>
                        </li>
                        <li className='scheme__row-card'>
                            <h3 className='scheme__row-title'>Project estimation</h3>
                            <p className={animationScrollAmount === 3 ? 'scheme__row-text scheme__row-text--active' : 'scheme__row-text'}>On the basis of the collected information, we will prepare an estimate of the costs and  duration of the <span ref={scrollRef} >project</span> </p>
                        </li>
                    </ul>
                </div>
                <div className="scheme__ilustration">
                    <div className="scheme__ilustration-content">
                        {animationStart &&
                            <Lottie animationData={animation} loop={false} />
                        }
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Scheme;