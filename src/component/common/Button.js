import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = ({onPress,title}) =>{
    const{
        buttonStyle,
        textStyle
    } = styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor: '#8080ff',
        borderRadius:15,
        borderWidth:1,
        borderColor: '#00004d',
        marginLeft:5,
        marginRight:5

    }
};

export {Button};