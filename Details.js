import React, {Component} from 'react';
import {View, Text,StyleSheet, TouchableOpacity, Alert,Button, FlatList} from 'react-native';
export default class DetailsPage extends Component{
    static navigationOptions =
  {
    title: 'TAT CA SACH'
  };
    constructor(props){
        super(props);
        this.state ={ isLoading: true
        }
    }
    componentDidMount(){
        return fetch('https://files.000webhost/hienthisach.php')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            });
    
        })
        .catch((error)=>{
            console.error(error);
        });
    }

    render(){
        return(
            <FlatList
                data={this.state.dataSource}
                renderItem={ ({item})=> (
                              
                    <View style={styles.Text}>
                        <Text style={styles.itemText}> 
                            {item.ts}
                        </Text>
                                    
                    </View>
                )}
                keyExtractor={item => item.key}
            />
        )}
}
const styles = StyleSheet.create({
    Text:{
        backgroundColor:'yellow', 
        borderBottomWidth: 1, 
        flex: 1, 
        flexDirection:'column',
        
    },
    itemText:{
        justifyContent:'flex-start',
        fontSize:20, 
        alignItems:'center',
        marginTop: 5, 
        marginLeft: 15,
        fontFamily: 'bold'
    }
})