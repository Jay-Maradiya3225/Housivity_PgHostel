import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveProperty, unsaveProperty } from '../redux/action';
import { RootState } from '../redux/store';
import { styles } from './PropertyCard.styles';
import { FilledHeartIcon, EmptyHeartIcon, AddressIcon } from '../../assets/Icons/appIcons';
import { wp } from '../global/globalItems';

export interface Property {
  availableFor: any;
  company: any;
  address: {
    googleMap: any;
    fullAddress: string;
  };
  displayPrice: {
    fixedPrice: string;
  };
  id: number;
  name: string;
  description: string;
  images: string[];
}

interface PropertyCardProps {
  property: Property;
}

const CDN_BASE_URL = 'https://logiqproperty.blr1.digitaloceanspaces.com';

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const dispatch = useDispatch();
  const savedProperties = useSelector(
    (state: RootState) => state.savedProperties,
  );
  const isSaved = savedProperties.some(
    (savedProperty: { id: number }) => savedProperty.id === property.id,
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSave = () => {
    if (isSaved) {
      dispatch(unsaveProperty(property.id));
    } else {
      dispatch(saveProperty(property));
    }
  };

  const renderImage = (image: string, index: number) => {
    const imageUrl = `${CDN_BASE_URL}/${image}`;

    return (
      <Image
        key={index}
        source={{ uri: imageUrl }}
        style={{ width: 300, height: 150, marginRight: 10,borderRadius:15 }}
        onError={(e) => console.log(`Failed to load image ${image}:`, e.nativeEvent.error)}
      />
    );
  };

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * (300 + 10), 
      animated: true,
    });
  };

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const imageWidth = 300 + 10;
    const newIndex = Math.floor(contentOffset / imageWidth);
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, []);

  return (
    <View style={styles.card}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={handleScroll}
      >
        {property?.images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageChange(index)}>
            {renderImage(image, index)}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.imageCountView}>
      <Text style={styles.imageCountText}>{currentImageIndex + 1}/{property?.images.length}</Text>
      </View>


      <Text style={styles.text}>{property?.displayPrice?.fixedPrice}</Text>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={[styles.text, { color: 'black' }]}>{property?.name}</Text>
        
        <TouchableOpacity onPress={handleSave}>
          {isSaved ? <FilledHeartIcon /> : <EmptyHeartIcon />}
        </TouchableOpacity>
      </View>
      
      <Text style={styles.text}>Available for {property?.availableFor?.[0]}</Text>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: wp(4) }}>
        <View style={{ marginRight: wp(2) }}>
          <AddressIcon />
        </View>
        <Text
          style={styles.text}
          onPress={() => {
            const lat = property?.address?.googleMap?.coordinates?.lat;
            const long = property?.address?.googleMap?.coordinates?.long;
            const url = `https://maps.google.com/?q=${lat},${long}`;
            Linking.openURL(url);
          }}>
          {property?.address?.fullAddress}
        </Text>
      </View>    
      </View>
  );
};

export default PropertyCard;