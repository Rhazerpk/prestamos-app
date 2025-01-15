import { View, ViewProps } from "react-native";
import React from "react";

interface Props extends ViewProps {
  className?: string;
}

const ThemedCard = ({ className, children, ...rest }: Props) => {
  return (
    <View
      className={`bg-dark dark::bg-black/10 rounded-xl p-2 shadow-black/5 ${className}`}
      {...rest}
    >
      {children}
    </View>
  );
};

export default ThemedCard;
