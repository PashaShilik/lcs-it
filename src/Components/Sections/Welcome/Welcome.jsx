import ContactBtn from '../../ContactBtn/ContactBtn';
import Cube from '../../Cube/Cube';
import './welcome.scss';
import { motion } from 'framer-motion';
import { motionAnimation } from '../../../constants/motionAnimation';

function Welcome({ setModal }) {
    return (
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
            className='welcome'
        >
            <div className="welcome__info">
                <ul className="welcome__skills">
                    <motion.li variants={motionAnimation} className="welcome__skills-item">Functional</motion.li>
                    <motion.li variants={motionAnimation} className="welcome__skills-item">Perfomance</motion.li>
                    <motion.li variants={motionAnimation} className="welcome__skills-item">Usability</motion.li>
                </ul>
                <motion.h1 className='welcome__title' variants={motionAnimation}>Software  Development</motion.h1>
                <motion.p className="welcome__subtitle" variants={motionAnimation}>LCS-IT is a prompt solution to issues, complex unique technological developments.</motion.p>
                <ContactBtn setModal={setModal}/>
            </div>
            <Cube/>
        </motion.section>
    )
}

export default Welcome;