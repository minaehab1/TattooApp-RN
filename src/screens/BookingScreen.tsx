import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

interface StyledButtonProps {
  isSelected?: boolean;
  variant?: 'small' | 'medium' | 'large';
}

interface StyledTextProps {
  isSelected?: boolean;
}

// Add proper typing for the styled-components props
type StyledComponentProps = {
  isSelected?: boolean;
  variant?: 'small' | 'medium' | 'large';
};

const BookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState('18');
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['bottom']}>
      <ScrollView>
        <Container>
          <WarningBanner>
            <WarningIcon>
              <Ionicons name="warning-outline" size={16} color="#FF4444" />
            </WarningIcon>
            <WarningText>Please arrive 15 minutes before your scheduled time.</WarningText>
          </WarningBanner>

          <Section>
            <SectionTitle>Booking Instructions</SectionTitle>
            <InstructionList>
              <Instruction>1. Select a service from the list.</Instruction>
              <Instruction>2. Choose your preferred artist.</Instruction>
              <Instruction>3. Pick an available date and time slot.</Instruction>
              <Instruction>4. Confirm your booking details.</Instruction>
            </InstructionList>
          </Section>

          <CalendarCard>
            <CalendarHeader>
              <MonthNav>
                <Ionicons name="chevron-back" size={24} color="#607AFB" />
              </MonthNav>
              <MonthButton>
                <MonthText>April</MonthText>
              </MonthButton>
              <MonthNav>
                <Ionicons name="chevron-forward" size={24} color="#607AFB" />
              </MonthNav>
            </CalendarHeader>

            <CalendarGrid>
              {Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')).map((day) => (
                <DayButton 
                  key={day}
                  isSelected={day === selectedDate}
                  onPress={() => setSelectedDate(day)}
                >
                  <DayText isSelected={day === selectedDate}>{day}</DayText>
                </DayButton>
              ))}
            </CalendarGrid>
            <CalendarBottom>
              <Ionicons name="chevron-up" size={24} color="#607AFB" />
            </CalendarBottom>
          </CalendarCard>

          <TimePickerContainer>
            <TimePickerButton onPress={() => setShowTimeSlots(!showTimeSlots)}>
              <TimePickerLeft>
                <Ionicons name="time-outline" size={20} color="#607AFB" />
                <TimePickerText>Choose a time slot.</TimePickerText>
              </TimePickerLeft>
              <Ionicons 
                name={showTimeSlots ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#607AFB"
              />
            </TimePickerButton>

            {showTimeSlots && (
              <TimeSlotsCard>
                {['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                  <TimeSlot key={time}>{time}</TimeSlot>
                ))}
              </TimeSlotsCard>
            )}
          </TimePickerContainer>

          <Section>
            <SectionTitle>Details Level</SectionTitle>
            <SizeButtonsContainer>
              {['Small', 'Medium', 'Large'].map((size) => (
                <SizeButton 
                  key={size}
                  isSelected={selectedSize === size.toLowerCase()}
                  onPress={() => setSelectedSize(size.toLowerCase() as 'small' | 'medium' | 'large')}
                >
                  <SizeButtonText isSelected={selectedSize === size.toLowerCase()}>
                    {size}
                  </SizeButtonText>
                </SizeButton>
              ))}
            </SizeButtonsContainer>
          </Section>

          <TextArea
            placeholder="Describe your tattoo idea...."
            placeholderTextColor="#C8C8C9"
            multiline
          />

          <BookButton>
            <BookButtonText>Book Appointment</BookButtonText>
          </BookButton>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styled components
const Container = styled.View`
  padding: 20px 20px 100px 20px;
  background-color: #ffffff;
`;

const TextArea = styled.TextInput`
  border-radius: 15px;
  height: 99px;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #d1d1d9;
  padding: 12px;
  font-size: 14px;
  color: #1c1c1c;
  margin-bottom: 24px;
`;

const Section = styled.View`
  margin-bottom: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #040404;
  margin-bottom: 12px;
`;

const SizeButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

const SizeButton = styled.TouchableOpacity<StyledButtonProps>`
  flex: 1;
  height: 35px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }: StyledButtonProps) => 
    isSelected ? '#6478f2' : '#e5e5fc'};
`;

const SizeButtonText = styled.Text<StyledTextProps>`
  font-size: 14px;
  color: ${({ isSelected }: StyledTextProps) => 
    isSelected ? '#ffffff' : '#6478f2'};
  font-weight: 500;
  padding: 0 12px;
`;

const CalendarCard = styled.View`
  background-color: #ffffff;
  border-radius: 25px;
  padding: 16px;
  margin-bottom: 40px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.08;
  shadow-radius: 12px;
  elevation: 3;
  position: relative;
  padding-bottom: 24px;
`;

const CalendarHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const MonthNav = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #F0F1FF;
  align-items: center;
  justify-content: center;
`;

const MonthButton = styled.View`
  background-color: #F0F1FF;
  height: 40px;
  padding: 0 48px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const MonthText = styled.Text`
  color: #607afb;
  font-size: 16px;
  font-weight: 600;
`;

const CalendarGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
  gap: 8px;
`;

const DayButton = styled.TouchableOpacity<StyledButtonProps>`
  height: 31px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: ${({ isSelected }: StyledButtonProps) => 
    isSelected ? '#607afb' : '#F9F9F9'};
`;

const DayText = styled.Text<StyledTextProps>`
  font-size: 15px;
  color: ${({ isSelected }: StyledTextProps) => 
    isSelected ? '#ffffff' : '#333333'};
  font-weight: ${({ isSelected }: StyledTextProps) => 
    isSelected ? 'bold' : 'normal'};
`;

const TimePickerContainer = styled.View`
  margin-bottom: 20px;
`;

const TimePickerButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 15px;
  background-color: #ffffff;
  border: none;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.08;
  shadow-radius: 12px;
  elevation: 3;
`;

const TimePickerLeft = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const TimePickerText = styled.Text`
  font-size: 15px;
  color: #1c1c1c;
`;

const TimeSlotsCard = styled.View`
  margin-top: 8px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 8px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.08;
  shadow-radius: 12px;
  elevation: 3;
`;

const TimeSlot = styled.Text`
  padding: 12px 16px;
  font-size: 15px;
  color: #3d3d3d;
`;

const InstructionList = styled.View`
  gap: 8px;
`;

const Instruction = styled.Text`
  font-size: 14px;
  color: #393939;
  line-height: 22px;
`;

const WarningBanner = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background-color: #FEF2F2;
  border-radius: 15px;
  margin-bottom: 24px;
`;

const WarningIcon = styled.View`
  margin-right: 4px;
`;

const WarningText = styled.Text`
  font-size: 12px;
  color: #d35b5f;
  margin-left: 0;
`;

const BookButton = styled.TouchableOpacity`
  height: 55px;
  width: 100%;
  border-radius: 30px;
  background-color: #5f7afb;
  align-items: center;
  justify-content: center;
`;

const BookButtonText = styled.Text`
  font-size: 15px;
  color: #ffffff;
  font-weight: 500;
`;

const CalendarBottom = styled.View`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-4px);
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 4;
  z-index: 1;
`;

export default BookingScreen;
