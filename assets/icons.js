import { Ionicons, MaterialCommunityIcons, AntDesign, Feather, MaterialIcons, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";

export const icons = {
    Home: ({ focused, ...props }) => (
        <Ionicons name={focused ? "home" : "home-outline"} size={26} {...props} />
    ),
//    Home: ({ focused, ...props }) => (
//        <MaterialCommunityIcons name={focused ? "home-variant" : "home-variant-outline"} size={26} {...props} />
//    ),
    Booking: ({ focused, ...props }) => (
        <Ionicons name={focused ? "calendar" : "calendar-outline"} size={26} {...props} />
    ),
    Rewards: ({ focused, ...props }) => (
        <Ionicons name={focused ? "gift" : "gift-outline"} size={26} {...props} />
    ),
    Calculator: ({ focused, ...props }) => (
        <MaterialCommunityIcons name={focused ? "calculator-variant" : "calculator-variant-outline"} size={26} {...props} />
    ),
    Cart: ({ focused, ...props }) => (
        <Ionicons name={focused ? "cart" : "cart-outline"} size={26} {...props} />
    ),
//  Cart: ({ focused, ...props }) => (
//      <MaterialCommunityIcons name={focused ? "cart" : "cart-outline"} size={26} {...props} />
//    ),
};
