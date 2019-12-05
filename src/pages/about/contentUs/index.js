import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { Map, Marker } from 'react-amap';
import CommonBanner from '../../../components/commonBanner/index.js'
import './index.scss'

const BANNER_CONTENT = ['联系我们', '了解聚链、牵手聚链、走进聚链']
@withRouter
export default class ContentUs extends Component {
    constructor(props) {
        super(props);
        this.position = {
          longitude: 116.425308,
          latitude: 40.036672
        }
    }
    render() {
        return (
            <div className="contentUs">
                <div className="contentUs-banner">
                    <CommonBanner content={BANNER_CONTENT} />
                </div>
                <div className="contentUs-main">
                    <div className="contentUs-line">
                      <p>公司名称: </p>
                      <p>北京聚链时代科技集团股份有限公司</p>
                    </div>
                    <div className="contentUs-line">
                      <p>公司网址: </p>
                      <p className="active">http://www.juchaintimes.com</p>
                    </div>
                    <div className="contentUs-line">
                      <p>商务合作: </p>
                      <p className="active">010 - 82816692</p>
                    </div>
                    <div className="contentUs-line">
                      <p>联系邮箱: </p>
                      <p className="active">swhe@juchaintimes.com               hr@juchaintimes.com</p>
                    </div>
                    <div className="contentUs-line">
                      <p>公司地址: </p>
                      <p>北京市朝阳区双营路26号北苑大酒店4层</p>
                    </div>
                    <div className="contentUs-address" >
                        <Map zoom={15} center={this.position}>
                            <Marker position={this.position} />
                        </Map>
                    </div>
                    {/* <img className="contentUs-address" src={} alt=""/> */}
                </div>
            </div>
        )
    }
}