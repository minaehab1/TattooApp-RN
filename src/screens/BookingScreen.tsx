import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BookingScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Book a Tattoo</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
        <View style={styles.appointmentCard}>
          <Ionicons name="calendar" size={24} color="#607AFB" style={styles.icon} />
          <View style={styles.appointmentInfo}>
            <Text style={styles.appointmentTitle}>Consultation</Text>
            <Text style={styles.appointmentDate}>March 15, 2024 - 2:00 PM</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Book New Appointment</Text>
        <TouchableOpacity style={styles.bookingOption}>
          <Ionicons name="create" size={24} color="#607AFB" style={styles.icon} />
          <View style={styles.bookingOptionInfo}>
            <Text style={styles.bookingOptionTitle}>New Tattoo</Text>
            <Text style={styles.bookingOptionDescription}>Book a session for a new tattoo</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#a0aec0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingOption}>
          <Ionicons name="color-palette" size={24} color="#607AFB" style={styles.icon} />
          <View style={styles.bookingOptionInfo}>
            <Text style={styles.bookingOptionTitle}>Touch-up</Text>
            <Text style={styles.bookingOptionDescription}>Schedule a touch-up for existing tattoo</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#a0aec0" />
        </TouchableOpacity>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#444',
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  appointmentDate: {
    fontSize: 14,
    color: '#666',
  },
  detailsButton: {
    backgroundColor: '#607AFB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  detailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bookingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingOptionInfo: {
    flex: 1,
  },
  bookingOptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookingOptionDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default BookingScreen;
