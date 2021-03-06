import React, {Component} from 'react';
import { withRouter } from 'react-router'

import ProductImg from '../../assets/img/header/product.png'
import ExchangeImg from '../../assets/img/header/exchange.png'
import AboutImg from '../../assets/img/header/about.png'
import Logo from '../../assets/img/home/logo.png'
import './index.scss'

const headerList = [
  {
      name: '首页',
      path: '/'
  },
  {
      name: '产品服务',
      path: '',
      icon: ProductImg,
      dataList: [{
          name: '区块链基础服务',
          path: '/product',
      }, {
          name: '创业项目孵化',
          path: '/business',
      }, {
          name: '区块链产业基金',
          path: '/fund',
      }]
  },
  {
      name: '解决方案',
      path: '',
      icon: ExchangeImg,
      dataList: [{
          name: '数字存证',
          path: '/deposit',
      }]
  },
  {
      name: '新闻资讯',
      path: '/newList',
  },
  {
      name: '关于我们',
      path: '',
      icon: AboutImg,
      dataList: [{
          name: '公司简介',
          path: '/company',
      }, {
          name: '联系我们',
          path: '/contentUs',
      }, {
          name: '加入我们',
          path: '/addUs',
      }]
    //   , {
    //     name: '发展大事记',
    //     path: '/develop',
    // }, 
  }
]
@withRouter
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRouter: null
        }
    }
    componentDidMount() {

    }
    jumpLink = (item) => {
        if (item.path !== '') {
            this.props.history.push(item.path)
            this.setState({ activeRouter: null })
        }
    }
    jumpLink1 = (item) => {
            this.props.history.push(item.path)
            this.setState({ activeRouter: null })
    }
    showPop = (item) => {
        if (item.path === '') {
            this.setState({ activeRouter: item.name })
        }
    }
    hidePop = (item) => {
        if (item.path === '') {
            this.setState({ activeRouter: null })
        }
    }
    // 选择子标签，展示父标签选中状态
    chooseRouter = (item) => {
        let status = false
        const { pathname } = this.props.location
        // path有的时候，说明是第一级标签，没有子元素
        if (item.path && item.path === pathname) {
            status = true
        } else if (item.path === '') {
            // 在下一级找，有相等的路径，就说明在这里
            const array = item.dataList.filter(cat => cat.path === pathname)
            if (array && array.length > 0) {
                status = true
            }
        }
        return status
    }
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <div className="logo" onClick={() => { this.props.history.push('/') }}>
                        <img src={Logo} alt=""/>
                        <span>聚链集团</span>
                    </div>
                    <div className="gupiao" onClick={() => { this.props.history.push('/') }}>
                        <div>
                            <p>股票代码</p>
                            <span>430361</span>
                        </div>
                    </div>
                    <ul>
                        {
                            headerList.map(item => (
                                <li
                                    key={item.name}
                                    // className={(this.props.location.pathname === item.path) && item.path !== '' ? 'active' : null }
                                    className={this.chooseRouter(item) ? 'active' : null }
                                    onClick={() => { this.jumpLink(item) }}
                                    onMouseEnter={() => { this.showPop(item) }}
                                    onMouseLeave={() => { this.hidePop(item) }}
                                >
                                    {item.name}
                                    {
                                        this.state.activeRouter === item.name ?
                                            <div className="header-pop">
                                                <div className="title">
                                                    <img src={item.icon} alt=""/>
                                                    {item.name}
                                                </div>
                                                <div className="content">
                                                    {
                                                        item.dataList.map(cat => (
                                                            <p
                                                                onClick={() => { this.jumpLink1(cat) }}
                                                                className={cat.path === this.props.location.pathname ? 'activeP' : null}
                                                            >
                                                                {cat.name}
                                                            </p>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            :
                                            null
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}