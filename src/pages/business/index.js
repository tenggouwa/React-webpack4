import React, {Component} from 'react';
import { withRouter } from 'react-router'

import CommonBanner from '../../components/commonBanner/index.js'
import Icon1 from '../../assets/img/home/icon1.png'
import Icon2 from '../../assets/img/home/icon2.png'
import Icon3 from '../../assets/img/home/icon3.png'
import Icon4 from '../../assets/img/home/icon4.png'
import img1 from '../../assets/img/business/bg1.jpg'
import img2 from '../../assets/img/business/bg2.jpg'
import img3 from '../../assets/img/business/bg3.jpg'
import img4 from '../../assets/img/business/bg4.jpg'
import img5 from '../../assets/img/business/bg5.jpg'
import img6 from '../../assets/img/business/bg6.jpg'
import img7 from '../../assets/img/business/bg7.jpg'
import img8 from '../../assets/img/business/bg8.jpg'
import img9 from '../../assets/img/business/bg9.jpg'
import img10 from '../../assets/img/business/bg10.jpg'
import img11 from '../../assets/img/business/bg11.jpg'
import './index.scss'


const BANNER_CONTENT = ['创业项目孵化', '让价值流通更安全、更简单']

const TITLE1 = "创业项目孵化"
const DESCRIBE1 = "聚链集团为区块链项目提供创业孵化加速；分在办公场地、区块链技术支持、解决方案咨询和公关关系对接等方向提供支持。"

const TITLE2 = "提供舒适办公空间"
const DESCRIBE2 = "从移动工位到专属办公室，再到整个企业总部，我们都能打造出可提高工作效率、创新和协作的办公环境。"
const CONTENT2 = [
    {
        icon: img1,
        title: '移动工位',
        content: '一张桌子，随时开始工作; 灵活空间选择，实惠价格尽享高端设施。',
    },{
        icon: img2,
        title: '固定工位',
        content: '拥有一张只属于您的办公桌，适合初创或小型企业每日使用。',
    },{
        icon: img3,
        title: '专属办公室',
        content: '为您的品牌特别设计的办公室，容纳任何规模的团队。可随时搬入。',
    }
]

const TITLE3 = "提供专业的区块链技术支持"
const DESCRIBE3 = "我们是国内为数极少的拥有完全自主知识产权的、完整区块链核心技术的公司，是区块链底层技术的专业供应商和中国区块链应用的助推者。"
const CONTENT3 = [
    {
        icon: Icon1,
        title: '超性能',
        content: '共识算法优化、交易流程优化、GPU/FPGA硬件加速'
    }, {
        icon: Icon2,
        title: '更安全',
        content: '多链业务隔离、多维度加密、隐私保护机制'
    }, {
        icon: Icon3,
        title: '高可用',
        content: '节点保护机制、节点动态增删、公共链协同管理'
    }, {
        icon: Icon4,
        title: '易扩展',
        content: '共识算法可配置、资源调度适配器、WAVM虚拟机、区块归档'
    }
]

const TITLE4 = "提供全方位解决方案咨询"
const DESCRIBE4 = "为创客提供创业能力培训、商业机会识别等培训服务；提供高校人才与技术对接等服务、提供管理咨询服务，其中包括一般性商务代理服务和制定战略、管理制度、人力资源管理制度、市场分析和专业知识培训等。"
const CONTENT4 = [
    {
        img: img4,
        title: '公共关系对接',
        content: '在市场营销层面上，为区块链创新企业争取技术交流、行业信息传播和政府关系资源的优化利用，包括行业峰会、标准联合、国际合作和政策咨询等，为区块链孵化项目提供信息传播和品牌宣传。'
    }, {
        img: img5,
        title: '解决方案咨询',
        content: '为创客提供创业能力培训、商业机会识别等培训服务；提供高校人才与技术对接等服务、提供管理咨询服务，其中包括一般性商务代理服务和制定战略、管理制度、人力资源管理制度、市场分析和专业知识培训等。'
    }, {
        img: img6,
        title: '区块链技术支持',
        content: '我们是国内为数极少的拥有完全自主知识产权的、完整区块链核心技术的公司，是区块链底层技术的专业供应商和中国区块链应用的助推者。'
    }, {
        img: img7,
        title: '办公场地支持',
        content: '为创业初期的项目提供办公场地、设备租赁、线下资源对接的孵化平台，降低创业风险与成本控制等服务。'
    }
]


const TITLE5 = "提供公共关系对接服务"
const DESCRIBE5 = "在市场营销层面上，为区块链创新企业争取技术交流、行业信息传播和政府关系资源的优化利用，包括行业峰会、标准联合、国际合作和政策咨询等，为区块链孵化项目提供信息传播和品牌宣传。"
const CONTENT5 = [
    {
        img: img8,
        title: '国际合作',
        content: '一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。'
    }, {
        img: img9,
        title: '国际合作',
        content: '一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。'
    }, {
        img: img10,
        title: '国际合作',
        content: '一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。'
    }, {
        img: img11,
        title: '国际合作',
        content: '一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。一张桌子，随时开始工作。灵活空间选择，实惠价格尽享高端设施。'
    }
]
@withRouter
export default class Business extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="business">
                <div className="business-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="business-one business-item">
                    <h5 className="business-title">{TITLE1}</h5>
                    <p className="business-content">{DESCRIBE1}</p>
                </div>
                <div className="business-two business-item">
                    <h5 className="business-title">{TITLE2}</h5>
                    <p className="business-content">{DESCRIBE2}</p>
                    <ul>
                        {
                            CONTENT2.map((item, index) => (
                                <li key={item.title}>
                                    <div
                                        className={`img img${index + 1}`}
                                    />
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="business-three business-item">
                    <h5 className="business-title">{TITLE3}</h5>
                    <p className="business-content">{DESCRIBE3}</p>
                    <ul>
                        {
                            CONTENT3.map(item => (
                                <li key={item.title}>
                                    <img src={item.icon} alt=""/>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="business-four business-item">
                    <h5 className="business-title">{TITLE4}</h5>
                    <p className="business-content">{DESCRIBE4}</p>
                    <ul>
                        {
                            CONTENT4.map((item, index) => (
                                <li key={index}>
                                    {
                                        Number(index) % 2 === 1 ?
                                        <React.Fragment>
                                            <div className="text rightMargin">
                                                <h5>{item.title}</h5>
                                                <p>{item.content}</p>
                                            </div>
                                            <div className="img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <div className="img">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div className="text leftMargin">
                                                <h5>{item.title}</h5>
                                                <p>{item.content}</p>
                                            </div>
                                        </React.Fragment>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <div className="business-five business-item">
                    <h5 className="business-title">{TITLE5}</h5>
                    <p className="business-content">{DESCRIBE5}</p>
                    <ul>
                        {
                            CONTENT5.map((item, index) => (
                                <li key={index}>
                                    <img src={item.img} alt=""/>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div> */}
            </div>
        )
    }
}