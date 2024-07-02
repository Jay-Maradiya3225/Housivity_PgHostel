import { StyleSheet } from "react-native";
import { wp, hp } from "../../global/globalItems";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    filterBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    filterButton: {
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      borderColor: 'gray',
      borderWidth: 1,
      margin:2,
      paddingHorizontal:wp(3)
    },
    filterText: {
      color: 'gray',
      fontWeight: 'bold',
    },
    resultsText: {
      padding: 10,
      color: '#ff5a60',
      fontWeight: 'bold',
    },
    filterModalContent: {
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 20,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalButtonContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginTop: hp(2),
    },
    modalButton: {
      padding: 10,
      backgroundColor: '#ff5a60',
      borderRadius: 5,
    },
    modalButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    modalContainer: {
      top: hp(13),
      left: wp(8),
      width: '85%',
      maxWidth: wp(300),
    },
    shadowContainer: {
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,  
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    paginationButton: {
      padding: 10,
      backgroundColor: '#ff5a60',
      borderRadius: 5,
      marginHorizontal: 10,
    },
    disabledButton: {
      backgroundColor: 'gray',
    },
    paginationButtonText: {
      color: 'white',
      fontSize: 16,
    },
    pageNumberText: {
      fontSize: 16,
    },
  });