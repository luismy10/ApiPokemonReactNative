
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class Box extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate("Description", { key: this.props.id })}>
                        <Image resizeMode="contain" source={{ uri: this.props.img }}
                            style={{ width: 120, height: 120 }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerDescription}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                        <Icon name='heart' color='rgb(97,97,97)' size={16} />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                marginTop: 4,
                                color: 'rgb(126,126,126)'
                            }}>
                            N° {this.props.num}
                        </Text>
                        <Text
                            style={{
                                marginTop: 4,
                                color: 'black',
                                fontSize: 20,
                                fontWeight: '100'
                            }}>
                            {this.props.name}
                        </Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        borderColor: '#1976D2',
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    containerImage: {
        flex: 1,
        backgroundColor: '#1976D2',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    containerDescription: {
        height: 'auto',
        backgroundColor: 'transparent',
        paddingLeft: 10,
        marginBottom: 10,
    },

});



