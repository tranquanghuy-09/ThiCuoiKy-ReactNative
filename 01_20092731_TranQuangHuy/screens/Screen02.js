import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
    const [data, setData] = useState([
        { key: '1', type: "iphone", bestSales: true, bestMached: true, popular: true, name: "Smartphone 1", price: "899$", image: require('../assets/images/iphone2.png') },
        { key: '2', type: "iphone", bestSales: false, bestMached: true, popular: false, name: "Smartphone 2", price: "799$", image: require('../assets/images/iphone3.jpg') },

        { key: '3', type: "ipad", bestSales: true, bestMached: false, popular: false, name: "Ipad 1", price: "799$", image: require('../assets/images/ipad1.png') },
        { key: '4', type: "ipad", bestSales: true, bestMached: true, popular: true, name: "Ipad 2", price: "799$", image: require('../assets/images/ipad2.png') },

        { key: '5', type: "macbook", bestSales: false, bestMached: true, popular: false, name: "Macbook 1", price: "799$", image: require('../assets/images/macbook1.jpg') },
        { key: '6', type: "macbook", bestSales: true, bestMached: true, popular: false, name: "Macbook 2", price: "799$", image: require('../assets/images/macbook2.jpg') },

        { key: '7', type: "iphone", bestSales: true, bestMached: true, popular: true, name: "Smartphone 3", price: "899$", image: require('../assets/images/iphone2.png') },
        { key: '8', type: "iphone", bestSales: false, bestMached: true, popular: false, name: "Smartphone 4", price: "799$", image: require('../assets/images/iphone3.jpg') },

        { key: '9', type: "ipad", bestSales: true, bestMached: false, popular: false, name: "Ipad 3", price: "799$", image: require('../assets/images/ipad1.png') },
        { key: '10', type: "ipad", bestSales: true, bestMached: true, popular: true, name: "Ipad 4", price: "799$", image: require('../assets/images/ipad2.png') },

        { key: '11', type: "macbook", bestSales: false, bestMached: true, popular: false, name: "Macbook 3", price: "799$", image: require('../assets/images/macbook1.jpg') },
        { key: '12', type: "macbook", bestSales: true, bestMached: true, popular: false, name: "Macbook 4", price: "799$", image: require('../assets/images/macbook2.jpg') },

        { key: '13', type: "iphone", bestSales: true, bestMached: true, popular: true, name: "Smartphone 5", price: "899$", image: require('../assets/images/iphone2.png') },
        { key: '14', type: "iphone", bestSales: false, bestMached: true, popular: false, name: "Smartphone 6", price: "799$", image: require('../assets/images/iphone3.jpg') },

        { key: '15', type: "ipad", bestSales: true, bestMached: false, popular: false, name: "Ipad 5", price: "799$", image: require('../assets/images/ipad1.png') },
        { key: '16', type: "ipad", bestSales: true, bestMached: true, popular: true, name: "Ipad 6", price: "799$", image: require('../assets/images/ipad2.png') },

        { key: '17', type: "macbook", bestSales: false, bestMached: true, popular: false, name: "Macbook 5", price: "799$", image: require('../assets/images/macbook1.jpg') },
        { key: '18', type: "macbook", bestSales: true, bestMached: true, popular: false, name: "Macbook 6", price: "799$", image: require('../assets/images/macbook2.jpg') },
    ]);
    const [type, setType] = useState('All');
    const [bestSales, setBestSales] = useState(true);
    const [bestMached, setBestMached] = useState(false);
    const [popular, setPopular] = useState(false);
    const [selectedButton, setSelectedButton] = useState('Best Sales');
    const [initialItemCount, setInitialItemCount] = useState(4);

    const [newProductName, setNewProductName] = useState(''); // Thêm state mới để theo dõi tên sản phẩm mới
    const [dataChangeFlag, setDataChangeFlag] = useState(0); 

    const handleAddNewProduct = () => {
        if (newProductName.trim() !== '') {
            // Tạo một sản phẩm mới với thông tin tương ứng
            const newProduct = {
                key: String(data.length + 1), // Tạo key mới
                type: "your_product_type", // Thay 'your_product_type' bằng loại sản phẩm thích hợp
                bestSales: false, // Có thể điều chỉnh theo yêu cầu của bạn
                bestMached: false, // Có thể điều chỉnh theo yêu cầu của bạn
                popular: false, // Có thể điều chỉnh theo yêu cầu của bạn
                name: newProductName,
                price: "your_product_price", // Thay 'your_product_price' bằng giá sản phẩm thích hợp
                // image: require('your_product_image'), // Thay 'your_product_image' bằng đường dẫn hình ảnh thích hợp
            };

            // Cập nhật danh sách data bằng cách thêm sản phẩm mới vào đầu mảng
            setData([newProduct, ...data]);

            // Cập nhật giá trị state để buộc FlatList vẽ lại
            setDataChangeFlag(new Date().getTime());

            // Xóa giá trị trong TextInput
            setNewProductName('');
        }
    };

    return (
        
        <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: 'white'}}>
            <View style={{
                flexDirection: 'row',
                width: "100%",
                alignItems: 'center',
                height: 50,
                marginTop: 0,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                
            }}>
                <Ionicons name="arrow-back" size={24} color="black" 
                    style={{ paddingLeft: 0}}
                />
                <Text style={{ fontSize: 18, marginLeft: 20}}>Electronics</Text>
                <Ionicons name="cart-outline" size={24} color="black" 
                    style={{marginLeft: 180}}
                />
                <Image source={require('../assets/data/anhthe.jpg')}
                    style={{ width: 40, height: 40, borderRadius: "50%", marginLeft: 20}}
                />
            </View>
            <View style={styles.style1}>
                <View style={{flexDirection: 'row', width: "100%", height: 50, paddingHorizontal: 10, marginTop: 10,
                    alignItems: 'center', marginBottom: 10, justifyContent: 'space-between',
                }}>
                    <View style={{flexDirection: 'row',
                        alignItems: 'center',
                        width: "80%",
                        height: 40,
                        backgroundColor: 'rgb(243, 244, 246)',
                        paddingLeft: 10,
                        
                        }}>
                        <Image source={require('../assets/Data/search.png')}
                            style={{ width: "25px", height: "25px", marginRight: 15}}
                            resizeMode='contain'
                        />
                        <TextInput
                            placeholder='Search'
                            width="100%"
                            style={{
                                color: 'silver',
                                fontSize: 18,
                            }}
                        />
                    </View>
                    <View style={{flexDirection: 'row',
                        alignItems: 'center',
                        width: "15%",
                        height: 40,
                        backgroundColor: 'rgb(243, 244, 246)',
                        justifyContent: 'center',
                        }}>
                        <Ionicons name='filter' size={24} color="black"></Ionicons>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>Categories</Text>
                    <TouchableOpacity onPress={() => {
                        setType('All')
                        setBestSales(false)
                        setBestMached(false)
                        setPopular(false)
                        setSelectedButton('')
                        setInitialItemCount(4)
                    }
                    }>
                        <Text style={{
                            marginTop: 10,
                            marginRight: 20,
                            fontSize: 15,
                        }}>See all &gt;</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 10,
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#9d79ea',
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                        onPress={() => {
                            setType('iphone')
                            setSelectedButton('')
                            setInitialItemCount(4)
                        }}
                    >
                        <Image source={require('../assets/images/iphone.jpg')}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: 'rgb(107, 161, 243)',
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                        onPress={() => {
                            setType('ipad')
                            setBestSales(false)
                            setInitialItemCount(4)
                            setSelectedButton('')
                        }}
                    >
                        <Image source={require('../assets/images/ipad.png')}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: 'rgb(202, 171, 106)',
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                        onPress={() => {
                            setType('macbook')
                            setBestSales(false)
                            setInitialItemCount(4)
                            setSelectedButton('')
                        }}
                    >
                        <Image source={require('../assets/images/macbook.jpg')}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginTop: 20,
                }}>
                    <TouchableOpacity style={{
                        width: 110,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        backgroundColor: selectedButton === 'Best Sales' ? 'rgb(107, 161, 243)' : 'silver',
                    }}
                        onPress={() => {
                            setBestSales(true)
                            setBestMached(false)
                            setPopular(false)
                            setSelectedButton('Best Sales')
                            setInitialItemCount(4)
                        }}
                    >
                        <Text style={{
                            fontWeight: 'bold',
                        }}>Best Sales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 110,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        backgroundColor: selectedButton === "Best Matched" ? 'rgb(107, 161, 243)' : 'silver',
                    }}
                        onPress={() => {
                            setBestSales(false)
                            setBestMached(true)
                            setPopular(false)
                            setSelectedButton('Best Matched')
                            setInitialItemCount(4)
                        }}
                    >
                        <Text style={{
                            fontWeight: 'bold',
                        }}>Best Matched</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 110,
                        height: 40,
                        backgroundColor: selectedButton === "Popular" ? 'rgb(107, 161, 243)' : 'silver',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                    }}
                        onPress={() => {
                            setSelectedButton('Popular')
                            setPopular(true)
                            setBestSales(false)
                            setBestMached(false)
                            setInitialItemCount(4)
                        }}
                    >
                        <Text style={{
                            fontWeight: 'bold',
                        }}>Popular</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.style2}>
                <FlatList
                    data={(data.filter((item, index) => (
                        (item.type === type || type === 'All') &&
                        (bestSales ? item.bestSales : true) &&
                        (bestMached ? item.bestMached : true) &&
                        (popular ? item.popular : true)
                    ))).slice(0, initialItemCount)}
                    renderItem={({ item }) => (
                        <View style={{
                            borderWidth: 1,
                            height: 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 10,
                        }}>
                            <Image source={item.image}
                                style={{
                                    width: 90,
                                    height: 90,
                                }}
                                resizeMode='contain'
                            />
                            <View style={{}}>
                                <View style={{ flexDirection: "row", justifyContent: 'space-between', width: "290px", alignItems: 'center' }}>
                                    <Text>{item.name}</Text>
                                    <Image source={require('../assets/images/icontien.png')}
                                        style={{
                                            width: 25,
                                            height: 25,
                                        }}
                                    />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: 'space-between', width: "290px", alignItems: 'center', }}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image source={require('../assets/images/star.jpg')}
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                        <Image source={require('../assets/images/star.jpg')}
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                        <Image source={require('../assets/images/star.jpg')}
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                        <Image source={require('../assets/images/star.jpg')}
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                        <Image source={require('../assets/images/star.jpg')}
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                    </View>
                                    <Text style={{}}>{item.price}</Text>
                                </View>


                            </View>
                        </View>
                    )}
                    key={dataChangeFlag} // Key sẽ thay đổi khi dataChangeFlag thay đổi, buộc FlatList vẽ lại
                />
                <TouchableOpacity style={{
                    marginTop: 20,
                }}
                    onPress={() => { setInitialItemCount(data.length) }}
                >
                    <Text style={{ fontSize: 15 }}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.style3}>
                <Image source={require('../assets/Data/banner.png')}
                    style={{width: "95%", height: "95%",
                              
                }}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.style4}>
            <TouchableOpacity style={{
                    marginTop: 20,
                }}
                onPress={handleAddNewProduct}
                >
                    <Text style={{ fontSize: 25 }}>Thêm sản phầm mới</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderWidth: 1,
    // },
    style1: {
        // flex: 2,
        width: "100%",
        height: 300,
    },
    style2: {
        // flex: 4,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        // height: 450,
    },
    style3: {
        // flex: 1,
        width: "100%",
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style4: {
        // flex: 1,
        width: "100%",
    },
});
