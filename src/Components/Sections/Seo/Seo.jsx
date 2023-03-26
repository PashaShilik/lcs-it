import React, { useState } from 'react';
import './seo.scss';
import seoIcon1 from '../../../assets/svg/seoIcon1.svg';
import seoIcon2 from '../../../assets/svg/seoIcon2.svg';
import seoIcon3 from '../../../assets/svg/seoIcon3.svg';
import { FiArrowUpRight } from 'react-icons/fi';
import usaFlag from '../../../assets/svg/usa.svg';
import ukFlag from '../../../assets/svg/uk.svg';
import canadaFlag from '../../../assets/svg/canada.svg';
import usaLine from '../../../assets/img/usaLine.png';
import ukLine from '../../../assets/img/ukLine.png';
import canadaLine from '../../../assets/img/canadaLine.png';
import usaResult from '../../../assets/svg/usaResult.svg';
import ukResult from '../../../assets/svg/ukResult.svg';
import canadaResult from '../../../assets/svg/canadaResult.svg';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import ContactBtn from '../../ContactBtn/ContactBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from '../../../store/reducers/seoReducer';

function Seo({ setModal }) {
    const dispatch = useDispatch();
    const seoBtns = useSelector(state => state.seoReducer.seoButtons);

    return (
        <section className='seo'>
            <h2 className='seo__title'>SEO</h2>
            <div className="seo__navigate">
                <div className="seo__titles">
                    {seoBtns && seoBtns.map((seoBtn) => {
                        return (
                            <button 
                                key={seoBtn.id} 
                                className={seoBtn.active ? 'seo__navigate-btn seo__navigate-btn--active' : 'seo__navigate-btn'}
                                onClick={() => dispatch(setActiveButton(seoBtn.id))}
                            >
                                {seoBtn.label}
                            </button>
                        )
                    })}
                </div>
                <div className="seo__icons">
                    <button>
                        <img src={seoIcon1} alt="" className='seo__icons-img' />
                    </button>
                    <button>
                        <img src={seoIcon2} alt="" className='seo__icons-img' />
                    </button>
                    <button>
                        <img src={seoIcon3} alt="" className='seo__icons-img' />
                    </button>
                </div>
            </div>
            <ul className="seo__row">
                <li className='seo__card'>
                    <div className="seo__card-header">
                        <div className="seo__card-header-left">
                            <img src={usaFlag} alt="" className='seo__card-flag' />
                            <p className='seo__card-country'>USA</p>
                            <FiArrowUpRight className='seo__card-arrow' />
                        </div>
                        <button className='seo__card-volume-btn usa-volume'>Volume</button>
                    </div>
                    <div className="seo__card-statistic">
                        <img src={usaLine} alt="" className='seo__graphic-bg' />
                        <div className="seo__card-result">
                            <div className="seo__card-result-img">
                                <img src={usaResult} alt="" />
                            </div>
                            <p className='seo__card-result-title'>Result</p>    
                        </div>
                        <div className="seo__card-kd">
                            <p className='seo__card-kd-proccent'>55%</p>
                            <p className='seo__card-kd-title'>KD</p>
                        </div>
                        <div className="seo__card-volume">
                            <p className='seo__card-volume-count'>1,2K</p>
                            <p className='seo__card-volume-title'>Volume</p>
                        </div>
                    </div>
                    <p className='seo__card-text'>You have a decent chance of ranking for</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </li>
                <li className='seo__card'>
                    <div className="seo__card-header">
                        <div className="seo__card-header-left">
                            <img src={ukFlag} alt="" className='seo__card-flag' />
                            <p className='seo__card-country'>UK</p>
                            <FiArrowUpRight className='seo__card-arrow' />
                        </div>
                        <button className='seo__card-volume-btn uk-volume'>Volume</button>
                    </div>
                    <div className="seo__card-statistic">
                        <img src={ukLine} alt="" className='seo__graphic-bg' />
                        <div className="seo__card-result">
                            <div className="seo__card-result-img">
                                <img src={ukResult} alt="" />
                            </div>
                            <p className='seo__card-result-title'>Result</p>
                        </div>
                        <div className="seo__card-kd">
                            <p className='seo__card-kd-proccent'>60%</p>
                            <p className='seo__card-kd-title'>KD</p>
                        </div>
                        <div className="seo__card-volume">
                            <p className='seo__card-volume-count'>309K</p>
                            <p className='seo__card-volume-title'>Volume</p>
                        </div>
                    </div>
                    <p className='seo__card-text'>Will bring in targeted traffic</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </li>
                <li className='seo__card'>
                    <div className="seo__card-header">
                        <div className="seo__card-header-left">
                            <img src={canadaFlag} alt="" className='seo__card-flag' />
                            <p className='seo__card-country'>CAN</p>
                            <FiArrowUpRight className='seo__card-arrow' />
                        </div>
                        <button className='seo__card-volume-btn canada-volume'>Volume</button>
                    </div>
                    <div className="seo__card-statistic">
                        <img src={canadaLine} alt="" className='seo__graphic-bg' />
                        <div className="seo__card-result">
                            <div className="seo__card-result-img">
                                <img src={canadaResult} alt="" />
                            </div>
                            <p className='seo__card-result-title'>Result</p>
                        </div>
                        <div className="seo__card-kd">
                            <p className='seo__card-kd-proccent'>62%</p>
                            <p className='seo__card-kd-title'>KD</p>
                        </div>
                        <div className="seo__card-volume">
                            <p className='seo__card-volume-count'>519K</p>
                            <p className='seo__card-volume-title'>Volume</p>
                        </div>
                    </div>
                    <p className='seo__card-text'>Will result in a positive ROI</p>
                    <div className='seo-btn'>
                        <ContactBtn setModal={setModal}/>
                    </div>
                </li>
            </ul>
            <div className="seo__pagination">
                <div className="seo__pagination-wrap">
                    <HiArrowLeft className='seo__pagination-icon'/>
                </div>
                <div className="seo__pagination-wrap">
                    <HiArrowRight className='seo__pagination-icon' />
                </div>
            </div>
        </section>
    )
}

export default Seo;