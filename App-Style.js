import { StyleSheet } from "react-native";

export const s=StyleSheet.create(
    {
        root:{
            flex:1,            
            justifyContent:"center",
            padding:10,            
        },
        mainview:{
            justifyContent:"space-evenly",
            alignItems:"center",
            height:"50%",            
        },
        button:{
            paddingVertical:20,
            paddingHorizontal:40,
            backgroundColor:"black",
            borderRadius:30
        },
        buttontext:{
            color:"white",
            fontSize:20
        }
    }
);