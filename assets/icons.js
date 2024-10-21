import { AntDesign, Feather, MaterialIcons, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";

export const icons = {
    Home: (props) => <AntDesign name="home" size={26} {...props} />,
    Booking: (props) => <AntDesign name="calendar" size={26} {...props} />,
    Rewards: (props) => <AntDesign name="gift" size={26} {...props} />,
    Calculator: (props) => <SimpleLineIcons name="calculator" size={26} {...props} />,
    Cart: (props) => <Feather name="shopping-cart" size={26} {...props} />,
};
