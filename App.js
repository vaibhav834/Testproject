import { Button, StyleSheet, View ,Text} from "react-native"
import React, { useState } from "react"
export default function App(){
  const [value,setValue] = useState(0)
  const pressed =()=>{
    setValue(value+1)
  }
  return(
    <>
      <View style={styles.container}>
        <Button title=" click me" onPress={pressed}/>
        <Text>{value}</Text>
      </View>
    <View style={styles.container1}/>
    <View style={styles.container2}/>
    <View style={styles.container3}/>
    </>
  )
}
const styles =StyleSheet.create({
  container:{
    flex:0.5,
    backgroundColor:"pink",
    alignItems:"center",
    justifyContent:"center"
  },
  container1:{
    flex:0.2,
    backgroundColor:"yellow"
  },
  container2:{
    flex:0.2,
    backgroundColor:"green"
  },
  container3:{
    flex:0.1,
    backgroundColor:"blue"
  }
})