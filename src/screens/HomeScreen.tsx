import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileImagePlaceholder}>
          <Ionicons name="person" size={40} color="#607AFB" />
        </View>
        <View>
          <Text style={styles.greeting}>Hi, Jodie</Text>
          <Text style={styles.pointsText}>You have 13,000 points</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.redeemButton]}>
          <Text style={styles.redeemButtonText}>Redeem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.inviteButton]}>
          <Text style={styles.inviteButtonText}>Invite</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Quick Links</Text>
      <View style={styles.quickLink}>
        <View style={styles.quickLinkContent}>
          <Ionicons name="calendar" size={24} color="#607AFB" style={styles.icon} />
          <View>
            <Text style={styles.quickLinkTitle}>Book a tattoo</Text>
            <Text style={styles.quickLinkSubtitle}>Or a consultation. Use your rewards to pay</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#a0aec0" />
      </View>
      
      {/* Add more sections here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pointsText: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redeemButton: {
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  inviteButton: {
    backgroundColor: '#607AFB',
    marginLeft: 8,
  },
  redeemButtonText: {
    color: 'gray',
  },
  inviteButtonText: {
    color: 'white',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  quickLink: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickLinkContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  quickLinkTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quickLinkSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
