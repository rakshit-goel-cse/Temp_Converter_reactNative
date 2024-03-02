import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, ImageBackground, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App-Style";
import hotimage from "./assets/hot.png";
import coldimage from "./assets/cold.png";
import { Input } from "./components/input.js";
export default function App() {
  const [value, setValue] = useState(0);
  const [toCelsius, setToCelsius] = useState(false);

  const swapDegree=()=>{
    setValue(tempCovert());
    setToCelsius(!toCelsius);
  }

  const symbol = (toCelsius) =>{
    if(!toCelsius){
      return"°F";
    }
    return"°C";
  }

  const tempCovert=()=>{
    if(isNaN(value)) return "";
    if(!toCelsius){
      return ((value-32)/1.8).toFixed(1);
    }
    return ((value*1.8)+32).toFixed(1);
  }

  const imageSource=()=>{
    //console.log("image source");
    if(!toCelsius){
      //console.log("image source to far - "+value);
      if(value<0) return coldimage;
      return hotimage;
    }
    if(toCelsius){
      if(tempCovert()<0) return coldimage;
      return hotimage;
    }
  }

  return (
    <ImageBackground source={imageSource()} style={{ height: "100%" }}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.mainview}>
            <Text style={{
              fontSize:50,
              color:"white"
            }}>{tempCovert()+symbol(toCelsius)}</Text>
            <Input value={value} onChange={setValue} toCelsius={toCelsius} symbol={symbol}/>
            <TouchableOpacity onPress={()=>{swapDegree()}}
              style={s.button}>
              <Text style={s.buttontext}>Swap</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
