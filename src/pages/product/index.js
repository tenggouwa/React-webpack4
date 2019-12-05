import React, {Component} from 'react';
import { withRouter } from 'react-router'

import CommonBanner from '../../components/commonBanner/index.js'
import img1 from '../../assets/img/product/1.png'
import img2 from '../../assets/img/product/2.png'
import img3 from '../../assets/img/product/3.png'
import img4 from '../../assets/img/product/4.png'
import img5 from '../../assets/img/product/5.png'
import img6 from '../../assets/img/product/6.png'
import imgOne from '../../assets/img/product/1-1.png'
import imgTwo from '../../assets/img/product/2-1.png'
import imgThree from '../../assets/img/product/3-1.png'
import imgFour from '../../assets/img/product/4-1.png'
import imgFive from '../../assets/img/product/5-1.png'
import imgSix from '../../assets/img/product/6-1.png'
import bottomImg1 from '../../assets/img/product/img1.png'
import bottomImg2 from '../../assets/img/product/img2.png'
import bottomImg3 from '../../assets/img/product/img3.png'
import bottomImg4 from '../../assets/img/product/img4.png'
import bottomImg5 from '../../assets/img/product/img5.png'
import bottomImg6 from '../../assets/img/product/img6.png'
import './index.scss'

const BANNER_CONTENT = ['区块链基础设施', '让价值流通更安全、更简单']
const TITLE = "区块链基础设施"
const DESCRIBE = "聚链集团研发的国产自主可控区块链底层平台以超性能、更安全、高可用、易扩展、强隐私保护、混合型存储等特性更好的支撑企业、政府、产业联盟等行业应用，促进多机构间价值高效流通。趣链区块链底层平台是国内第一批通过工信部标准院与信通院区块链标准测试并符合国家战略安全规划的区块链核心技术平台，在大中型金融机构的技术测评中各项指标均名列第一。"
const CENTER_LIST = [
    {
        icon: imgOne,
        title: '共识',
        content: '采用独立的共识模块，除了支持订制优化的共识算法，还支持通用的PBFT/RAFT/Kafka的共识机制，实现共识的插件化和整体架构的其他模块低耦合，共识算法模块的替换不会影响其他模块',
        image: img1,
        top: '66px',
    },{
        icon: imgTwo,
        title: '性能',
        content: '在共识模块中，在基于Kafka消息的交易排序共识基础上，通过分离交易数据传输有效数据，从而大幅度提高消息的吞吐率，然后引入多个交易流水线同时处理消息，提高消息处理的效率。在节点模块中，对交易处理和验证过程中，增加缓存机制，减少中间数据的磁盘读写。引入完整的验证通道来扩展系统的并发性，使块和交易头验证（包括检查发件人的权限，执行认可策略和语法验证）高度并行化，充分地发挥多核服务器CPU的潜力，使系统支持的TPS达到20000。',
        image: img2
    },{
        icon: imgThree,
        title: '安全',
        content: '提供严格的数据隐私保护机制，保证敏感数据无法被泄露和修改。链上的每一笔交易都会被实时地记录和保存。通过完备的证书体系，支持用户数据安全接入和数据授权。为企业个用户提供安全可靠的数据服务，提供数据的流通的效率。',
        image: img3,
        top: '110px',
    },{
        icon: imgFour,
        title: '扩展',
        content: '完备的智能合约支持，可以支持溯源、存证、供应链、多方的业务协作和数据存储交换等业务场景通过合约上链。同时合约的开发语言支持go/Java/Node.js，方面业务开发快速接入。同时支持多种不同类型的存储，可根据不同的业务类型针对性地选择对应的存储。方便现有的各类中心化系统快速整合接入。',
        image: img4,
        top: '60px',
    },{
        icon: imgFive,
        title: '高可用',
        content: '快速的服务发现机制，客户端可以迅速地发现故障节点并秒级切换到可用节点。对于区块链网络中的节点，每个节点都会有对应的备用节点热备，当主力节点故障后，可以无需主动干预自动切换到备用节点，从而不会影响业务。同时会通过预警机制发出故障通知，方便运维人员快速发现故障节点。',
        image: img5,
        top: '60px',
    },{
        icon: imgSix,
        title: '运维',
        content: '提供丰富的图形页面运维工具，帮助企业轻松配置、部署、管理和监控区块链网络，同时隔离底层技术的复杂性，方便企业专注在区块链上层应用的实现，降低企业在区块链底层的研发和运维成本。平台集成了合约的一站式管理，支持智能合约代码的快速编写、调试和部署。',
        image: img6,
        top: '40px',
      },
]
const TITLE1 = "技术优势"
const BOTTOM_LIST = [
    {
        icon: bottomImg1,
        title: '快速应用构建',
        content: '多模式的账本结构及业务模型，方便快速构建应用'
    }, {
        icon: bottomImg2,
        title: '海量用户支撑',
        content: '高效交易验证和同步，支撑千万甚至亿级用户规模'
    }, {
        icon: bottomImg3,
        title: '可视化操作管理',
        content: '从网络、系统、业务层面提供可视化的运营管理'
    }, {
        icon: bottomImg4,
        title: '隐私权限策略',
        content: '丰富的权限策略配置，依据应用需求进行隐私保护'
    }, {
        icon: bottomImg5,
        title: '内置智能合约',
        content: '支持可编程的合约开发并提供标准化的合约模板'
    }, {
        icon: bottomImg6,
        title: '区块链即服务',
        content: '面向各行业领域，提供可配置企业级区块链云服务'
    }
]
@withRouter
export default class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="product">
                <div className="product-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="product-main">
                    <div className="product-top">
                        <h5>{TITLE}</h5>
                        <div className="product-top-line" />
                        <p>{DESCRIBE}</p>
                    </div>
                    <div className="product-center">
                        {
                            CENTER_LIST.map((item, index) => (
                              <div className="product-centerItem">
                                  {
                                      Number(index) % 2 === 1 ?
                                          <React.Fragment>
                                              <div className="product-centerItem-text">
                                                  <div className="text" style={{ marginTop: item.top }}>
                                                      <img src={item.icon} alt=""/>
                                                      <h4>{item.title}</h4>
                                                      <p>{item.content}</p>
                                                  </div>
                                              </div>
                                              <div className="product-centerItem-img" style={{ marginLeft: '25px' }}>
                                                  <img src={item.image} alt=""/>
                                              </div>
                                          </React.Fragment>
                                          :
                                          <React.Fragment>
                                              <div className="product-centerItem-img" style={{ marginRight: '25px' }}>
                                                  <img src={item.image} alt=""/>
                                              </div>
                                              <div className="product-centerItem-text">
                                                  <div className="text" style={{ marginTop: item.top }}>
                                                      <img src={item.icon} alt=""/>
                                                      <h4>{item.title}</h4>
                                                      <p>{item.content}</p>
                                                  </div>
                                              </div>
                                          </React.Fragment>
                                  }
                              </div>
                            ))
                        }
                    </div>
                    <div className="product-bottom">
                        <h4>{TITLE1}</h4>
                        <ul>
                            {
                                BOTTOM_LIST.map(item => (
                                    <li>
                                        <img src={item.icon} alt="" />
                                        <h5>{item.title}</h5>
                                        <p>{item.content}</p>
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