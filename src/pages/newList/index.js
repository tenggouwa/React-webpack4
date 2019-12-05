import React, {Component} from 'react';
import { withRouter } from 'react-router'
import CommonBanner from '../../components/commonBanner/index.js'
import './index.scss'

const newList = [{
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

const BANNER_CONTENT = ['新闻资讯', '了解聚链最新动态']
@withRouter
export default class NewList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="newList">
                <div className="newList-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="newList-main">
                    <ul>
                        {
                            newList.map(item => (
                                <li onClick={() => { window.open(item.link) }}>
                                    <div className="left">
                                        <p>{item.date[0]}</p>
                                        <p>{item.date[1]}</p>
                                    </div>
                                    <div className="right">
                                        <h5>{item.title}</h5>
                                        <p className="right-content">{item.content}</p>
                                        <div>
                                            <p>{item.date[1]}</p>
                                            <p>{item.date[0]}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}