import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
} from 'react-native';
import {
    ListItem,
    Avatar
} from 'react-native-elements'

import Carousel from 'react-native-snap-carousel';

import api from '../../services/api';
import Logotipo from '../../assets/logotipo.svg';
import styles from './styles';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [],
            loading: 0,
            page: 0,
            total: 0,
            responseHeader: [{}],
            payments: [],

        }
    }
    
    componentWillMount() {
        
        this.loadHeadInvoices();
    }

    loadHeadInvoices() {
        

        api.get('profile/1').then(response => {
            this.setState({
                carouselItems: response.data.headers,
                responseHeader: response.data,
                loading: false
            })
            this.state.carouselItems.forEach(function (element, index) {
                // console.log('index', index)
                // console.log('element.invoiceType', element.invoiceType)
                if (element.invoiceType == 'closed') {
                    return this.setState({indexHome:index});
                } else if (element.invoiceType == 'open' && this.state.indexHome == 0) {
                    return this.setState({ indexHome: index });
                }
            }
            )
        });
    }

    loadListInvoices(monthYearRef) {
        console.log('monthYearRef', monthYearRef);

        api.get('/payment/1/' + monthYearRef).then(response => {
            this.setState({
                payments: response.data,
            })
            // console.log("responseList: ", this.state.payments);
        });
    }


    _renderItem({ item, index }) {
        // const { payments } = this.state.payments;
        console.log('payments: ', this.state.payments);
        
        return (
            <View style={styles.card} >
                <View style={ styles[item.invoiceType] }>
                    <Text  style={styles.titleCard}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.totalInvoice)}</Text>
                    <Text style={styles.textCard}>Vencimento {item.dueDate}</Text>
                </View>
                <FlatList
                    style={styles.paymentList}
                    data={this.state.payments}
                    keyExtractor={(payment) => payment.id}
                    showsVerticalScrollIndicator={false}
                    onEndReached={this.loadListInvoices(item.monthYearRef)}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item : payment }) => (

                        <ListItem bottomDivider>
                            <Avatar source={{ uri: payment.avatar_url }} />
                            <ListItem.Content>
                                <ListItem.Title>{payment.establishment.name}</ListItem.Title>
                                <ListItem.Subtitle>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(payment.amount)}</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>

                    )}
                />
            </View>
        )
    }

    _renderItemList(){
        return(
            <View></View>
        );
    }

    render() {

        // const {payments} = this.state.payments;
        
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Logotipo  style={styles.logo} />
                </View>
                <SafeAreaView  style={styles.areaCard}>
                    <View style={styles.viewCard}>
                        <Carousel
                            layout={"default"}
                            ref={(c) => {this._carousel = c}}
                            data={this.state.carouselItems}
                            sliderWidth={380}
                            itemWidth={365}
                            renderItem={this._renderItem.bind(this)}
                            activeSlideAlignment={'end'}
                            onSnapToItem={index => this.setState({ activeIndex: index })}
                            firstItem={3}
                        />
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}
