import { useState } from "react";
import { Text, TextInput,  TouchableOpacity,  View } from "react-native";
import auth from "../styles/auth";
import AuthorizeController from "../controllers/Authorization"

export default function Authorization({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={auth.container}>
            <View style={auth.authView}>
                <Text style={auth.authHeader}>Authorization</Text>
                <TextInput style={auth.authInput} placeholder="Email" onChangeText={(email) => setEmail(email)}/>
                <TextInput secureTextEntry={true} style={auth.authInput} placeholder="Password" onChangeText={(password) => setPassword(password)}/>
                <TouchableOpacity style={auth.authBtn} onPress={() => {AuthorizeController(email,  password)}}>
                    <Text style={auth.authBtn.text}>Authorize</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={auth.footer.text} onPress={() => navigation.navigate('Registration')}>Create new account</Text>
            </View>
        </View>
    );
}