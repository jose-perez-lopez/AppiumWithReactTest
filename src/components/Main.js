import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi.</Text>
      </View>
    );
  }
}




export {Main};

