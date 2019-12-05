import React, {Component} from 'react';
import { withRouter } from 'react-router'

import CommonBanner from '../../components/commonBanner/index.js'
import img1 from '../../assets/img/fund/bg1.jpg'
import img2 from '../../assets/img/fund/bg2.jpg'
import './index.scss'


const BANNER_CONTENT = ['区块链产业基金', '让价值流通更安全、更简单']

const TITLE = "区块链产业基金"
const DESCRIBE = "聚链集团为区块链项目提供企业重组投资和基础设施投资！"
const CONTENT = [
    {
        img: img1,
        title: '企业重组投资',
        content: '提供种子基金，对接LP型天使投资人、VC风险投资、PE私募股权投资。为创客提供融资规划、项目评估、投融资方案设计、资本对接、投后管理、上市辅导等服务。'
    }, {
        img: img2,
        title: '基础设施投资',
        content: '搭建中小企业并购信息库，促成项目的兼并收购 ，帮助上市公司线上线下完成并购基金、定向增发融资需求。'
    }
]
@withRouter
export default class Fund extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="fund">
                <div className="fund-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="fund-five fund-item">
                    <h5 className="fund-title">{TITLE}</h5>
                    <p className="fund-content">{DESCRIBE}</p>
                    <ul>
                        {
                            CONTENT.map((item, index) => (
                                <li key={index}>
                                    <img src={item.img} alt=""/>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}