import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo } from 'react';
import { Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import styles from './styles'


function HomeScreen({navigation}) {

  const accessKey = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

  const [photos, setPhotos] = useState([])
  
  const upload = async () => {
    const url = `https://api.unsplash.com/photos/random?count=5&client_id=${accessKey}`;
    const response = await fetch(url, { method: "get" });
    const res = await response.json();
    
    res.map(i => {
      setPhotos(prev => [...prev, 
        <View style={styles.items} key={i.id}>
          <TouchableOpacity activeOpacity = { .5 } onPress={() => {navigation.navigate('Photo', {link: i.urls.regular})}}>
            <Image source={{uri: i.urls.regular}} style={styles.photos}/>
          </TouchableOpacity>
          <Text style={styles.name}> "{i.alt_description != null ? i.alt_description.slice(0, 1).toUpperCase() + i.alt_description.slice(1) : 'Nameless picture'}"</Text>
          <Text style={styles.authors}>{i.user.name}</Text> 
        </View>]
      )
    })
  }
  const fetchingPhotos = useMemo(() => upload(), [])

  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Discover world of photos</Text>
      </View>
      <View style={styles.container}>  
        <ScrollView>
          {photos}
          <Button
          title="Get more photos"
          onPress={upload}
          />
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
  
  export default HomeScreen