import React, {Component} from 'react';

import './index.scss'

export default class CommonBanner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="commonBanner">
                <div className="commonBanner-main">
                    {
                        this.props.content ?
                            <div>
                                <h2>{this.props.content[0]}</h2>
                                <p>{this.props.content[1]}</p>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}