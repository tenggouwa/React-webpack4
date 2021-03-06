import React, {Component} from 'react';
import { withRouter } from 'react-router'
import erCode from '../../assets/img/footer/erweima.png'
import erCode1 from '../../assets/img/footer/erweima1.png'
import './index.scss'

const friendLink = [{
    name: '银山软件',
    link: 'http://www.yessoft.com/#/home',
}, {
    name: '域名商城',
    link: 'http://www.mixname.com/#/home'
}, {
    name: '聚空间',
    link: 'http://www.juspace.com/'
}, {
    name: '炒米网',
    link: 'https://www.chaomi.cc/'
}, {
    name: '比特币交易网',
    link: 'https://www.btctrade.com/'
}]
const FOOTER_PRODUCT = [
    {
        name: '区块链基础服务',
        path: '/product'
    }, {
        name: '创业项目孵化',
        path: '/business'
    }, {
        name: '区块链产业基金',
        path: '/fund'
    }
]
const FOOTER_DEPOSIT = [
  {
      name: '数字存证',
      path: '/deposit'
  }
]
const FOOTER_NEWS = [
  {
      name: '新闻资讯',
      path: '/newList'
  }
]

const FOOTER_ABOUT = [
  {
      name: '公司简介',
      path: '/company'
  }, {
      name: '联系我们',
      path: '/contentUs'
  }
]
@withRouter
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    jumpLink = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-main">
                        <div className="footer-left">
                            <p className="footer-leftLine">
                                <i className="iconfont iconkefu" />
                                投资服务：
                                010-88911388
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <i className="iconfont iconshijian-" />
                                服务时间：
                                周一到周五
                            </p>
                            <p className="footer-leftLine">
                                产品与服务：
                                {
                                    FOOTER_PRODUCT.map(item => (
                                        <span key={item.name} onClick={() => { this.jumpLink(item.path) }}>
                                            {item.name}
                                        </span>
                                    ))
                                }
                            </p>
                            <p className="footer-leftLine">
                                解决方案：
                                {
                                    FOOTER_DEPOSIT.map(item => (
                                        <span key={item.name} onClick={() => { this.jumpLink(item.path) }}>
                                            {item.name}
                                        </span>
                                    ))
                                }
                            </p>
                            <p className="footer-leftLine">
                                新闻资讯：
                                {
                                    FOOTER_NEWS.map(item => (
                                        <span key={item.name} onClick={() => { this.jumpLink(item.path) }}>
                                            {item.name}
                                        </span>
                                    ))
                                }
                            </p>
                            <p className="footer-leftLine">
                                关于我们：
                                {
                                    FOOTER_ABOUT.map(item => (
                                        <span key={item.name} onClick={() => { this.jumpLink(item.path) }}>
                                            {item.name}
                                        </span>
                                    ))
                                }
                            </p>
                            <p className="footer-leftLine">
                                Copyright 2017-2020 ALL Rights Reserved.Powered by
                            </p>
                            <p className="footer-leftLine">
                                北京聚链时代科技集团股份有限公司
                            </p>
                            <p className="footer-leftLine">
                                股票代码: 430361
                            </p>
                        </div>
                        <div className="footer-right">
                            <div className="footer-rightImgs">
                                <img src={erCode} alt=""/>
                                <img src={erCode1} alt=""/>
                            </div>
                            <p>微信联系我们</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom" >
                    <ul>
                        <li>友情链接: </li>
                        {
                            friendLink.map(item => (
                                <li
                                    key={item.name}
                                    onClick={() => { window.open(item.link) }}
                                >
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}