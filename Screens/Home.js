import React, { Component } from 'react'
import { View, StyleSheet,Text } from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDate: new Date()
        }
    }


    render() {
        return (
            <View>
                <Text>
                    abc
                </Text>
            </View>
        )
    }

}

