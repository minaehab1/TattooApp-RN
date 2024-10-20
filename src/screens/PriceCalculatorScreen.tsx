import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

const PriceCalculatorScreen = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [showStyleDropdown, setShowStyleDropdown] = useState(false);
  const [detailsLevel, setDetailsLevel] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);
  const [discountCode, setDiscountCode] = useState('');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculatePrice = () => {
    // This is a placeholder calculation
    const basePrice = 200;
    const discount = 20;
    return { subtotal: basePrice, discount, total: basePrice - discount };
  };

  const { subtotal, discount, total } = calculatePrice();

  const renderStyleSelection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Style Selection</Text>
      <TouchableOpacity 
        style={styles.dropdown}
        onPress={() => setShowStyleDropdown(!showStyleDropdown)}
      >
        <Text>{selectedStyles.length > 0 ? selectedStyles.join(', ') : 'Select styles'}</Text>
        <Ionicons name={showStyleDropdown ? "chevron-up" : "chevron-down"} size={24} color="#000" />
      </TouchableOpacity>
      {showStyleDropdown && (
        <View style={styles.dropdownContent}>
          {['Item 01', 'Item 02', 'Item 03', 'Item 04'].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.checkboxItem}
              onPress={() => {
                if (selectedStyles.includes(item)) {
                  setSelectedStyles(selectedStyles.filter(style => style !== item));
                } else {
                  setSelectedStyles([...selectedStyles, item]);
                }
              }}
            >
              <Ionicons 
                name={selectedStyles.includes(item) ? "checkbox" : "square-outline"} 
                size={24} 
                color="#607AFB" 
              />
              <Text style={styles.checkboxText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  const renderDetailsLevel = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Details Level</Text>
      <View style={styles.detailsLevelContainer}>
        {['Low', 'Medium', 'High'].map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.detailsLevelOption,
              detailsLevel === level && styles.detailsLevelOptionSelected
            ]}
            onPress={() => setDetailsLevel(level as 'Low' | 'Medium' | 'High')}
          >
            <Text style={[
              styles.detailsLevelText,
              detailsLevel === level && styles.detailsLevelTextSelected
            ]}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderSizeSpecification = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Size Specification</Text>
      <View style={styles.sliderContainer}>
        <Text>Height: {Math.round(height)} cm</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={100}
          value={height}
          onValueChange={(value) => setHeight(Math.round(value))}
          minimumTrackTintColor="#607AFB"
          maximumTrackTintColor="#D1D5DB"
          step={1}
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text>Width: {Math.round(width)} cm</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={100}
          value={width}
          onValueChange={(value) => setWidth(Math.round(value))}
          minimumTrackTintColor="#607AFB"
          maximumTrackTintColor="#D1D5DB"
          step={1}
        />
      </View>
    </View>
  );

  const renderDiscounts = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Apply Discounts</Text>
      <View style={styles.discountInputContainer}>
        <Ionicons name="pricetag" size={24} color="#607AFB" />
        <TextInput
          style={styles.discountInput}
          placeholder="Enter discount code"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
      </View>
      <Button title="Apply Discount" onPress={() => console.log('Apply discount')} />
    </View>
  );

  const renderEstimateSummary = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Estimate Summary</Text>
      <View style={styles.estimateDetails}>
        <View style={styles.estimateRow}>
          <Text>Subtotal:</Text>
          <Text>${subtotal}</Text>
        </View>
        <View style={styles.estimateRow}>
          <Text>Discount:</Text>
          <Text>${discount}</Text>
        </View>
        <View style={styles.estimateRow}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>${total}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.breakdownToggle}
        onPress={() => setShowBreakdown(!showBreakdown)}
      >
        <Text>Show Price Breakdown</Text>
        <Ionicons name={showBreakdown ? "chevron-up" : "chevron-down"} size={24} color="#000" />
      </TouchableOpacity>
      {showBreakdown && (
        <View style={styles.breakdownDetails}>
          <View style={styles.estimateRow}>
            <Text>Total Hours:</Text>
            <Text>5</Text>
          </View>
          <View style={styles.estimateRow}>
            <Text>Rate per Hour:</Text>
            <Text>$100</Text>
          </View>
        </View>
      )}
      <View style={styles.warningBox}>
        <Ionicons name="warning" size={24} color="#EF4444" />
        <Text style={styles.warningText}>Final pricing is provided after consulting with me for accuracy.</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Tattoo Price Calculator</Text>
        {renderStyleSelection()}
        {renderDetailsLevel()}
        {renderSizeSpecification()}
        {renderDiscounts()}
        {renderEstimateSummary()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingTop: 0,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
  },
  dropdownContent: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    padding: 8,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxText: {
    marginLeft: 8,
  },
  detailsLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsLevelOption: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    marginHorizontal: 4,
  },
  detailsLevelOptionSelected: {
    backgroundColor: '#607AFB',
  },
  detailsLevelText: {
    color: '#000',
  },
  detailsLevelTextSelected: {
    color: '#FFFFFF',
  },
  sliderContainer: {
    marginBottom: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  discountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  discountInput: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 8,
  },
  estimateDetails: {
    marginBottom: 12,
  },
  estimateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  totalText: {
    fontWeight: 'bold',
  },
  breakdownToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  breakdownDetails: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  warningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    borderRadius: 4,
    padding: 12,
    marginTop: 12,
  },
  warningText: {
    color: '#EF4444',
    marginLeft: 8,
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: 8,
    marginBottom: 16,
  },
  disclaimer: {
    textAlign: 'center',
    color: '#666',
    marginTop: 24,
    marginBottom: 24,
    marginHorizontal: 8,
  },
});

export default PriceCalculatorScreen;
