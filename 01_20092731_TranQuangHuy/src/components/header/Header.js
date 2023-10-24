import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const Header = () => {
    const handleClickBack = () => console.log('Header back');
    const handleClickCart = () => console.log('Header cart');

    return (
        <View style={styles.container}>
            <Pressable onPress={handleClickBack} style={styles.icon}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/ant-design_arrow-left-outlined.png')}
                />
            </Pressable>
            <Text style={styles.title}>Chat</Text>
            <Pressable onPress={handleClickCart} style={styles.icon}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/bi_cart-check.png')}
                />
            </Pressable>
        </View>
    );
};

export default Header;
