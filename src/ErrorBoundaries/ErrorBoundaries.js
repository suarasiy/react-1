import React, { Component } from 'react';

// That only happens during development mode
// Once built for production and ship to the real server
// Instead get this error 'ErrorBoundaries'

// this doesn't mean you should cluster your whole application
// with ErrorBoundaries. Only use them when it makes sense

// Only use them if you know that code may make fail

// nice tools for production

class ErrorBoundaries extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>{this.state.errorMessage}</h1>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundaries;