import { Text, TextInput,  TouchableOpacity,  View } from "react-native";
import global from "../styles/global";

export default function Authorization() {
    return (
        <View style={global.dummy}>
            <Text>Authorization</Text>
            <TextInput></TextInput>
            <TouchableOpacity>
                <Text>Go</Text>
            </TouchableOpacity>
        </View>
    );
}