import { Text, TextInput,  TouchableOpacity,  View } from "react-native";
import auth from "../styles/auth";

export default function Registration({ navigation }) {
    return (
        <View style={auth.container}>
            <View style={auth.authView}>
            <Text style={auth.authHeader}>Registration</Text>
            <TextInput style={auth.authInput} placeholder="Email" />
            <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Password" />
            <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Repeat password" />
            <TouchableOpacity style={auth.authBtn}>
                <Text style={auth.authBtn.text}>Register</Text>
            </TouchableOpacity>
        </View>
            <View>
                <Text style={auth.footer.text} onPress={() => navigation.goBack()}>Back to authorization</Text>
            </View>
        </View>
    );
}