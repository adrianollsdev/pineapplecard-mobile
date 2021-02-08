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
        elevation: 8,
    },


    titleCard: {
        flex:1,
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 30,
        letterSpacing: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: 1,
    },

    textCard: {
        flex:1,
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
    }

});
