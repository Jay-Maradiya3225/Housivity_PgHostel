import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import PropertyCard, {Property} from '../../components/PropertyCard';
import {hp, wp} from '../../global/globalItems';
import { styles } from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalItems, setToatalItems] = useState<number>(0);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const fetchProperties = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        'https://api.housivity.com/api/v1/property',
        {
          params: {
            city: 'Gandhinagar',
            projectType: '["pgHostel"]',
            page: 1,
          },
        },
      );
      // console.log("response::",response.data)
      if (response.data.statusCode === 200) {
        setProperties(response.data.propertyList);
        setToatalItems(response?.data?.count);
      } else {
        console.error('Error fetching properties:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [page]);

  const renderItem = useCallback(
    ({item}: {item: Property}) => <PropertyCard property={item} />,
    [],
  );
  const loadMore = useCallback(() => setPage(prevPage => prevPage + 1), []);

  const filterOptions = (
    <View style={styles.filterBar}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          filterModalVisible ? {borderColor: '#ff5a60'} : {borderColor: 'gray'},
        ]}
        onPress={() => setFilterModalVisible(true)}>
        <Text
          style={[
            filterModalVisible ? {color: '#ff5a60'} : {borderColor: 'gray'},
          ]}>
          Filter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text>Types of Property</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text>BHK Type</Text>
      </TouchableOpacity>
    </View>
  );

  const applyFilters = () => {
    setFilterModalVisible(false);
  };

  const filterModalContent = useMemo(
    () => (
      <View style={styles.filterModalContent}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={[styles.filterButton, {marginBottom: hp(1)}]}>
            <Text style={styles.filterText}>Apartment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, {marginBottom: hp(1)}]}>
            <Text style={styles.filterText}>Bungalow/Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, {marginBottom: hp(1)}]}>
            <Text style={styles.filterText}>Penthouse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, {marginBottom: hp(1)}]}>
            <Text style={styles.filterText}>Row House</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, {marginBottom: hp(1)}]}>
            <Text style={styles.filterText}>Farm House</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={[styles.filterButton]}
            onPress={() => setFilterModalVisible(false)}>
            <Text style={[styles.modalButtonText, {color: 'gray'}]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              {
                borderColor: '#ff5a60',
                backgroundColor: '#ff5a60',
                marginLeft: wp(5),
              },
            ]}
            onPress={applyFilters}>
            <Text style={styles.modalButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      {filterOptions}
      <Text style={styles.resultsText}>
        {totalItems} Results found for Buy in Gandhinagar
      </Text>
        <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <Text style={{fontSize:20}}>Loading...</Text> : null}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={filterModalVisible}
        onRequestClose={() => setFilterModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setFilterModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={[styles.modalContainer,styles.shadowContainer]}>{filterModalContent}</View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
