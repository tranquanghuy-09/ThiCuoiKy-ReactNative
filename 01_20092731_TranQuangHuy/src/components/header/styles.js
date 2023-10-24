import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 6,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1BA9FF',
    },
    icon: {
        width: 24,
        height: 24,
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    title: {
        alignSelf: 'center',
        color: '#fff',
    },
});

export default styles;
