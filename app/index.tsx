import { View, Text } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

const App = () => {
  // return <Redirect href="/home" />;
  // return <Redirect href="/tabs" />;
  return <Redirect href="/drawer" />;

  // <SafeAreaView>
  //   <View className="mt-6 mx-2.5">
  //     <Text className="text-5xl " style={{ fontFamily: "WorkSans-Black" }}>
  //       Hola mundo
  //     </Text>
  //     <Text className="text-4xl font-work-black text-primary">
  //       Hola mundo
  //     </Text>
  //     <Text className="text-3xl font-work-light text-secondary">
  //       Hola mundo
  //     </Text>
  //     <Text className="text-2xl font-work-medium text-secondary-100">
  //       Hola mundo
  //     </Text>
  //     <Text className="text-2xl font-work-medium text-tertiary">
  //       Hola mundo
  //     </Text>
  //     <Link href="/products">Productos</Link>
  //   </View>
  // </SafeAreaView>
};

export default App;
