import { View, StyleSheet, Image} from "react-native";
import { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";

const Card = (props) => {
  const {imageUrl, title, date} = props
  

  return(
    <View style={styles.ctImages}>
    
      <View style={styles.ctContent}>
        <Image source={{ uri: imageUrl }} style={styles.Image}/>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
      
    </View>

  )
}

const styles = StyleSheet.create({
  textTitle:{
    fontFamily: 'AveriaLibre-Regular',
    color: '#419ED7',
    fontSize: 20
  },
  textDate:{
    fontFamily: 'AveriaLibre-Regular',
    color: '#CAC6C5',
    fontSize: 15
  },
  ctContent:{
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5
  },
  ctImages:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  Image:{
    width: 150,
    height: 100,
    //backgroundColor: 'red'
    
  }
})

export default Card