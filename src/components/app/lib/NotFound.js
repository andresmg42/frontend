import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class NotFound extends Component {
    render() {
        return (
            <Redirect to="/"/>
        )
    }
}
