import React, {Component} from 'react';
import {View, Text,StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native';
export default class AddPage extends Component{
    static navigationOptions = {
     title: 'Form Them Sach',
    };
 
    constructor(props) {
    
        super(props);
        this.state = {
            tens:'',
            tloai:'',
            matg:'',
            gia:''
        }
    
    }
    themtt =() =>{
        fetch('http://10.0.3.2/app/insertdb.php', {method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tens: this.state.tens,
                        tloai: this.state.tloai,
                        matg: this.state.matg,
                        gia: this.state.gia
                    })})
                    .then((response) => response.json())
                    .then((responseJson) =>{
                        if(responseJson ==='Successfully'){
                            Alert.alert('Them thanh cong!');
                             this.props.navigation.navigate("Home");
                        }else{
                            Alert.alert('Them that bai');
                        }   
                    })
                    .catch((error)=>{
                        console.error(error);
                    });
    }
    render(){
        return(
            <View style={styles.MainContainer}>
            
                <TextInput
                        
                    placeholder="Nhap ten sach"
                
                    onChangeText = {(tens)=> this.setState({tens})}
                
                    underlineColorAndroid='transparent'
                
                    style={styles.TextInputStyleClass}

                    value={this.state.tes}
                />
                
                <TextInput
                        
                    placeholder="Nhap the loai"
                
                    onChangeText = {(tloai)=> this.setState({tloai})}
                
                    underlineColorAndroid='transparent'
                
                    style={styles.TextInputStyleClass}

                    value={this.state.tloai}
                />
                
                <TextInput
                        
                    placeholder="Nhap ma tac gia"
                
                    onChangeText = {(matg)=> this.setState({matg})}
                
                    underlineColorAndroid='transparent'
                
                    style={styles.TextInputStyleClass}

                    value={this.state.matg}
                />
                
                <TextInput
                
                    placeholder="Nhap gia"
                
                    onChangeText = {(gia)=> this.setState({gia})}
                
                    underlineColorAndroid='transparent'
                
                    style={styles.TextInputStyleClass}

                    value={this.state.gia}
                />
            
                <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={() =>this.themtt()}>
            
                    <Text style={styles.TextStyle}> THEM </Text>
            
                </TouchableOpacity>
            
            </View>
        )
    }
}
const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'
   
    },
   
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#00BCD4'
   
    },
   
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
   
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }
   
  });