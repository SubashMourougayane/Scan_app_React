import React from 'react';
import { AppRegistry,StyleSheet, Text, View ,Button,Alert,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker'
import EditText from './MyComponents/EditText';
export default class App extends React.Component
{

    _onPressButton(event){
      Alert.alert("Bowww");
    }

    render()
    {
        return (
            <View style = {styles.container}>
                  <Text style = {styles.appname} >
                      HELOOOOOOOOOOOO
                  </Text>
                  <EditText>
                    message = "Email ID"
                  </EditText>
                  <EditText>
                    message = "Password"
                  </EditText>
                  <MyButton>
                    message = "Login"
                  </MyButton>


            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appname:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#ffffff',
    margin: 20,
  },


});
AppRegistry.registerComponent('Scan_App', () => App);
