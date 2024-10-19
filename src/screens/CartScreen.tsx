import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  appointment: string;
}

const CartScreen = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Custom Tattoo Design', price: 150, quantity: 1, appointment: 'Nov 12, 3 PM' },
    { id: '2', name: 'Small Tattoo Session', price: 100, quantity: 1, appointment: 'Nov 12, 3 PM' },
  ]);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const renderCartItem = (item: CartItem) => (
    <View key={item.id} style={styles.cartItem}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price} | Qty: {item.quantity}</Text>
        <Text style={styles.itemAppointment}>Appointment: {item.appointment}</Text>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.quantityButton}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
          <Ionicons name="trash-outline" size={24} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Your Cart</Text>
        
        <View style={styles.cartItems}>
          {cartItems.map(renderCartItem)}
        </View>

        <View style={styles.promoCodeSection}>
          <Text style={styles.sectionTitle}>Promo Code</Text>
          <View style={styles.promoCodeInput}>
            <TextInput 
              style={styles.input} 
              placeholder="Enter promo code"
            />
            <Button title="Apply" onPress={() => {}} />
          </View>
        </View>

        <View style={styles.orderSummary}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text>Subtotal:</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Tax:</Text>
            <Text>${tax.toFixed(2)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalText}>${total.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.showPriceBreakdown}
          onPress={() => setShowBreakdown(!showBreakdown)}
        >
          <Text>Show Price Breakdown</Text>
          <Ionicons name={showBreakdown ? "chevron-up" : "chevron-down"} size={24} color="#000" />
        </TouchableOpacity>

        {showBreakdown && (
          <View style={styles.breakdownDetails}>
            <View style={styles.summaryRow}>
              <Text>Total Hours:</Text>
              <Text>5</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text>Rate per Hour:</Text>
              <Text>$100</Text>
            </View>
          </View>
        )}

        <Button 
          title="Proceed to Checkout" 
          onPress={() => console.log('Proceed to checkout')}
        />

        <Text style={styles.disclaimer}>
          ⚠️ Final pricing is provided after consulting with the artist for accuracy.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  cartItems: {
    marginBottom: 24,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  itemAppointment: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  removeButton: {
    marginLeft: 10,
  },
  promoCodeSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  promoCodeInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginRight: 12,
  },
  orderSummary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 8,
    marginTop: 8,
  },
  totalText: {
    fontWeight: 'bold',
  },
  showPriceBreakdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  breakdownDetails: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  disclaimer: {
    textAlign: 'center',
    color: '#666',
    marginTop: 24,
    marginBottom: 24,
  },
});

export default CartScreen;
