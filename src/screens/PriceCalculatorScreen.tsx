import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Slider from '@react-native-community/slider';

const PriceCalculatorScreen = () => {
  const [size, setSize] = useState(5);
  const [complexity, setComplexity] = useState(1);

  const calculatePrice = () => {
    const basePrice = 50;
    const sizeMultiplier = size * 10;
    const complexityMultiplier = complexity * 20;
    return basePrice + sizeMultiplier + complexityMultiplier;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Price Calculator</Text>
        
        <View style={styles.card}>
          <View style={styles.sliderContainer}>
            <Text style={styles.label}>Size (inches): {size}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={20}
              step={1}
              value={size}
              onValueChange={setSize}
              minimumTrackTintColor="#607AFB"
              maximumTrackTintColor="#e0e0e0"
              thumbTintColor="#607AFB"
            />
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.label}>Complexity (1-5): {complexity}</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              step={1}
              value={complexity}
              onValueChange={setComplexity}
              minimumTrackTintColor="#607AFB"
              maximumTrackTintColor="#e0e0e0"
              thumbTintColor="#607AFB"
            />
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Estimated Price:</Text>
            <Text style={styles.priceText}>${calculatePrice()}</Text>
          </View>
        </View>

        <Button 
          title="Add to Cart" 
          onPress={() => console.log('Add to cart')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sliderContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#607AFB',
  },
});

export default PriceCalculatorScreen;
