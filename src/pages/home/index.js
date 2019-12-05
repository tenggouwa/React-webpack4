import React, {Component} from 'react';
import { withRouter } from 'react-router'
import HomeBanner from '../../components/homeBanner/index.js'
import Icon1 from '../../assets/img/home/icon1.png'
import Icon2 from '../../assets/img/home/icon2.png'
import Icon3 from '../../assets/img/home/icon3.png'
import Icon4 from '../../assets/img/home/icon4.png'
import New1 from '../../assets/img/home/new1.png'
import New2 from '../../assets/img/home/new2.png'
import New3 from '../../assets/img/home/new3.png'
import New4 from '../../assets/img/home/new4.png'
import New5 from '../../assets/img/home/new5.png'
import New6 from '../../assets/img/home/new6.png'
import New7 from '../../assets/img/home/new7.png'
import New8 from '../../assets/img/home/new8.png'
import Media1 from '../../assets/img/home/media1.png'
import Media2 from '../../assets/img/home/media2.png'
import Media3 from '../../assets/img/home/media3.png'
import Media4 from '../../assets/img/home/media4.png'
import Media5 from '../../assets/img/home/media5.png'
import Media6 from '../../assets/img/home/media6.png'
import Media7 from '../../assets/img/home/media7.png'
import Media8 from '../../assets/img/home/media8.png'
import uBg1 from '../../assets/img/home/u53.png'
import uBg2 from '../../assets/img/home/u59.png'
import uBg3 from '../../assets/img/home/u65.png'
import normal1 from '../../assets/img/home/normal1.png'
import normal2 from '../../assets/img/home/normal2.png'
import normal3 from '../../assets/img/home/normal3.png'
import normal4 from '../../assets/img/home/normal4.png'
import normal5 from '../../assets/img/home/normal5.png'
import normal6 from '../../assets/img/home/normal6.png'
import normal7 from '../../assets/img/home/normal7.png'
import normal8 from '../../assets/img/home/normal8.png'
import rotate1 from '../../assets/img/home/rotate1.png'
import rotate2 from '../../assets/img/home/rotate2.png'
import rotate3 from '../../assets/img/home/rotate3.png'
import rotate4 from '../../assets/img/home/rotate4.png'
import rotate5 from '../../assets/img/home/rotate5.png'
import rotate6 from '../../assets/img/home/rotate6.png'
import rotate7 from '../../assets/img/home/rotate7.png'
import rotate8 from '../../assets/img/home/rotate8.png'
import './index.scss'

const FIRST_TITLE = "聚链区块链基础设施"
const FIRST_TEXT = "聚链在性能、安全、隐私等方面处于国际领先地位，支持用户基于物理机或云主机快速部署、扩展和管理区块链网络，并提供区块链网络可视化监控。该平台已申请多项发明专利，应用于商业银行、资产交易中心等数十家大型机构。"
const FIRST_CONTENT = [{
        src: Icon1,
        name: '超性能',
        text: '共识算法优化、交易流程优化'
    }, {
        src: Icon2,
        name: '更安全',
        text: '多链业务隔离、多维度加密、隐私保护机制'
    }, {
        src: Icon3,
        name: '高可用',
        text: '节点保护机制、节点动态增删、公共链协同管理'
    }, {
        src: Icon4,
        name: '易扩展',
        text: '共识算法可配置、资源调度适配器、WAVM虚拟机、区块归档'
    }]

const SECOND_TITLE = "聚链可提供服务"
const SECOND_TEXT = "根据不同场景和需求，提供从行业专业咨询到应用开发落地全流程服务"
const SECOND_CONTENT = [{
        src: uBg1,
        title: '区块链技术服务',
        array: ['数字资产管理、智能合约', '超导网络、金融操作系统', '征信系统、全网身份认证', '国家级区块链大数据中心']
    }, {
        src: uBg2,
        title: '创业项目孵化',
        array: ['办公场地支持', '区块链技术支持', '解决方案咨询', '公共关系对接']
    }, {
        src: uBg3,
        title: '区块链产业基金',
        array: ['创业投资', '创业重组投资', '基础设施投资']
    }]

const THIRD_TITLE = "行业解决方案"
const THIRD_TEXT = "凭借丰富的落地案例，提供专业可靠的区块链行业解决方案"
const THIRD_CONTENT = [{
        title: '资产证券文化',
        normal: normal1,
        rotate: rotate1,
        position: ['0px', '60px']
    }, {
        title: '数字存证',
        normal: normal2,
        rotate: rotate2,
        position: ['0px', '230.88px']
    }, {
        title: '股权交易',
        normal: normal3,
        rotate: rotate3,
        position: ['151px', '146px']
    }, {
        title: '供应链金融',
        normal: normal4,
        rotate: rotate4,
        position: ['301px', '60px']
    }, {
        title: '媒体娱乐',
        normal: normal5,
        rotate: rotate5,
        position: ['301px', '230.88px']
    }, {
        title: '贸易金融',
        normal: normal6,
        rotate: rotate6,
        position: ['453px', '146px']
    }, 
    {
        title: '发审监管',
        normal: normal7,
        rotate: rotate7,
        position: ['604px', '60px']
    }, {
        title: '网络安全',
        normal: normal8,
        rotate: rotate8,
        position: ['604px', '230.88px']
    }]

const FOURTH_TITLE = "新闻资讯"
const FOURTH_TEXT = "中国完全自主知识产权，金融级区块链解决方案"
const FOURTH_CONTENT = [{
    date: ['NOV', '21'],
    title: "人民日报：以区块链赋能社会治理",
    content: "党的十九届四中全会强调，加强和创新社会治理，完善党委领导、政府负责、民主协商、社会协同、公众参与、法治保障、科技支撑的社会治理体系",
    link: "http://www.zgjssw.gov.cn/dangjianxinlun/201911/t20191121_6413931.shtml"
}, {
    date: ['DEC', '01'],
    title: "海南国际离岸创新创业（三亚）试验区揭牌设立",
    content: "新华社三亚12月1日电（记者周正平）海南自贸港建设的重要先行项目——海南国际离岸创新创业（三亚）试验区1日在海南省三亚市揭牌设立。",
    link: "http://www.gov.cn/xinwen/2019-12/01/content_5457421.htm"
}, {
    date: ['DEC', '02'],
    title: "区块链赋能供应链金融",
    content: "随着金融科技发展，一个被科技赋能的金融业已悄然来到。",
    link: 'http://paper.ce.cn/jjrb/html/2019-12/02/content_407218.htm'
}]

const FIFTH_TITLE = "合作伙伴"
const FIFTH_CONTENT = [New1, New2, New3, New4, New5, New6, New7, New8]
const FIFTH_TITLE1 = "合作媒体"
const FIFTH_CONTENT1 = [Media1, Media2, Media3, Media4, Media5, Media6, Media7, Media8]
@withRouter
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    renderSixTab = (item) => {
        return (
            <div>
                {/* <img src={item.normal} alt=""/> */}
                <img src={item.rotate} alt=""/>
            </div>
        )
    }

    jumpLink = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="home">
                <HomeBanner />
                <div className="home-content home-first">
                    <div className="home-first-main">
                        <h4 className="home-content-title">{FIRST_TITLE}</h4>
                        <p className="home-content-text">{FIRST_TEXT}</p>
                        <ul>
                            {
                                FIRST_CONTENT.map(item => (
                                    <li key={item.name}>
                                        <img src={item.src} alt=""/>
                                        <h5>{item.name}</h5>
                                        <p>{item.text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="home-first-btn" onClick={() => { this.jumpLink('/product') }}>
                            了解更多
                        </div>
                    </div>
                </div>
                <div className="home-content home-second">
                    <div className="home-second-main">
                        <h4 className="home-content-title">{SECOND_TITLE}</h4>
                        <p className="home-content-text">{SECOND_TEXT}</p>
                        <ul>
                            {
                                SECOND_CONTENT.map(item => (
                                    <li key={item.name}>
                                        <img src={item.src} alt=""/>
                                        <h5>{item.title}</h5>
                                        {
                                          item.array.map(cat => (
                                              <p key={cat}><span>*</span>{cat}</p>
                                          ))
                                        }
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="home-content home-third">
                    <div className="home-third-main">
                        <h4 className="home-content-title">{THIRD_TITLE}</h4>
                        <p className="home-content-text">{THIRD_TEXT}</p>
                        <div className="sixTab-all">
                            {
                              THIRD_CONTENT.map(item => (
                                  <div
                                      className="sixTab-item"
                                      style={{ left: item.position[0], top: item.position[1] }}
                                  >
                                      {this.renderSixTab(item)}
                                  </div>
                              ))
                            }
                        </div>
                    </div>
                </div>
                <div className="home-content home-content1 home-fourth">
                    <div className="home-fourth-main">
                        <h4 className="home-content-title">{FOURTH_TITLE}</h4>
                        <p className="home-content-text">{FOURTH_TEXT}</p>
                        <ul>
                            {
                                FOURTH_CONTENT.map(item => (
                                    <li onClick={() => { window.open(item.link) }}>
                                        <div className="left">
                                            <p>{item.date[0]}</p>
                                            <p>{item.date[1]}</p>
                                        </div>
                                        <div className="right">
                                            <h5>{item.title}</h5>
                                            <p>{item.content}</p>
                                            <i className="iconfont iconlujing-" />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="home-content home-fifth">
                    <div className="home-fifth-main">
                        <h4 className="home-content-title">{FIFTH_TITLE}</h4>
                        <ul>
                            {
                                FIFTH_CONTENT.map(item => (
                                    <li key={item}>
                                        <img src={item} alt=""/>
                                    </li>
                                ))
                            }
                        </ul>
                        <h4 className="home-content-title">{FIFTH_TITLE1}</h4>
                        <ul>
                            {
                                FIFTH_CONTENT1.map(item => (
                                    <li key={item}>
                                        <img src={item} alt=""/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}