import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    SafeAreaView
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import api from '../../services/api';
import Logotipo from '../../assets/logotipo.svg';
import styles from './styles';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "R$ 2.000,00",
                    text: "Vencimento 15 JAN",
                },
                {
                    title: "R$ 2.000,00",
                    text: "Vencimento 15 FEV",
                },
                {
                    title: "R$ 2.000,00",
                    text: "Vencimento 15 MAR",
                },
                {
                    title: "R$ 2.000,00",
                    text: "Vencimento 15 ABR",
                },
                {
                    title: "R$ 2.000,00",
                    text: "Vencimento 15 MAI",
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={styles.card} >
                <View style={styles.headerCard}>
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <Text style={styles.textCard}>{item.text}</Text>
                </View>
            </View>
        )
    }

    render() {
        async function headerCard() {
            const response = await api.get('/profile', {
                parms: 1
            });

            return (response.data)
        }
        return (          
            
            <View style={styles.container}>
                <View style={styles.header}>
                    <Logotipo style={styles.logo} />
                </View>
                <SafeAreaView style={styles.areaCard}>
                    <View style={styles.viewCard}>
                        <Carousel
                            layout={"default"}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={380}
                            itemWidth={380}
                            renderItem={this._renderItem}
                            activeSlideAlignment={'end'}
                            onSnapToItem={index => this.setState({ activeIndex: index })}
                            firstItem={1} />
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

