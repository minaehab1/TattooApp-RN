import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export const icons = {
    Home: (props) => <AntDesign name="home" size={26} {...props} />,
    Booking: (props) => <AntDesign name="calendar" size={26} {...props} />,
    Rewards: (props) => <MaterialIcons name="star" size={26} {...props} />,
    Calculator: (props) => <MaterialIcons name="calculate" size={26} {...props} />,
    Cart: (props) => <Feather name="shopping-cart" size={26} {...props} />,
};
