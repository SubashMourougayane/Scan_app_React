import React from 'react';
import { AppRegistry,View ,TextInput,StyleSheet} from 'react-native';
export default class EditText extends React.Component
{
    render()
    {
        return (
            <View style = {styles.container}>
                  <TextInput
                      style = {styles.textinp}
                        placeholder = "Email ID"
                      placeholderTextColor = '#000000'
                      underlineColorAndroid = '#ffffff'
                  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  textinp:{
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 15,
    backgroundColor: '#fafafa',
    height: 50,
    width:300,
  },
});
AppRegistry.registerComponent('EditText', () => EditText);
