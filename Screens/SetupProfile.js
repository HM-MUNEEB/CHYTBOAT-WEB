import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SetupProfile = () => {
  return (
    <View> 
        <View style = {styles.profhead}>
            <View style = {styles.itemsprof}>
                <Text style = {styles.proftext}>Setup your profile</Text>
                <Image 
                    // style = {styles.img}
                    source = {require('../assets/CROSS ICON.png')}
                /> 
            </View>         
        </View>
        <TouchableOpacity>
        <View style = {styles.profimg}>
            <Image source={require('../assets/profpic.png')} />
        </View>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
   profhead: {
       height: '20%',
       width: '100%',
       backgroundColor: 'black',
       justifyContent: 'center',
       alignItems: 'center',
   },
   proftext:  {
       color: 'white',
   },
   itemsprof: {
   }
});
export default SetupProfile