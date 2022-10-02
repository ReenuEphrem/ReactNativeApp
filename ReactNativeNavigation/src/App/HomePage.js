import React,{Component} from "react";
import {View, StyleSheet,Text, FlatList } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class HomePage extends Component{


    render(){
      
        return(
        <View style={styles.container}> 
       <View style={{flexDirection:"row"}}>
       <Icon name="menu" style={styles.menu} onPress={()=>this.props.navigation.navigate('Drawer')} />
       <View style={styles.rectview}>
       <View style={{flexDirection:"row"}}> 
       <Icon name="circle" color="green"  />
       <Text style={{fontSize :10 ,color :"lightgreen" , marginLeft : 10}}>Classes</Text>
       </View>
       </View>
       </View>
       <View style={styles.divider}></View>
       <Text style={styles.subtext}>Good Morning</Text>
        <Text style={styles.textView}>Ivana</Text>
        <View style={styles.classview}>
          <Text style={styles.classtext}>Class</Text>
          <View style={{flexDirection:"row"}}> 
          <Text style={styles.classtext1}>Plus Two Science</Text>
          <Icon  name="expand-more" color="white" style={styles.dropdown}/>
         </View>
        </View>
        <FlatList contentContainerStyle ={{paddingright:1, marginTop:20,marginLeft :20 }}  horizontal={true}
data={[
{key: 'Biology'},{key: 'Physics'},{key: 'Chemistry'}
]}

renderItem={({item}) =>
<View style={styles.rectlistview}>
<View style={{flexDirection:"row"}}> 
<Icon name="circle" color="green"  />
<Text style={{fontSize :10 ,color :"black" , marginLeft : 10}}>{item.key}</Text>
</View>
</View>
}
/> 
               </View>

        )
    }
}

const styles = StyleSheet.create({
   
      container : {
      height :'100%',
      width :'100%',
      backgroundColor:'white'
    },
    
    textView :{
      fontSize :20,
      fontWeight:"bold",
      marginLeft :30,
      color:'black'
      
    },
    subtext :{
      fontSize :10,
      marginTop:40,
      marginLeft :30,
      color:'black'
      
    },
    divider :{
  
      height:1,
      marginTop:10,
      backgroundColor:"lightgray"
    },
    rectview:{
      width:'25%',
      height:30,
      borderWidth:1,
      borderColor:'lightgreen',
      marginTop:10,
      marginLeft :200,
      marginRight:5,
      borderRadius:5,
      paddingLeft :10,
      paddingRight:10,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor:'white'
    },
    menu :{
      color:"lightgreen",
      fontSize :30,
      marginTop :10,
      marginLeft :10
    },
    classview:{
      width:'85%',
      height:80,
      borderWidth:1,
      marginTop:30  ,
      marginLeft :20,
      borderRadius:2,
      backgroundColor:'black'
    },
    classtext:{
      color:'gray',
      paddingLeft:10,
      paddingTop:10
    },
    classtext1:{
      color:'white',
      paddingLeft:10,
      marginTop:5,
      paddingBottom:10,
      fontSize:15
    },
    dropdown:{
      height:10,
      width:10,
      marginTop:10,
      marginLeft :120,
      backgroundColor:"black"
    },
    rectlistview:{
      width:"60%",
      height:30,
      borderWidth:1,
      borderColor:'black',
      borderRadius:5,
      paddingLeft :5,
      paddingRight:5,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor:'white'
    },
    
  })
  