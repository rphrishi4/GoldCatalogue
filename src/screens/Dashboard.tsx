import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import {FlatList} from 'react-native';
import CoffeeCard from '../components/CoffeeCard';
import {Dimensions} from 'react-native';
import InfiniteText from '../components/InfiniteText';
import GradientBGIcon from '../components/GradientBGIcon';
import { assets } from '../../react-native.config';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const Dashboard = ({navigation}: any) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  var catalougeFlag = true;

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };

  const CoffeCardAddToCart = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices,
    });
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      `${name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <HeaderBar />

        <Text style={styles.ScreenTitle}>
          Saraf Tarsewalla Jewellers
        </Text>

        
        <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={require('../assets/app_images/blackbg.png')}
        style={styles.CardImageBG}
        resizeMode="cover">
        <View style={styles.TrainingContainer}>
          <Text style={styles.heading}>24 Karat</Text>
          <Text style={styles.cost}> 60000 INR</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../assets/app_images/blackbg.png')}
        style={styles.CardImageBG}
        resizeMode="cover">
        <View style={styles.TrainingContainer}>    
          <Text style={styles.heading}>22 Karat</Text>          
          <Text style={styles.cost}> 55000 INR</Text>
        </View>
      </ImageBackground>
      </LinearGradient>
        
        {/* <InfiniteText/> */}

        {catalougeFlag && 
          <View>
              {/* Search Input */}
              <View style={styles.InputContainerComponent}>
                <TouchableOpacity
                  onPress={() => {
                    searchCoffee(searchText);
                  }}>
                  <CustomIcon
                    style={styles.InputIcon}
                    name="search"
                    size={FONTSIZE.size_18}
                    color={
                      searchText.length > 0
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryLightGreyHex
                    }
                  />
                </TouchableOpacity>
                <TextInput
                  placeholder="Find Your Jewellery..."
                  value={searchText}
                  onChangeText={text => {
                    setSearchText(text);
                    searchCoffee(text);
                  }}
                  placeholderTextColor={COLORS.primaryLightGreyHex}
                  style={styles.TextInputContainer}
                />
                {searchText.length > 0 ? (
                  <TouchableOpacity
                    onPress={() => {
                      resetSearchCoffee();
                    }}>
                    <CustomIcon
                      style={styles.InputIcon}
                      name="close"
                      size={FONTSIZE.size_16}
                      color={COLORS.primaryLightGreyHex}
                    />
                  </TouchableOpacity>
                ) : (
                  <></>
                )}
              </View>

              {/* Category Scroller */}

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.CategoryScrollViewStyle}>
                {categories.map((data, index) => (
                  <View
                    key={index.toString()}
                    style={styles.CategoryScrollViewContainer}>
                    <TouchableOpacity
                      style={styles.CategoryScrollViewItem}
                      onPress={() => {
                        ListRef?.current?.scrollToOffset({
                          animated: true,
                          offset: 0,
                        });
                        setCategoryIndex({index: index, category: categories[index]});
                        setSortedCoffee([
                          ...getCoffeeList(categories[index], CoffeeList),
                        ]);
                      }}>
                      <Text
                        style={[
                          styles.CategoryText,
                          categoryIndex.index == index
                            ? {color: COLORS.primaryOrangeHex}
                            : {},
                        ]}>
                        {data}
                      </Text>
                      {categoryIndex.index == index ? (
                        <View style={styles.ActiveCategory} />
                      ) : (
                        <></>
                      )}
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>

              {/* Coffee Flatlist */}

              <FlatList
                ref={ListRef}
                horizontal
                ListEmptyComponent={
                  <View style={styles.EmptyListContainer}>
                    <Text style={styles.CategoryText}>No Coffee Available</Text>
                  </View>
                }
                showsHorizontalScrollIndicator={false}
                data={sortedCoffee}
                contentContainerStyle={styles.FlatListContainer}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('Details', {
                          index: item.index,
                          id: item.id,
                          type: item.type,
                        });
                      }}>
                      <CoffeeCard
                        id={item.id}
                        index={item.index}
                        type={item.type}
                        roasted={item.roasted}
                        imagelink_square={item.imagelink_square}
                        name={item.name}
                        special_ingredient={item.special_ingredient}
                        average_rating={item.average_rating}
                        price={item.prices[2]}
                        buttonPressHandler={CoffeCardAddToCart}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
              </View>
              }   

        
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  
  CardContainer:{
      width: Dimensions.get('window').width - SPACING.space_30,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:3.6,
  },
  card: {
    backgroundColor: COLORS.secondaryLightGreyHex,
    borderRadius: 10,
    padding: 16,
    margin: 8,
    elevation: 3,
  },
  heading: {
    textAlign: 'center',
    color: COLORS.primaryOrangeHex,
    fontSize: 18,
    fontFamily:FONTFAMILY.poppins_medium,
    fontWeight: '600',
    paddingBottom: 18
  },
  cost: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily:FONTFAMILY.poppins_medium,
    color: COLORS.primaryOrangeHex,
    fontWeight: '400'
  },
  TrainingContainer:{
    padding:5,
    width:'100%',
    alignContent:'center',
    alignItems:'center',
  },
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start'
    
  },
  CardImageBG: {
    margin:10,
    height: 120,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
});

export default Dashboard;
