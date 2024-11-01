import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

interface StyledProps {
  isSelected?: boolean;
}

const CheckmarkCircle = () => (
  <View style={{ position: 'relative', width: 26, height: 26, alignItems: 'center', justifyContent: 'center' }}>
    <Ionicons 
      name="ellipse" 
      size={26}
      color="#FFFFFF" 
      style={{ 
        position: 'absolute',
      }}
    />
    <Ionicons 
      name="checkmark-circle" 
      size={20}
      color="#607AFB" 
    />
  </View>
);

const PriceCalculatorScreen = () => {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [showStyleDropdown, setShowStyleDropdown] = useState(false);
  const [detailsLevel, setDetailsLevel] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [height, setHeight] = useState(25);
  const [width, setWidth] = useState(25);

  const getSelectedStylesText = () => {
    if (selectedStyles.length === 0) return 'Select styles';
    return selectedStyles.join(', ');
  };

  const toggleStyle = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['bottom']}>
      <ScrollView>
        <Container>
          <WarningContainer>
            <WarningIcon>
              <Ionicons name="warning-outline" size={20} color="#d35b5f" />
            </WarningIcon>
            <WarningText>
              Final pricing is provided after consulting with me for accuracy.
            </WarningText>
          </WarningContainer>

          <StyleSelectionSection>
            <SectionTitle>Style Selection</SectionTitle>
            <StyleDropdown onPress={() => setShowStyleDropdown(!showStyleDropdown)}>
              <StyleText>{getSelectedStylesText()}</StyleText>
              <Ionicons 
                name={showStyleDropdown ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#6478f2" 
              />
            </StyleDropdown>
          </StyleSelectionSection>

          {showStyleDropdown && (
            <StyleOptionsContainer>
              <StyleOptionsCard>
                <StyleOption 
                  isSelected={selectedStyles.includes('Minimalist')}
                  onPress={() => toggleStyle('Minimalist')}
                >
                  {selectedStyles.includes('Minimalist') ? <CheckmarkCircle /> : <EmptyCircle />}
                  <StyleName>Minimalist</StyleName>
                  <DurationBadge>
                    <DurationText>5-7 days</DurationText>
                  </DurationBadge>
                </StyleOption>
                <StyleOption 
                  isSelected={selectedStyles.includes('Geometric')}
                  onPress={() => toggleStyle('Geometric')}
                >
                  {selectedStyles.includes('Geometric') ? <CheckmarkCircle /> : <EmptyCircle />}
                  <StyleName>Geometric</StyleName>
                  <DurationBadge>
                    <DurationText>5-7 days</DurationText>
                  </DurationBadge>
                </StyleOption>
                <StyleOption 
                  isSelected={selectedStyles.includes('Dotwork')}
                  onPress={() => toggleStyle('Dotwork')}
                >
                  {selectedStyles.includes('Dotwork') ? <CheckmarkCircle /> : <EmptyCircle />}
                  <StyleName>Dotwork</StyleName>
                  <DurationBadge>
                    <DurationText>1-2 days</DurationText>
                  </DurationBadge>
                </StyleOption>
              </StyleOptionsCard>
            </StyleOptionsContainer>
          )}

          <DetailsLevelSection>
            <SectionTitle>Details Level</SectionTitle>
            <ButtonGroup>
              <LevelButton 
                isSelected={detailsLevel === 'Low'}
                onPress={() => setDetailsLevel('Low')}
              >
                <ButtonText isSelected={detailsLevel === 'Low'}>Low</ButtonText>
              </LevelButton>
              <LevelButton 
                isSelected={detailsLevel === 'Medium'}
                onPress={() => setDetailsLevel('Medium')}
              >
                <ButtonText isSelected={detailsLevel === 'Medium'}>Medium</ButtonText>
              </LevelButton>
              <LevelButton 
                isSelected={detailsLevel === 'High'}
                onPress={() => setDetailsLevel('High')}
              >
                <ButtonText isSelected={detailsLevel === 'High'}>High</ButtonText>
              </LevelButton>
            </ButtonGroup>
          </DetailsLevelSection>

          <SizeSection>
            <SectionTitle>Size Specification</SectionTitle>
            <SizeRow>
              <SizeLabel>Height: {height} cm</SizeLabel>
              <CustomSlider
                minimumValue={1}
                maximumValue={50}
                value={height}
                onValueChange={(value) => setHeight(Math.round(value))}
                minimumTrackTintColor="#6478f2"
                maximumTrackTintColor="#cdd3fb"
                step={1}
              />
            </SizeRow>
            <SizeRow>
              <SizeLabel>Width: {width} cm</SizeLabel>
              <CustomSlider
                minimumValue={1}
                maximumValue={50}
                value={width}
                onValueChange={(value) => setWidth(Math.round(value))}
                minimumTrackTintColor="#6478f2"
                maximumTrackTintColor="#cdd3fb"
                step={1}
              />
            </SizeRow>
          </SizeSection>

          <DiscountSection>
            <DiscountInput>
              <DiscountInputLeft>
                <Ionicons name="pricetag-outline" size={24} color="#6478f2" />
                <DiscountText>Enter Discount Code</DiscountText>
              </DiscountInputLeft>
              <ApplyText>Apply</ApplyText>
            </DiscountInput>
            <VoucherButton>
              <VoucherText>Vouchers</VoucherText>
            </VoucherButton>
          </DiscountSection>

          <AppliedDiscounts>
            <DiscountTag>
              <DiscountTagText>5% Discount</DiscountTagText>
              <Ionicons name="close" size={16} color="#FFFFFF" />
            </DiscountTag>
            <DiscountTag>
              <DiscountTagText>5% Discount</DiscountTagText>
              <Ionicons name="close" size={16} color="#FFFFFF" />
            </DiscountTag>
            <DiscountTag>
              <DiscountTagText>5% Discount</DiscountTagText>
              <Ionicons name="close" size={16} color="#FFFFFF" />
            </DiscountTag>
          </AppliedDiscounts>

          <SummarySection>
            <SectionTitle>Estimate Summary</SectionTitle>
            <SummaryRow>
              <SummaryLabel>Subtotal:</SummaryLabel>
              <SummaryValue>$200</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel style={{ color: '#d15151' }}>Discount:</SummaryLabel>
              <SummaryValue style={{ color: '#d15151' }}>$20</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel style={{ fontWeight: 'bold' }}>Total:</SummaryLabel>
              <SummaryValue style={{ fontWeight: 'bold' }}>$180</SummaryValue>
            </SummaryRow>

            <BreakdownButton onPress={() => setShowBreakdown(!showBreakdown)}>
              <BreakdownText>Show Price Breakdown</BreakdownText>
              <Ionicons 
                name={showBreakdown ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="#171a1f" 
              />
            </BreakdownButton>

            {showBreakdown && (
              <BreakdownDetails>
                <BreakdownRow>
                  <BreakdownLabel>Total Hours:</BreakdownLabel>
                  <BreakdownValue>5</BreakdownValue>
                </BreakdownRow>
                <BreakdownRow>
                  <BreakdownLabel>Rate per Hour:</BreakdownLabel>
                  <BreakdownValue>$100</BreakdownValue>
                </BreakdownRow>
              </BreakdownDetails>
            )}
          </SummarySection>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

// Add styled components
const Container = styled.View`
  padding: 20px 20px 100px 20px;
  background-color: #ffffff;
`;

const WarningContainer = styled.View`
  border-radius: 10px;
  padding: 12px 16px;
  background-color: #fef2f2;
  border: 1px solid #fefefe;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const WarningText = styled.Text`
  font-size: 11px;
  color: #d35b5f;
  flex: 1;
  margin-left: 8px;
`;

const WarningIcon = styled.View`
  margin-right: 0;
`;

const StyleSelectionSection = styled.View`
  margin-bottom: 24px;
`;

const SectionTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #040404;
  margin-bottom: 12px;
`;

const StyleDropdown = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #fefefe;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const StyleText = styled.Text`
  font-size: 13px;
  color: #19191b;
`;

const StyleOptionsContainer = styled.View`
  margin-top: -15px;
  margin-bottom: 16px;
  z-index: 1000;
`;

const StyleOptionsCard = styled.View`
  background-color: #fefefe;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
  padding: 13px 1px;
  margin-bottom: 8px;
`;

const StyleOption = styled.TouchableOpacity<{ isSelected?: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background-color: ${({ isSelected }: StyledButtonProps) => 
    isSelected ? '#E8EAFF' : '#F9F9F9'};
  height: 42px;
  border-radius: 8px;
  margin: 2px 8px;
  border: 1px solid ${({ isSelected }: StyledButtonProps) => 
    isSelected ? 'transparent' : '#FFFFFF'};
`;

const StyleName = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-left: 12px;
`;

const DurationBadge = styled.View`
  background-color: #FFFFFF;
  border-radius: 4px;
  padding: 0px 8px;
  margin-left: auto;
  height: 22px;
  justify-content: center;
  align-items: center;
`;

const DurationText = styled.Text`
  font-size: 12px;
  color: #607AFB;
  font-weight: 500;
  line-height: 22px;
`;

const DetailsLevelSection = styled.View`
  margin-bottom: 24px;
`;

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

const LevelButton = styled.TouchableOpacity<{ isSelected?: boolean }>`
  flex: 1;
  height: 33px;
  border-radius: 20px;
  background-color: ${props => props.isSelected ? '#6478f2' : '#e5e5fc'};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text<{ isSelected?: boolean }>`
  font-size: 14px;
  color: ${props => props.isSelected ? '#ffffff' : '#6478f2'};
  font-weight: 500;
`;

const SizeSection = styled.View`
  margin-bottom: 24px;
`;

const SizeRow = styled.View`
  margin-bottom: 16px;
`;

const SizeLabel = styled.Text`
  font-size: 13px;
  color: #242424;
  margin-bottom: 8px;
`;

const CustomSlider = styled(Slider)`
  width: 100%;
  height: 22px;
`;

const DiscountSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const DiscountInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: #f2f2f2;
  border-radius: 20px;
`;

const DiscountInputLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DiscountText = styled.Text`
  font-size: 14px;
  color: #c6c6c6;
  margin-left: 8px;
`;

const ApplyButton = styled.TouchableOpacity`
  margin-left: 12px;
`;

const ApplyText = styled.Text`
  font-size: 15px;
  color: #6478f2;
  font-weight: 600;
`;

const VoucherButton = styled.TouchableOpacity`
  background-color: #e5e5fc;
  border: 1px solid #6478f2;
  border-radius: 20px;
  padding: 12px 16px;
  margin-left: 12px;
  height: 39px;
  justify-content: center;
  align-items: center;
`;

const VoucherText = styled.Text`
  font-size: 13px;
  color: #6478f2;
  font-weight: 600;
`;

const AppliedDiscounts = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const DiscountTag = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #6478f2;
  border-radius: 20px;
  padding: 4px 12px;
`;

const DiscountTagText = styled.Text`
  font-size: 12px;
  color: #ffffff;
  margin-right: 8px;
`;

const SummarySection = styled.View`
  border: 1px solid #f3f4f6;
  border-radius: 10px;
  padding: 16px;
  background-color: #fefefe;
`;

const SummaryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const SummaryLabel = styled.Text`
  font-size: 12px;
  color: #6d6d6d;
`;

const SummaryValue = styled.Text`
  font-size: 12px;
  color: #6d6d6d;
`;

const BreakdownButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #bdc1ca;
  border-radius: 10px;
  margin-top: 12px;
  height: 42px;
`;

const BreakdownText = styled.Text`
  font-size: 12px;
  color: #171a1f;
`;

const BreakdownDetails = styled.View`
  margin-top: 12px;
`;

const BreakdownRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const BreakdownLabel = styled.Text`
  font-size: 12px;
  color: #1e1e1e;
`;

const BreakdownValue = styled.Text`
  font-size: 13px;
  color: #1e1e1e;
`;

const EmptyCircle = () => (
  <View style={{ position: 'relative', width: 26, height: 26, alignItems: 'center', justifyContent: 'center' }}>
    <Ionicons 
      name="ellipse" 
      size={26}
      color="#FFFFFF" 
      style={{ 
        position: 'absolute',
      }}
    />
    <Ionicons 
      name="ellipse" 
      size={20}
      color="#EFEFEF"
    />
  </View>
);

export default PriceCalculatorScreen;
