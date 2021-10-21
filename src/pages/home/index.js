import React, { Component } from 'react'
// import { connect } from 'react-redux'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <p>Welcome to User CRUD Application</p>
                <p>{this.props.valueRedux}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        valueRedux: state
    }
}

// export default connect(mapStateToProps)(Home)