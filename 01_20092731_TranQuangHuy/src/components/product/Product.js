import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const Product = ({ product, active }) => {
    return (
        <View style={[styles.container, active && styles.active]}>
            <Image style={styles.image} source={product.image} />
            <View style={styles.info}>
                <Text numberOfLines={1}>{product.title}</Text>
                <Text style={styles.shopName} numberOfLines={1}>
                    <Text style={styles.shopLabel}>Shop</Text> {product.shop}
                </Text>
            </View>
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Chat</Text>
            </Pressable>
            <View style={styles.line}></View>
        </View>
    );
};

export default Product;
