import React from "react";
import { Stack } from "expo-router";
import CounterProvider from "../service/CounterSlice";

export default function _layout() {
  return (
    <CounterProvider>
      {/* <CartProvider> */}
      <Stack />
      {/* </CartProvider> */}
    </CounterProvider>
  );
}
