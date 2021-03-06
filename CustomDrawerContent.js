
import React, {useState, useRef, useEffect} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



function CustomDrawerContent(props) {
    const [mainDrawer, setMainDrawer] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);

    const toggleMainDrawer = () => {
        setMainDrawer(true);
        setFilteredItems([]);
    };

    const onItemParentPress = (key) => {
        const filteredMainDrawerRoutes = props.drawerItems.find((e) => {
            return e.key === key;
        });
        if (filteredMainDrawerRoutes.routes.length === 1) {
            const selectedRoute = filteredMainDrawerRoutes.routes[0];
            props.navigation.toggleDrawer();
            props.navigation.navigate(selectedRoute.nav, {
                screen: selectedRoute.routeName,
            });
        } else {
            setMainDrawer(false);
            setFilteredItems(filteredMainDrawerRoutes);
        }
    };

    const logOut = async () => console.log('log out');

    function renderMainDrawer() {
        return (
            <View>
                {props.drawerItems.map((parent) => (
                    <View key={parent.key}>
                        <TouchableOpacity
                            key={parent.key}
                            testID={parent.key}
                            onPress={() => {
                                onItemParentPress(parent.key);
                            }}>
                            <View style={styles.parentItem}>
                                <Text style={[styles.icon, styles.title]}>{parent.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
                {renderLogoutBtn()}
            </View>
        );
    }

    function renderFilteredItemsDrawer() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => toggleMainDrawer()}
                    style={styles.backButtonRow}>
                    <Text style={[styles.backButtonText, styles.title]}>{'BACK'}</Text>
                </TouchableOpacity>
                {filteredItems.routes.map((route) => {
                    return (
                        <TouchableOpacity
                            key={route.routeName}
                            testID={route.routeName}
                            onPress={() =>
                                props.navigation.navigate(route.nav, {
                                    screen: route.routeName,
                                })
                            }
                            style={styles.item}>
                            <Text style={styles.title}>{route.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    function renderLogoutBtn() {
        return (
            <View>
                <TouchableOpacity onPress={logOut} testID="customDrawer-logout">
                    <View style={styles.parentItem}>
                        <Text style={styles.title}>{'Log out'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.drawerContainer}>
            <SafeAreaView
                style={styles.container}
                forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={styles.centered}>
                    <Image
                        source={require('./assets/pic.png')}
                        style={styles.logo}
                    />
                </View>
                {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        paddingVertical: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    drawerContainer: {
        backgroundColor: '#222222',
    },
    container: {
        flex: 1,
        zIndex: 1000,
    },
    centered: {
        alignItems: 'flex-start',
    },
    parentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingTop: 4,
        paddingBottom: 4,
    },
    title: {
        margin: 16,
        fontWeight: 'bold',
        color: '#F0F0F0',
        textAlign: 'center',
    },
    backButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 17,
        paddingLeft: 3,
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 1,
    },
    backButtonText: {
        marginLeft: 10,
        color: '#F0F0F0',
    },
});

export default CustomDrawerContent;

