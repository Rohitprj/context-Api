import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const CounterConsumer = createContext();

export default function CounterProvider({ children }) {
  const [CounterData, setCounterData] = useState(0);

  function IncreaseValue() {
    setCounterData((value) => value + 1);
  }

  return (
    <CounterConsumer.Provider
      value={{
        CounterData,
        IncreaseValue,
      }}
    >
      {children}
    </CounterConsumer.Provider>
  );
}
