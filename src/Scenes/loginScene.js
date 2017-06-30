import React, { Component } from 'react';
import { View, Text } from "react-native";
import {Container, Content, Button, Footer} from "native-base"
import { Actions } from "react-native-router-flux"; 

class LoginScene extends Component {
    render() {
        return (
            <Container style={{backgroundColor:"#2D323B"}}>
                <Content>
                    <View style={{paddingTop:36}}>
                        <Text style={{textAlign:"center", fontSize:48, color:"white"}}>Listy</Text>
                        <Text style={{textAlign:"center", fontSize:24, color:"white"}}>Where lists are made</Text>
                    </View>
                </Content>
                <View style={{ paddingLeft:20, paddingRight:20, paddingBottom: 80}}>
                        <Button success block onPress={Actions.mainFlow}>
                            <Text style={{color:"white",fontSize:18}}>Start making lists!</Text>
                        </Button>
                    </View>
            </Container>
        );
    }
}

export default LoginScene;