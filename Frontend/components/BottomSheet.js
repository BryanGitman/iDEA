import React, { useCallback, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const { height : SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 30;

const BottomSheet = () =>
{
    const translateY = useSharedValue(0);

    const scrollTo = useCallback((destination) => {
        'worklet';
        translateY.value = withTiming(destination, {damping: 50});
    }, [])

    const context = useSharedValue({y: 0});

    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = {y: translateY.value}
    })
    .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
        if(translateY.value > -SCREEN_HEIGHT / 5)
        {
            scrollTo(-SCREEN_HEIGHT / 5);
        } 
        else if(translateY.value < -SCREEN_HEIGHT / 5)
        {
            scrollTo(MAX_TRANSLATE_Y);
        }
    });

    useEffect(() => {
        scrollTo(-SCREEN_HEIGHT / 5);
    }, []);

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value, 
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        );
        return{
            borderRadius,
            transform: [{ translateY: translateY.value }]
        };
    })
    
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.container, rBottomSheetStyle]}>
                <View style={styles.line}></View>
            </Animated.View>  
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        shadowColor: 'black',
        elevation: 30,
    },
    line: {
        width: 90,
        height: 6,
        backgroundColor: '#D2D1D1',
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 10
    }
});

export default BottomSheet;