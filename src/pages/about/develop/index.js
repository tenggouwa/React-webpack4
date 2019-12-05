import React, {Component} from 'react';
import { withRouter } from 'react-router'
import CommonBanner from '../../../components/commonBanner/index.js'
import './index.scss'

const BANNER_CONTENT = ['发展大事记', '了解聚链、牵手聚链、走进聚链']
const DEVELOP_LIST = [
    {
        year: '2019',
        data: [
            {
                mon: '9月',
                text: '获得红杉资本A轮投资',
            }, {
                mon: '8月',
                text: '招商银行金融联盟区块链基础服务平台项目',
            }, {
                mon: '6月',
                text: '深圳泽金金服区块链供应链金融系统',
            }, {
                mon: '2月',
                text: '浙江金融资产交易中心区块链产品发行审合系统',
            }
        ]
    }, {
        year: '2018',
        data: [
            {
                mon: '9月',
                text: '浪潮集团区块链健康医疗系统',
            }, {
                mon: '8月',
                text: '民生银行基于区块链的国内信用证项目',
            }, {
                mon: '6月',
                text: '获得美国中经合集团、多维资本Pre-A轮投资',
            }, {
                mon: '2月',
                text: '香港交易所区块链私募股权交易系统',
            }, {
                mon: '1月',
                text: '获得美国中经合集团、多维资本Pre-A轮投资',
            }
        ]
    }, {
        year: '2017',
        data: [
            {
                mon: '3月',
                text: '兴业银行区块链防伪平台项目',
            }, {
                mon: '1月',
                text: '聚链集团成立',
            }
        ]
    }
]
@withRouter
export default class Develop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="develop">
                <div className="develop-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="develop-main">
                    {
                      DEVELOP_LIST.map(list => (
                          <ul key={list.year}>
                              <li className="first">{list.year}</li>
                              {
                                  list.data.map(item => (
                                      <li>
                                          <p className="circle" />
                                          <span>{item.mon}</span>
                                          <p className="text">{item.text}</p>
                                      </li>
                                  ))
                              }
                              
                          </ul>
                      ))
                    }
                </div>
            </div>
        )
    }
}