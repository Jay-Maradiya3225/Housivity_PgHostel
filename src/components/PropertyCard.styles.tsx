import { StyleSheet } from "react-native";
import { hp, wp } from "../global/globalItems";

export const styles = StyleSheet.create({
    card:{ 
        borderWidth: 1, 
        padding: 10, 
        margin: wp(5),
        borderRadius:20
    },
    text:{
        fontSize:18,
        fontWeight:'400',
        color:'gray',
        marginTop:hp(1.5)
    },
    imageCountView:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        borderColor:'black',
        borderRadius:20,
        borderWidth:1,
        margin:wp(2),
        marginHorizontal:wp(35)
    },
    imageCountText:{
        color:'white'
    }
});