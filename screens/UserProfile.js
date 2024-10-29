import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons';

const UserProfile = () => {
  return (
    <View style={styles.container} >
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.profle}> 
            <Ionicons name='person' size={40} />
          </View>

              <View style={{flexDirection: 'column', padding: 20, gap: 10}}>
                  <View style={styles.nameInfo}>
                    <Ionicons name='text' />
                    <Text style={{opacity: 0.3,  paddingLeft: 10}}>Name</Text>
                  </View>
                  <View style={styles.nameInfo}>
                    <Ionicons  name='home' />
                    <Text style={{opacity: 0.3, paddingLeft: 10}}>Address</Text>
                  </View>
                  <View style={styles.nameInfo}>
                    <Ionicons  name='call' />
                    <Text style={{opacity: 0.3,  paddingLeft: 10}}>Contacts</Text>
                  </View>
              </View> 

          </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    paddingTop: 40

  },
  profle:{
    backgroundColor: "#fff",
    height: 150,
    width: 150,
    borderColor: "#000",
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInfo: {
    backgroundColor: '#fff',
    width: 190, 
    height: 25, 
    borderColor: '#000', 
    borderRadius: 15, 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    }
})