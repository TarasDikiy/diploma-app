import { createStackNavigator } from '@react-navigation/stack';
import Splash from "../screen/Splash";
import Authorization from '../screen/Authorization';

const Stack = createStackNavigator();

export default function StackNavigation() {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} /> */}
            <Stack.Screen name='Authorization' component={Authorization}/>
        </Stack.Navigator>
    );
}