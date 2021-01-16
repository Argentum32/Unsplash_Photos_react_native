import React from 'react';
import { Image, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles'

function FullScreenPhoto({ route, navigation }){

  let {link} = route.params

  return (
    <View style={styles.full}>
      <TouchableOpacity style={styles.btnBack}>
        <Button color='silver' title="<<  back" onPress={() => navigation.goBack()} />
      </TouchableOpacity>
      <View>
        <Image source={{uri: link}} style={styles.imageContainer} />
      </View>
    </View>
  )
}

export default FullScreenPhoto