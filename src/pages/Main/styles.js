import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#670D64',
        paddingTop: Contants.statusBarHeight + 2,
    },

    header: {
        height: 55,
        alignItems: 'center',
        // backgroundColor: "#fff",
        flexDirection: 'row'
    },

    logo: {
        left: 104,
        width: 166,
        height: 24,
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    card: {
        flex: 1,
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        // height: 250,
        // padding: 30,
        // marginLeft: 25,
        // marginRight: 10,
    },

    headerCard: {
        "top": 54,
        "left": 0,
        "width": 375,
        "height": 75,
        "backgroundColor": "#F8B600",
        "shadowOffset": {
            "width": 0,
            "height": 10
        },
        "shadowRadius": 15,
        "shadowColor": "#00000029",
        "shadowOpacity": 1,
        "opacity": 1
    },

    paid: {
        left: 0,
        height: 75,
        justifyContent: 'center',
        backgroundColor: '#5AF27D',
        shadowColor: "#0000000F",
        shadowOffset: {
            width: 10,
            height: 15,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 3,
    },

    closed: {
        left: 0,
        height: 75,
        justifyContent: 'center',
        backgroundColor: '#F42C2C',
        shadowColor: "#0000000F",
        shadowOffset: {
            width: 10,
            height: 15,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 3,
    },

    open: {
        left: 0,
        height: 75,
        justifyContent: 'center',
        backgroundColor: '#F8B600',
        shadowColor: "#0000000F",
        shadowOffset: {
            width: 10,
            height: 15,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 3,
    },


    titleCard: {
        flex: 1,
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 30,
        letterSpacing: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: 1,
    },

    textCard: {
        flex: 1,
        fontFamily: 'Roboto',
        fontSize: 15,
        letterSpacing: 0,
        color: '#FFFFFF',
        textAlign: 'center',
        opacity: 1,
    },

    areaCard: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center'
    },

    viewCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    paymentList: {
        backgroundColor: '#FFFFFF',
        flex:1,
    },

    lineList: {
        "top": 158,
        "left": 27,
        "width": 0,
        "height": 864,
        "borderWidth": 1,
        "borderColor": "#D3CFCF",
        "borderStyle": "solid",
        "opacity": 1
    },

    hourList: {
        "top": 153,
        "left": 304,
        "width": 43,
        "height": 1129,
        "textAlign": "right",
        "fontStyle": "normal",
        "fontWeight": "300",
        "fontVariant": [],
        "fontSize": 10,
        "fontFamily": "Roboto",
        "lineHeight": 86,
        "letterSpacing": 0,
        "color": "#707070",
        "opacity": 1
    },

    valueList: {
        "top": 174,
        "left": 52,
        "width": 121,
        "height": 1129,
        "textAlign": "left",
        "fontStyle": "normal",
        "fontWeight": "300",
        "fontVariant": [],
        "fontSize": 12,
        "fontFamily": "Roboto",
        "lineHeight": 86,
        "letterSpacing": 0,
        "color": "#707070",
        "opacity": 1
    },

    elipseOpenInvoice: {
        "top": 151,
        "left": 19,
        "width": 15,
        "height": 15,
        "backgroundColor": "#F8B600",
        "opacity": 1
    },

    elipsePayment: {
        "top": 238,
        "left": 21,
        "width": 11,
        "height": 11,
        "backgroundColor": "#3AEA63",
        "opacity": 1
    },

    iconReversal: {
        "top": 405,
        "left": 12,
        "width": 28,
        "height": 25,
        "backgroundColor": "#FFFFFF",
        "opacity": 1
    },

    comentPayment: {
        "top": 449,
        "left": 52,
        "width": 121,
        "height": 1129,
        "textAlign": "left",
        "fontStyle": "normal",
        "fontWeight": "300",
        "fontVariant": [],
        "fontSize": 12,
        "fontFamily": "Roboto",
        "lineHeight": 86,
        "letterSpacing": 0,
        "color": "#F8B600",
        "opacity": 1
    }


});