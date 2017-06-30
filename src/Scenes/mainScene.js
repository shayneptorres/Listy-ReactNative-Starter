import React, { Component } from 'react';
import { Container,
    Content,
    Header,
    Body,
    Title,
    View,
    Text,
    List,
    ListItem,
    Button,
    Form,
    Item,
    Input } from "native-base";
import { observer } from "mobx-react/native";

@observer
class MainScene extends Component {
    constructor(props){
        super(props)
        state={
            itemName:""
        }
    }

    renderList(){
        return (
            this.props.store.list.map((item, index) =>
                <ListItem key={index}>
                    <Text style={{color:"white"}}>{item}</Text>
                </ListItem>
            )
        )
    }

    addNewItem(item){
        if (item){
            this.props.store.addItem(item)
            this.setState
            console.log(this.refs)
        }
    }

    render() {
        return (
            <Container style={{ backgroundColor:"#212121" }}>
                <Header style={{backgroundColor:"#2A2A2B"}}>
                    <Body>
                        <Title style={{color:"white"}}>
                            Your List
                        </Title>
                    </Body>
                </Header>
                <Form>
                    <Item last>
                        <Input
                        ref={ (c) => this._input = c }
                        autoFocus
                        placeholder="Enter item name"
                        style={{color:"white"}}
                        onChangeText={(text) => {this.setState({itemName:text})}}
                        
                         />
                    </Item>
                </Form>
                <Button success full onPress={() =>
                    this.addNewItem(this.state.itemName)}
                    >
                    <Text>Add item</Text>
                </Button>
                <Content>
                    <View>
                        <List>
                            {this.renderList()}
                        </List>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default MainScene;