import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';

const artists = ['JD', 'Sarah', 'Mike'];
const timeSlots = ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
const tattooSizes = ['Small', 'Medium', 'Large'];

const BookingScreen = () => {
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [tattooDescription, setTattooDescription] = useState('');

  const renderArtistSelection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Select Artist</Text>
      <View style={styles.artistList}>
        {artists.map((artist) => (
          <TouchableOpacity
            key={artist}
            style={[
              styles.artistItem,
              selectedArtist === artist && styles.selectedItem
            ]}
            onPress={() => setSelectedArtist(artist)}
          >
            <Text style={[
              styles.artistName,
              selectedArtist === artist && styles.selectedItemText
            ]}>{artist}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderDateSelection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Select Date</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#607AFB' }
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#607AFB',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#607AFB',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#607AFB',
          selectedDotColor: '#ffffff',
          arrowColor: '#607AFB',
          monthTextColor: '#2d4150',
          indicatorColor: '#607AFB',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
    </View>
  );

  const renderTimeSelection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Select Time</Text>
      <TouchableOpacity 
        style={styles.dropdown}
        onPress={() => setShowTimeDropdown(!showTimeDropdown)}
      >
        <Text>{selectedTime || 'Choose a time slot'}</Text>
        <Ionicons name={showTimeDropdown ? "chevron-up" : "chevron-down"} size={24} color="#000" />
      </TouchableOpacity>
      {showTimeDropdown && (
        <View style={styles.dropdownContent}>
          {timeSlots.map((time) => (
            <TouchableOpacity
              key={time}
              style={styles.timeSlotItem}
              onPress={() => {
                setSelectedTime(time);
                setShowTimeDropdown(false);
              }}
            >
              <Text style={styles.timeSlotText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  const renderTattooDetails = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tattoo Details</Text>
      <View style={styles.sizeList}>
        {tattooSizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeItem,
              selectedSize === size && styles.selectedItem
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={[
              styles.sizeText,
              selectedSize === size && styles.selectedItemText
            ]}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderTattooDescription = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tattoo Description</Text>
      <TextInput
        style={styles.descriptionInput}
        multiline
        numberOfLines={4}
        placeholder="Describe your tattoo idea..."
        value={tattooDescription}
        onChangeText={setTattooDescription}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Book Your Tattoo Appointment</Text>
        {renderArtistSelection()}
        {renderDateSelection()}
        {renderTimeSelection()}
        {renderTattooDetails()}
        {renderTattooDescription()}
        <View style={styles.buttonContainer}>
          <Button 
            title="Book Appointment" 
            onPress={() => console.log('Booking appointment')}
          />
        </View>
        <Text style={styles.disclaimer}>
          ⚠️ Please arrive 15 minutes before your scheduled appointment time.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  artistList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  artistItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  artistName: {
    fontSize: 16,
    color: '#333',
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
    marginTop: 4,
  },
  timeSlotItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
  },
  timeSlotText: {
    fontSize: 16,
    color: '#333',
  },
  sizeList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    marginHorizontal: 4,
  },
  sizeText: {
    fontSize: 16,
    color: '#333',
  },
  selectedItem: {
    backgroundColor: '#607AFB',
  },
  selectedItemText: {
    color: '#FFFFFF',
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  disclaimer: {
    textAlign: 'center',
    color: '#666',
    marginTop: 24,
    marginBottom: 24,
    marginHorizontal: 16,
  },
  descriptionInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
  },
});

export default BookingScreen;
