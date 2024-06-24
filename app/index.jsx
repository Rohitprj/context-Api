import { View, Text, Button, Pressable } from "react-native";
import React, { useContext, useEffect } from "react";
import { CounterConsumer } from "../service/CounterSlice";

export default function index() {
  const { CounterData, IncreaseValue } = useContext(CounterConsumer);
  // const { CartData, increaseCart } = useContext(CartConsumer);


  return (
    <View>
      <Text>Counter Data {CounterData}</Text>
      <Pressable
      onPress={IncreaseValue}
      >
        <Text>Increase</Text>
      </Pressable>

      {/* <Text>index {CartData}</Text>

      <Button title="increase" onPress={increaseCart} /> */}
    </View>
  );
}
