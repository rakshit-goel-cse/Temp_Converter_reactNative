import { Text, TextInput, View } from "react-native";
import { instyle } from "./input-style";
import { useState } from "react";
export function Input({ value, onChange, toCelsius, symbol}) {
  return (
    <View style={{ alignSelf: "stretch" }}>
      <TextInput
        style={instyle.textInput}
        placeholder="Type Your Temperature"
        maxLength={5}
        keyboardType="numeric"
        onChangeText={(value) => {
            //console.log(value);
            onChange(value);
        }}
        defaultValue={value.toString()}
      />
      <Text style={instyle.unit}>{symbol(!toCelsius)}</Text>
    </View>
  );
}
