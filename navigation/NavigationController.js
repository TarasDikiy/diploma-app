import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

export default function NavigationController() {
    return(
       <NavigationContainer>
            <StackNavigation/>
       </NavigationContainer> 
    );
}