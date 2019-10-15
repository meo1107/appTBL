import React, {Component} from 'react';
import {View, TextInput,  Text, TouchableOpacity, Alert} from 'react-native';
export default class LoginPage extends Component{


    constructor(props){
        super(props);
        this.state={ user_name:'', pass:''}
    }
    _login= () =>{
            return fetch('http://10.0.3.2/app/login.php', {method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },  
                    body: JSON.stringify({
                        user_name: this.state.user_name,  
                        pass: this.state.pass
                    })})
                    .then((response) => response.json())
                    .then((response)=>{
                        if(response === 'sucess'){
                        //    console.warn(response);
                            Alert.alert('Dang nhap thanh cong');
                            this.props.navigation.navigate("Home");
                        }else{
                            Alert.alert('Tai khoan khong ton tai');
                        }
                        
                    })
                    .catch((error)=>{
                        console.error(error);
                    });
                    
        }
    

    render(){
        return(
            <View style={ styles.container}>
                <View style = {styles.registerForm}>
                <TextInput style= {styles.input}
                    placeholder = "Username"
                    returnKeyType = "next"
                   // onSubmitEditing ={() => this.passwordInput.focus()}
                    onChangeText = {(user_name)=> this.setState({user_name:user_name})}
                    autoCapitalize = "none"
                />
                <TextInput style= {styles.input}
                    placeholder = "Enter password"
                    returnKeyType = "go"
                    secureTextEntry 
                    ref = {(input) => this.passwordInput = input}
                    
                    onChangeText = {(pass)=> this.setState({pass:pass})}
                />
                <TouchableOpacity style = {styles.buttomContainer} onPress ={() =>this._login()}>
                    <Text style = {styles.bottomText}> Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('Register')}>
                    <Text style= {styles.bottomText}>Register Here</Text>
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
        color: "black"
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