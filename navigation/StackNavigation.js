import { createStackNavigator } from '@react-navigation/stack';
import Registration from "../screen/Registration";
import Authorization from '../screen/Authorization';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Authorization' component={Authorization} options={{headerShown: false}}/>
            <Stack.Screen name='Registration' component={Registration} options={{headerShown: false}} />
            {/* //TODO Main menu */}
            {/* //TODO Error */}
        </Stack.Navigator>
    );
}