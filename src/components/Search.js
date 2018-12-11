import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {

    constructor(props) {
        super(props);
    
    }

    render() {
        return(
                <View style={styles.containerSaerch}>
                    <Icon
                        name="search"
                        size={18}                
                        style={styles.iconSearch}                         
                        />
                    <TextInput                             
                        placeholder='Busque su Pokemon...'
                        placeholderTextColor='gray'
                        underlineColorAndroid="transparent"
                        style={styles.inputSearch}
                        onChangeText={this.props.handleSearch}

                        />                   
                </View>
                );
    }

}

const styles = StyleSheet.create({
    containerSaerch: {
        flexDirection: 'row',
        borderColor: '#388E3C',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 10,
        marginVertical: 10
    },
    iconSearch: {
        marginTop: 12,
        marginLeft: 12,
        marginRight: 4
    },
    inputSearch: {
        flex: 1,
        height: 42,
        fontSize: 14,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 4
    },

});