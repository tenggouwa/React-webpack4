import React, {Component} from 'react';
import { withRouter } from 'react-router'
import CommonBanner from '../../../components/commonBanner/index.js'
import './index.scss'


const BANNER_CONTENT = ['公司简介', '了解聚链、牵手聚链、走进聚链']
const TITLE1 = "公司简介"
const DESC1 = "北京聚链时代科技集团股份有限公司创办于2017年，以区块链技术服务为核心，为全球的用户提供区块链的产品和行业解决方案，满足不同用户的场景化服务需求。"
const CONTENT1 = [
  {
    tit1: 'Slogan',
    content1: 'To make blockchain inclusive',
  },
  {
    tit1: '核心价值',
    content1: '降低企业价值流通成本、提升企业价值流通安全性'
  },
  {
    tit1: '愿景',
    content1: '构建底层统一、用户导向的区块链共生系统',
  },
  {
    tit1: '使命',
    content1: '让价值流通更安全、更简单'
  }
]
const TITLE2 = "产品与服务"
const DESC2 = [
    "聚链集团企业云是专业可信赖的区块链基础平台，定位于为行业提供区块链即服务（BaaS）平台，在此平台上构建信赖、可扩展的区块链应用基础平台产品，集成相关领域的基础产品功能，帮助企业快速搭建区块链应用场景;",
    "聚链集团企业云是北京聚链时代科技集团股份有限公司为行业用户提供的个性化、差异化、定制化的区块链解决方案，覆盖资产、股权、版权、保险、医疗、征信等多个领域，基于用户的不同需求及对安全和数据隔离的考虑，提供定制化的区块链行业解决方案;",
    "聚链集团研究院致力于区块链与数字资产行业研究，建立了庞大的区块链商业信息数据库，为政府、企业、投资机构提供决策依据;"
]
const TITLE3 = "价值观"
const CONTENT3 = [
  {
    tit1: '员工是最大的资产',
    content1: '信任、尊重、认真、努力、开放成长',
  },
  {
    tit1: '客户是最好的伙伴',
    content1: '专业、可信赖、服务至上'
  },
  {
    tit1: '技术是最强的力量',
    content1: '以匠人之心，躬耕于区块链技术研发',
  },
  {
    tit1: '合规是最大的保障',
    content1: '严谨、务实、创新、探索'
  }
]
@withRouter
export default class Company extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="company">
                <div className="company-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="company-main">
                    <h4 className="company-title">{TITLE1}</h4>
                    <p className="company-desc center">{DESC1}</p>
                    {/* {
                        CONTENT1.map(item => (
                            <div className="company-cont">
                                <div className="left">
                                    <h5>{item.tit1}</h5>
                                    <p>{item.content1}</p>
                                </div>
                                <div className="right">
                                    <h5>{item.tit2}</h5>
                                    <p>{item.content2}</p>
                                </div>
                            </div>
                        ))
                    } */}
                    <ul className="two">
                        {
                            CONTENT1.map((item, index) => (
                                <li key={index}>
                                    <div className={`img${index + 1}`}></div>
                                    <span className="title">{item.tit1}</span>
                                    <p>{item.content1}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <h4 className="company-title">{TITLE2}</h4>
                    {
                        DESC2.map(item => (
                            <p className="company-desc">{item}</p>
                        ))
                    }
                    <h4 className="company-title">{TITLE3}</h4>

                    <ul className="four">
                        {
                            CONTENT3.map((item, index) => (
                                <li key={index}>
                                    <div className={`img${index + 1}`}></div>
                                    <span className="title">{item.tit1}</span>
                                    <p>{item.content1}</p>
                                </li>
                            ))
                        }
                    </ul>
                    {/* {
                        CONTENT3.map(item => (
                            <div className="company-cont">
                                <div className="left">
                                    <h5>{item.tit1}</h5>
                                    <p>{item.content1}</p>
                                </div>
                                <div className="right">
                                    <h5>{item.tit2}</h5>
                                    <p>{item.content2}</p>
                                </div>
                            </div>
                        ))
                    } */}
                </div>
            </div>
        )
    }
}