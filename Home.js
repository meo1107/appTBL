import React, {Component} from 'react';
import {View, Text,StyleSheet, TouchableOpacity, Alert,Button} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ScrollView } from 'react-native-gesture-handler';
export default class HomePage extends Component{
    static navigationOptions =
  {
    title: 'Dach sách',
  };
  

    constructor(props){
        super(props);
        this.state ={ dataSource: [], isLoading: true, refresh: true
        }
    }
    onRefresh (){
        this.setState({refreshing: true});
        fetch('http://10.0.3.2/app/hienthi.php')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson,
                refresh: false
            });
    
        })
    };
    _delete= (IDmas) =>{
        this.setState({isLoading: true});
        fetch('http://10.0.3.2/app/delete.php',{method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mas: IDmas
        })})
        .then((response) => response.json())
        .then((responseJson) =>{
            if(responseJson === 'Successfully.'){
                Alert.alert('xoa');
            }else{
                Alert.alert('khong thanh cong');
            }
        })
        .catch((error)=>{
            console.error(error);
        });
    }  
    
    _update= (IDmas) =>{
        this.setState({isLoading: true});
        fetch('http://10.0.3.2/app/update.php',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mas: IDmas
        })})
        .then((response) => response.json())
        .then((responseJson) =>{
            if(responseJson === 'Successfully'){
                Alert.alert('xoa');
            }else{
                Alert.alert('khong thanh cong');
            }
        })
        .catch((error)=>{
            console.error(error);
        }
    );
    }    
   
    componentDidMount(){
            return fetch('http://10.0.3.2/app/hienthi.php')
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
            <ScrollView>
            <SwipeListView
                data={this.state.dataSource}
                refreshing = {false}
                onRefresh ={()=>this.onRefresh()}
                renderItem={ ({item})=> (
                              
                    <View style={styles.Text}>
                        <Text style={styles.itemText}> 
                            Ten Sach: {item.ts}
                        </Text>
                        <Text style={styles.itemText}> 
                            Tac gia: {item.ttg}
                        </Text>
                        <Text style={styles.itemText}> 
                            Gia: {item.g}
                        </Text>
                                    
                    </View>
                )}
                renderHiddenItem={ ({item}) => (
                    <View style = {{flex:1, flexDirection:'row-reverse', backgroundColor:'red'}}>
                                    
                        <TouchableOpacity onPress= {()=>this._delete(item.key)}>
                            <Text style={styles.item}>XOA</Text>
                                       
                        </TouchableOpacity>
                        <TouchableOpacity  onPress= {()=>this._update(item.key)}>
                            <Text style={styles.item}>SUA</Text>
                                       
                        </TouchableOpacity>
                                    
                    </View>
                )}
                rightOpenValue = {-120}
                            
            />
            <Button title="Them" color="#f194ff" onPress={() =>this.props.navigation.navigate('them')} ></Button>
            </ScrollView>
                        
        )
    }

}
const styles = StyleSheet.create({
    Text:{
        backgroundColor:'yellow', 
        borderBottomWidth: 1, 
        height: 100, 
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
    },
    item: {
        marginTop: 35,
        alignSelf:'flex-end',
        fontWeight: 'bold',
        flex:1, width: 50,
    }
})