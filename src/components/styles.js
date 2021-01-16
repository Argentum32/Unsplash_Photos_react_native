import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
      paddingTop: 20,
      paddingBottom: 150
    },
    items: {
      justifyContent: 'space-around',
      padding: 6,
      margin: 2,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#daede7'
    },
    photos: {
      width: '100%', 
      height: 159
    },
    name: {
      padding: 4,
      fontSize: 15
    },
    authors: {
      fontStyle: 'italic',
      padding: 4,
      fontSize: 14
    },
    navbar: {
      height: 70,
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#233742',
      paddingBottom: 10
    },
    navbarText: {
      color: 'white',
      fontSize: 20
    },
    full: {
      backgroundColor: '#f0f0f0',
    },
    imageContainer: {
      marginTop: 20,
      resizeMode: "stretch",
      width: '105%', 
      height: '90%',
      alignContent: 'center',
      justifyContent: 'center'
    },
    btnBack: {
      marginLeft: 5,
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }
  })

  export default styles