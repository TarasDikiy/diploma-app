const { StyleSheet } = require("react-native");

const scale = 1.3;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
    },
    authView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    authHeader: {
        fontWeight: "bold",
        marginBottom: 20 * scale,
        fontSize: 25 * scale
    },
    authInput: {
        borderWidth: 2,
        width: 200 * scale,
        height: 40 * scale,
        borderRadius: 5,
        marginBottom: 10 * scale,
        padding: 5,
        backgroundColor: 'white',
        color: 'gray',
        textAlign: 'center',
        fontSize: 14 * scale
    },
    authBtn: {
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 2,
        width: 200 * scale,
        height: 40 * scale,
        borderRadius: 5,
        backgroundColor: 'gray',

        text: {
            color: 'white',
            padding: 5,
            fontSize: 14 * scale
        }
    },
    footer:{
        text: {
            justifyContent: 'flex-end',
            textDecorationLine: 'underline',
            padding: 5,
            marginBottom: 15 * scale,
            fontSize: 14 * scale
        }
    }
});