import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, DateData } from 'react-native-calendars';
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

  const renderCombinedSection = () => (
    <View style={styles.section}>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity 
          style={styles.dropdown}
          onPress={() => setShowTimeDropdown(!showTimeDropdown)}
        >
          <View style={styles.dropdownContent}>
            <Ionicons name="time-outline" size={24} color="#607AFB" style={styles.clockIcon} />
            <Text>{selectedTime || 'Choose a time slot'}</Text>
          </View>
          <Ionicons name={showTimeDropdown ? "chevron-up" : "chevron-down"} size={24} color="#000" />
        </TouchableOpacity>
        {showTimeDropdown && (
          <View style={styles.dropdownList}>
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
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Book Your Tattoo Appointment</Text>
        {renderArtistSelection()}
        {renderDateSelection()}
        {renderCombinedSection()}
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
  dropdownContainer: {
    marginBottom: 16,
    zIndex: 1,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    padding: 12,
  },
  dropdownContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  clockIcon: {
    marginRight: 8,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    marginTop: 4,
    maxHeight: 200,
    zIndex: 2,
  },
  timeSlotItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
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
    marginBottom: 16,
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
  descriptionInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
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

export default BookingScreen;
