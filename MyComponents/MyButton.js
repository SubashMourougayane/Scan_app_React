import React from 'react';
import { AppRegistry,View ,Button,StyleSheet} from 'react-native';
export default class MyButton extends React.Component
{


    render()
    {
        return (
            <View style = {styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    <Text style = {styles.buttext}> {this.props.message} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
button: {
 height: 50,
 width: 200,
 alignItems: 'center',
 backgroundColor: '#004c8c',
 padding: 10,
 borderRadius: 15,

},
buttext:{
 color:'#ffffff',
 fontSize: 15,
}

});
AppRegistry.registerComponent('MyButton', () => MyButton);
