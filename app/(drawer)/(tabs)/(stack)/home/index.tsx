import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/profile")}
        >
          Profile
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/settings")}
        >
          Settings
        </CustomButton>

        <Link href="/(drawer)/(tabs)/(stack)/products" asChild>
          <CustomButton className="mb-10" color="primary" variant="text-only">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
        {/* <Link className="mb-5" href="./products">
          Productos
        </Link>
        <Link className="mb-5" href="./profile">
          Perfil
        </Link>
        <Link className="mb-5" href="./settings">
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
