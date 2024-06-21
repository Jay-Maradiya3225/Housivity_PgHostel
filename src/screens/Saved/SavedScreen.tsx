import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropertyCard, { Property } from '../../components/PropertyCard';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const SavedScreen: React.FC = () => {
    const savedProperties = useSelector((state: RootState) => state.savedProperties);

    const renderItem = ({ item }: { item: Property }) => <PropertyCard property={item} />;

    return (
        <>
        <View style={{ flexDirection:'row',margin:10}}>
        <Text style={{fontSize:16,color:'#ff5a60'}}>Dear Sunjay Chaudhary</Text>
        <Text style={{fontSize:16,color:'black'}}>,Here you are liked PG/Hostel</Text>
        </View>
        <FlatList
            data={savedProperties}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
        </>
    );
};

export default SavedScreen;
