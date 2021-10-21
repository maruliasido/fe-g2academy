import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Login, UserPage, Update, Register,UserDetail } from "../pages"

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    logout = (toFalse) => {

    }

    regisTrigger = (newUser) => {

    }


    updateTrigger = (updatedData) => {

    }


    deleteTrigger = (indexFromUserPage) => {

    }

    changeContentToRegis = () => {

    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/login"
                    children={
                        (props) => <Login {...props}/>
                    }
                />
                <Route path="/register"
                    children={
                        (props) => <Register {...props}/>}
                />

                {/* prime */}
                <Route path="/control-panel"
                    children={
                        (props) => <UserPage {...props}
                        />
                    }
                />

                <Route path="/user/:idUser"
                    children={
                        (props) => <UserDetail {...props}

                        />
                    }
                />
                <Route path="/user"
                    children={
                        (props) => <UserDetail {...props}

                        />
                    }
                />
                <Route path="/update-user"
                    children={
                        (props) => <Update {...props}
                        />
                    }
                />

            </Switch>
        )

    }
}
