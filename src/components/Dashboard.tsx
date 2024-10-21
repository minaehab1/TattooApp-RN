import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MainBottomNavbar from './MainBottomNavbar';

const CustomBadge = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.badge}>
    <Text style={styles.badgeText}>{children}</Text>
  </View>
);

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Image
              source={require('../../assets/profile-image.jpg')}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.profileName}>Hi, Jodie</Text>
              <Text style={styles.profilePoints}>You have 13,000 points</Text>
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
        
        {/* Add more sections (Booking Status, Gallery, Promotions, News & Events) following the same pattern */}
      </ScrollView>
      <MainBottomNavbar 
        state={navigation.getState()}
        descriptors={navigation.getDescriptors()}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  profileCard: {
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePoints: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginBottom: 16,
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
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  badgeText: {
    fontSize: 12,
    color: '#4CAF50',
  },
});

export default Dashboard;
