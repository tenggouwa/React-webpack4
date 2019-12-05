import React, {Component} from 'react';
import { withRouter } from 'react-router'
import Logo from '../../assets/img/home/logo.png'
import bgImg from '../../assets/img/home/bg.png'
import bg1Img from '../../assets/img/home/bg1.png'
import bg2Img from '../../assets/img/home/oneCercle.png'
import bg3Img from '../../assets/img/home/oneCercle1.png'
import './index.scss'

@withRouter
export default class HomeBanner extends Component {
    render() {
        return (
            <div className="home-banner">
                <div className="home-banner-main">
                    <img className="home-banner-bg" src={bgImg} alt=""/>
                    <img className="home-banner-bg1" src={bg1Img} alt=""/>
                    <img className="home-banner-bg2" src={bg2Img} alt=""/>
                    <img className="home-banner-bg3" src={bg3Img} alt=""/>
                    <div className="home-banner-content">
                        <img src={Logo} alt=""/>
                        <p>聚链集团</p>
                    </div>
                </div>
            </div>
        )
    }
}