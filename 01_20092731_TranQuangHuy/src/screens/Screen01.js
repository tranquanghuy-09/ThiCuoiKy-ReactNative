import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import Product from '../components/product/Product';
import Header from '../components/header/Header';

const products = [
    {
        image: require('../../assets/ca_nau_lau.png'),
        title: 'Lorem',
        shop: 'Devang',
    },
    {
        image: require('../../assets/ga_bo_toi.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../../assets/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../../assets/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../../assets/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../../assets/ca_nau_lau.png'),
        title: 'Lorem',
        shop: 'Devang',
    },
    {
        image: require('../../assets/ga_bo_toi.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../../assets/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../../assets/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../../assets/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
];

const Screen01 = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Header />
            <Text style={styles.desc}>
                Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
            </Text>
            <View style={styles.products}>
                {products.map((item, index) => {
                    return <Product product={item} key={index} />;
                })}
            </View>
        </ScrollView>
    );
};

export default Screen01;
