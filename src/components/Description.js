import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pokemon: [],
            type: [],
            weaknesses: [],
            next_evolution: [],
            prev_evolution: [],
            url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
        
        }

    }

    componentDidMount() {
        this.getPokemon();
    }

    getPokemon = () => {
        this.setState({ loading: true });
        fetch(this.state.url).then(res => res.json())
            .then(res => {
                res.pokemon.map((item) => {
                    if (item.id == this.props.navigation.getParam('key')) {
                        this.setState(
                            {
                                pokemon: item,
                                type: item.type,
                                weaknesses: item.weaknesses,
                                next_evolution: item.next_evolution,
                                prev_evolution: item.prev_evolution,
                                loading: false
                            });
                    }
                })



            }).catch(function (error) {
                alert('Hubo un problema con la petición intente más tarde:' + error.message);
            });
    }

    static navigationOptions = {
        title: 'Descripción',
        headerStyle: {
            backgroundColor: '#388E3C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }

    render() {


        return (
            <ScrollView style={{backgroundColor: '#388E3C'}} contentContainerStyle={{paddingVertical: 20}}>


                <View style={styles.container}>
                    <View style={{alignItems: 'center', position: 'absolute', zIndex: 10 }}>
                        <Image resizeMode="contain" source={{ uri: this.state.pokemon.img, }}
                            style={{ width: 140, height: 140 }} />
                    </View>
                    <View style={{
                        width:'90%',
                        marginTop: 60,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        paddingTop: 70
                    }}>

                        {this.state.loading == true ?
                            (
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: "100" }}>Cargando información...</Text>
                                </View>) :
                            (
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'space-evenly',
                                    paddingVertical:10,
                                    paddingHorizontal:5
                                }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, color: 'black', fontWeight: "bold",marginBottom:10 }}>{this.state.pokemon.name}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center',marginBottom:10  }}>
                                        <Text>Peso {this.state.pokemon.weight}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center',marginBottom:10  }}>
                                        <Text>Altura {this.state.pokemon.height}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center',marginBottom:10  }}>
                                        <Text style={{ height: 30, alignItems: 'center' }}>Tipos</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginBottom:10  }}>

                                        {

                                            this.state.type.map((item, key) => (
                                                <View key={key} style={{
                                                    width: 'auto',
                                                    backgroundColor: 'orange',
                                                    borderRadius: 5,
                                                    margin:10,
                                                    paddingHorizontal: 16,
                                                    paddingVertical: 2
                                                }}>
                                                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 12 }}>
                                                        {item}
                                                    </Text>
                                                </View>
                                            )
                                            )
                                        }
                                    </View>

                                    <View style={{ alignItems: 'center',marginBottom:10  }}>
                                        <Text style={{ height: 30, alignItems: 'center' }}>Debilidades</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap',marginBottom:10  }}>

                                        {

                                            this.state.weaknesses.map((item, key) => (
                                                <View key={key} style={{
                                                    width: 'auto',
                                                    backgroundColor: 'red',
                                                    borderRadius: 5,
                                                    margin:10,
                                                    paddingHorizontal: 16,
                                                    paddingVertical: 2
                                                }}>
                                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 12 }}>
                                                        {item}
                                                    </Text>
                                                </View>
                                            )
                                            )
                                        }
                                    </View>

                                    {typeof this.state.next_evolution == "undefined"
                                        ? null
                                        : (
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between',marginBottom:10  }}>
                                                <View style={{ height: 30, alignItems: 'center' }}>
                                                    <Text>Siguiente Evolución</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap',marginBottom:10  }}>
                                                    {
                                                        this.state.next_evolution.map((item, key) => (
                                                            <View key={key} style={{
                                                                width: 'auto',
                                                                backgroundColor: 'green',
                                                                borderRadius: 5,
                                                                margin:10,
                                                                paddingHorizontal: 16,
                                                                paddingVertical: 2
                                                            }}>
                                                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 12 }}>
                                                                    {item.name}
                                                                </Text>
                                                            </View>
                                                        )
                                                        )
                                                    }
                                                </View>

                                            </View>



                                        )
                                    }

                                    {typeof this.state.prev_evolution == "undefined"
                                        ? null
                                        : (
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between',marginBottom:10  }}>
                                                <View style={{ height: 30, alignItems: 'center' }}>
                                                    <Text>Evolución Anterior</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap',marginBottom:10  }}>
                                                    {
                                                        this.state.prev_evolution.map((item, key) => (
                                                            <View key={key} style={{
                                                                width: 'auto',
                                                                backgroundColor: 'green',
                                                                borderRadius: 5,
                                                                margin:10,
                                                                paddingHorizontal: 16,
                                                                paddingVertical: 2
                                                            }}>
                                                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 12 }}>
                                                                    {item.name}
                                                                </Text>
                                                            </View>
                                                        )
                                                        )
                                                    }
                                                </View>

                                            </View>



                                        )
                                    }
                                </View>
                            )
                        }


                    </View>
                </View >
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#388E3C',
        alignItems: 'center',
    },

});

