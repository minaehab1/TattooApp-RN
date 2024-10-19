import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RewardsScreen: React.FC = () => {
  const userPoints = 13000;
  const nextLevelPoints = 15000;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Rewards</Text>

      <View style={styles.pointsCard}>
        <Text style={styles.pointsTitle}>Total Points</Text>
        <Text style={styles.pointsValue}>{userPoints}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(userPoints / nextLevelPoints) * 100}%` }]} />
        </View>
        <Text style={styles.nextLevelText}>{nextLevelPoints - userPoints} points to next level</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Redeem Points</Text>
        <TouchableOpacity style={styles.redeemOption}>
          <Ionicons name="gift-outline" size={24} color="#607AFB" style={styles.icon} />
          <View style={styles.redeemOptionInfo}>
            <Text style={styles.redeemOptionTitle}>Free Tattoo Session</Text>
            <Text style={styles.redeemOptionPoints}>10,000 points</Text>
          </View>
          <TouchableOpacity style={styles.redeemButton}>
            <Text style={styles.redeemButtonText}>Redeem</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {/* Add more redeem options here */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <Ionicons name="add-circle-outline" size={24} color="#4CAF50" style={styles.icon} />
          <View style={styles.activityInfo}>
            <Text style={styles.activityTitle}>Earned Points</Text>
            <Text style={styles.activityDescription}>Tattoo Session</Text>
          </View>
          <Text style={styles.activityPoints}>+500</Text>
        </View>
        {/* Add more activity items here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  pointsCard: {
    backgroundColor: '#607AFB',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  pointsTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 8,
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  nextLevelText: {
    fontSize: 14,
    color: 'white',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#444',
  },
  redeemOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 16,
  },
  redeemOptionInfo: {
    flex: 1,
  },
  redeemOptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  redeemOptionPoints: {
    fontSize: 14,
    color: '#666',
  },
  redeemButton: {
    backgroundColor: '#607AFB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  redeemButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
  },
  activityPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default RewardsScreen;
