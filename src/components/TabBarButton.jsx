import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { icons } from '../../assets/icons';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TabBarButton = (props) => {
    const { isFocused, label, routeName, color, onPress, onLongPress } = props;

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(
            isFocused ? 1 : 0,
            { duration: 350 }
        );
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(
            scale.value,
            [0, 1],
            [0.8, 1.2]
        );

        return {
            transform: [{ scale: scaleValue }],
        }
    });

    const IconComponent = icons[routeName];

    return (
        <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.container}>
            <Animated.View style={[animatedIconStyle]}>
                {IconComponent && <IconComponent color={color} />}
            </Animated.View>
            
            <Animated.Text style={{ 
                color,
                fontSize: 11
            }}>
                {label}
            </Animated.Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
});

export default TabBarButton;
