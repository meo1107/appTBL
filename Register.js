import React, {Component} from 'react';
import {View, TextInput,  Text, TouchableOpacity, Alert} from 'react-native';
export default class RegisterPage extends Component{

    constructor(props){
        super(props);
        this.state={ user_name:'', pass:'', re_pass:''}
    }
    _register =() =>{
        if(this.state.user_name===""){
          Alert.alert('Không được bỏ trống ten tai khoan');
        }else{
            if (this.state.pass===""){
                Alert.alert('Không được bỏ trống mat khau');
            }else{
                if(this.state.pass !== this.state.re_pass){
                    Alert.alert('Mat khau khong trung khop');
                }else{
                    fetch('http://10.0.3.2/insert.php', {method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: this.state.user_name,
                        pass: this.state.pass,
                        re_pass: this.state.re_pass
                    })})
                    .then((response) => response.json())
                    .then((response) =>{
                        if(response ==='Thanhcong'){
                            Alert.alert('Dang ky thanh cong!');
                            this.props.navigation.navigate("Login");
                        }else{
                            Alert.alert('Tai khoan da ton tai');
                        }   
                    })
                }
            }
        }
    }
        

    render(){
        return(
            <View style={ styles.container}>
                <View style = {styles.registerForm}>
                <TextInput style= {styles.input}
                    placeholder = "Enter your name"
                    returnKeyType = "next"
                    onSubmitEditing ={() => this.emailInput.focus()}
                    onChangeText={user_name => { this.setState ({user_name})}}
                    value={this.state.user_name}
                />
                <TextInput style= {styles.input}
                    placeholder = "Enter password"
                    returnKeyType = "next"
                    autoCapitalize = "none"
                    secureTextEntry 
                    ref = {(input) => this.passwordInput = input}
                    onChangeText={pass => { this.setState ({pass})}}
                    value={this.state.pass}
                />
                <TextInput style= {styles.input}
                    placeholder = "Enter re_password"
                    returnKeyType = "go"
                    secureTextEntry 
                    ref = {(input) => this.passwordInput = input}
                    onChangeText={re_pass => { this.setState ({re_pass})}}
                    value={this.state.re_pass}
                />
                <TouchableOpacity style = {styles.buttomContainer} 
                onPress= {() => this._register()}>
                    <Text style = {styles.bottomText}> Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('Login')}>
                    <Text style= {styles.bottomText}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = ({
    container:{
        padding: 20,
        flex : 1,
        backgroundColor: "#ecf0f1",
        justifyContent: "center",
        alignItems:"stretch"
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        fontSize: 25,
        backgroundColor: "white",
        borderWidth: 1,
        marginBottom: 20,
        color: "#110000"
    },
    buttomContainer:{
        borderRadius: 50,
        backgroundColor: "#1abc9c",
        paddingVertical: 10,
        justifyContent: "center"
    },
    bottomText: {
        textAlign:"center",
        color:"#110000",
        fontSize: 20
    }
})