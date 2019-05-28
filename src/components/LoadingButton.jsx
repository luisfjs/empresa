import React from 'react'

import If from './If'

export default props =>
    <button className={`m-1 btn ${props.color}`} type={props.type} disabled={props.isLoading}>
        <If test={props.isLoading}>
            <i className="fas fa-circle-notch fa-spin right"></i>{props.label}
        </If>
        <If test={!props.isLoading && props.icon}>
            {props.label}
            <i className={props.className}>{props.icon}</i>
        </If>
    </button>