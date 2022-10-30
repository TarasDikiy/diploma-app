import { Text, TextInput,  TouchableOpacity,  View } from "react-native";
import auth from "../styles/auth";
import RegisterController from "../controllers/Registration"
import { useState } from "react";

export default function Registration({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    return (
        <View style={auth.container}>
            <View style={auth.authView}>
            <Text style={auth.authHeader}>Registration</Text>
            <TextInput style={auth.authInput} placeholder="Email" onChangeText={(text) => setEmail(text)}/>
            <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Password" onChangeText={(text) => setPassword(text)}/>
            <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Repeat password"  onChangeText={(text) => setRepeatedPassword(text)}/>
            <TouchableOpacity style={auth.authBtn} onPress={() => {RegisterController(email, password, repeatedPassword)}}>
                <Text style={auth.authBtn.text}>Register</Text>
            </TouchableOpacity>
        </View>
            <View>
                <Text style={auth.footer.text} onPress={() => navigation.goBack()}>Back to authorization</Text>
            </View>
        </View>
    );
}