import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, NetInfo } from 'react-native';
import IconIoni from 'react-native-vector-icons/Ionicons';
import GridView from 'react-native-super-grid';
import Box from './Box';
import Search from './Search';


export default class Principal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pokemon: [],
            url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
            error: false,
            connected: true
        }
        this.arrayholder = [];

       


    }

    handleConnectivityChange = () => {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (isConnected) {
                this.setState({ connected: true });
            } else {
                this.setState({ connected: false });
            }
        });
        this.getPokemon();
    }

    static navigationOptions = {
        headerStyle: { backgroundColor: '#388E3C' },
        headerLeft:
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                <TouchableOpacity style={{ marginRight: 30 }}
                    onPress={() => alert("hola2")}>
                    <IconIoni
                        name="md-menu"
                        size={32}
                        color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Pokedex</Text>
            </View>
    }

    componentDidMount() {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (isConnected) {
                this.setState({ connected: true });
            } else {
                this.setState({ connected: false });
            }
        });
        this.getPokemon();
    }

    componentWillUnmount() {

    }

    getPokemon = () => {
        this.setState({ loading: true });
        fetch(this.state.url).then(res => res.json())
            .then(res => {
                this.setState(
                    {
                        pokemon: res.pokemon,
                        loading: false
                    });
                this.arrayholder = res.pokemon;
            }).catch(function (error) {
                this.setState({ error: true });
            });
    }

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({ pokemon: newData });
    };

    render() {
        if (!this.state.connected) {
            return (<View style={styles.containerError}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Conéctate a Internet</Text>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>No tienes Internet. Comprueba la conexión</Text>
                <TouchableOpacity 
                onPress={this.handleConnectivityChange}
                style={{
                    width: 'auto',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: 'transparent',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 18, color:'#1565c0',textAlign: "center" }}>REINTENTAR</Text>
                </TouchableOpacity>
            </View>)
        }
        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Search handleSearch={this.searchFilterFunction} />
                </View>

                {
                    this.state.loading
                        ? (
                            <View style={styles.containerError}>
                                <Text style={{ fontSize: 18, textAlign: 'center' }}>Descargando Pokemones...</Text>
                            </View>
                        )
                        : (
                            <GridView
                                itemDimension={160}
                                items={this.state.pokemon}
                                style={styles.gridView}
                                renderItem={item => (
                                    <Box key={item.id} id={item.id} name={item.name} img={item.img} num={item.num} types={item.type} navigation={this.props.navigation} />
                                )}
                            />
                        )
                }

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerError: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    containerTop: {
        backgroundColor: 'white'
    },
    gridView: {
        paddingTop: 5,
        flex: 1
    }
});


