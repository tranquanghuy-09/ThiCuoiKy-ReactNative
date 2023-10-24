import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 1,
        paddingBottom: 3,
    },
    active: {
        backgroundColor: '#fff',
    },
    image: {
        width: 74,
        height: 74,
        marginRight: 16,
    },
    info: {
        marginRight: 12,
        flex: 1,
    },
    shopName: {
        color: '#E83030',
        marginTop: 14,
    },
    shopLabel: {
        color: '#7D5B5B',
    },
    btn: {
        width: 88,
        height: 38,
        marginRight: 27,
        backgroundColor: '#F31111',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btnText: {
        color: '#fff',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#C4C4C4',
    },
});

export default styles;
