import React, {Component} from 'react';
import { withRouter } from 'react-router'

import CommonBanner from '../../components/commonBanner/index.js'
import Img1 from '../../assets/img/deposit/1.png'
import Img2 from '../../assets/img/deposit/2.png'
import './index.scss'

const BANNER_CONTENT = ['数字存证', '去伪存真构建信任机制']
const DESC = "金融、保险、支付、医疗、健康、公益、物流、制造、数据和资产交易等诸多业务中，大量的合同、票据、交易凭证、交收文本由特定机构进行中心化管理和存储，由此带来内容篡改和重复质押 等社会问题，页隐藏着信息不对称和业务不透明等潜在危机、利用区块链技术分布式高可用、公开透明、不可篡改、信息安全等技术特性打造的数字存证平台，具有适用面广、防伪防篡改能力强等优点。"
@withRouter
export default class Deposit extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="deposit">
                <div className="deposit-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="deposit-main">
                    <h4 className="deposit-title">方案简介</h4>
                    <p>{DESC}</p>
                    <img className="img1" src={Img1} alt=""/>
                </div>
                <div className="deposit-main">
                    <h4 className="deposit-title">"业务板块"</h4>
                    <img className="img2" src={Img2} alt=""/>
                </div>
            </div>
        )
    }
}