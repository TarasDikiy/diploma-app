import { StatusBar, Text, View } from "react-native";
import global from "../styles/global";

export default function Splash() {
    return(
        <View style={global.dummy}>
            <StatusBar hidden/>
            <Text>This is Registration screen</Text>
        </View>
    );
}