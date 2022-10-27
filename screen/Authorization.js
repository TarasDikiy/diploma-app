import { Text, TextInput,  TouchableOpacity,  View } from "react-native";
import auth from "../styles/auth";

export default function Authorization({ navigation }) {
    return (
        <View style={auth.container}>
            <View style={auth.authView}>
                <Text style={auth.authHeader}>Authorization</Text>
                <TextInput style={auth.authInput} placeholder="Email" />
                <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Password" />
                <TouchableOpacity style={auth.authBtn}>
                    <Text style={auth.authBtn.text} onPress={() => {}}>Authorize</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={auth.footer.text} onPress={() => navigation.navigate('Registration')}>Create new account</Text>
            </View>
        </View>
    );
}