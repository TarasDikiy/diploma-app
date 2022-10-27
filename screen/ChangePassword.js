import { Text, TextInput,  TouchableOpacity,  View } from "react-native";
import auth from "../styles/auth";

export default function ChangePassword({ navigation }) {
    return (
        <View style={auth.container}>
            <View style={auth.authView}>
            <Text style={auth.authHeader}>Change Password</Text>
            <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Password" />
            <TextInput secureTextEntry={true} style={auth.authInput} placeholder="New password" />
            <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Repeat new password" />
            <TouchableOpacity style={auth.authBtn}>
                <Text style={auth.authBtn.text}>Apply</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}