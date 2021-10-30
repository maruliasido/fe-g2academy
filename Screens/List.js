import React, { Component } from 'react'
import { ActivityIndicator, FlatList, Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';

export class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            page: 1,
            limit: 15,
            loading: false
        }
    }

    fetchData = async () => {
        try {
            const { limit, page } = this.state
            const nextLoad = (page - 1) * limit

            this.setState({ loading: true })

            const responseTodos = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${nextLoad}`)
            const respJson = await responseTodos.json()
            console.log(respJson);
            this.setState(oldState => {
                if (page == 1)
                    return { todos: respJson, loading: false }

                return { todos: [...oldState.todos, ...respJson], loading: false }
            })
        } catch (e) {
            console.log("Catch:", e);
            this.setState({ loading: false })
        }
    }

    resetPage = () => {
        this.setState({ page: 1 }, this.fetchData)
    }

    triggerNextPage = () => {
        console.log("triggerNextPage");
        this.setState(
            oldState => ({ page: oldState.page + 1 }),
            this.fetchData
        )
    }

    componentDidMount() {
        this.fetchData()
    }

    doSomething = () => {
        Alert.alert("abc")
    }

    renderItem = items => {
        const { item } = items
        return (
            // <TouchableHighlight onPress={this.doSomething.bind(this)}>
                <ListItem bottomDivider onPress={() => Alert.alert("Warning", "Hi, " + item.title)}>
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            // </TouchableHighlight>
        )
    }

    render() {
        // if (this.state.loading)
        //     return <ActivityIndicator />

        return (
            <FlatList
                keyExtractor={(data, idx) => idx.toString()}
                data={this.state.todos}
                renderItem={this.renderItem}
                onRefresh={this.resetPage}
                refreshing={this.state.loading}
                onEndReachedThreshold={0.2}
                onEndReached={this.triggerNextPage}
            />
        );
    }
}

export default List
