import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const CheckoutScreen = () => {
  const [selectedShipping, setSelectedShipping] = React.useState<'standard' | 'express'>('standard');
  const [selectedPayment, setSelectedPayment] = React.useState<'credit' | 'paypal' | 'google'>('credit');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 280 }}>
        <Container>
          {/* Contact Information */}
          <ContactInfoCard>
            <ContactTitle>Contact Information</ContactTitle>
            <ContactDetails>
              <ContactText>+84932000000</ContactText>
              <ContactText>amandamorgan@example.com</ContactText>
            </ContactDetails>
            <EditButton>
              <EditButtonCircle>
                <Ionicons name="create-outline" size={14} color="#FFFFFF" />
              </EditButtonCircle>
            </EditButton>
          </ContactInfoCard>

          {/* Items */}
          <SectionTitle>Items <ItemCount>2</ItemCount></SectionTitle>
          <ItemsContainer>
            <ItemCard>
              <ItemImage>
                <ItemImagePlaceholder />
              </ItemImage>
              <ItemQuantity>
                <ItemQuantityText>1</ItemQuantityText>
              </ItemQuantity>
              <ItemInfo>
                <ItemTitle>Small Tattoo Session</ItemTitle>
                <ItemPrice>$170.00</ItemPrice>
              </ItemInfo>
            </ItemCard>

            <ItemCard>
              <ItemImage>
                <ItemImagePlaceholder />
              </ItemImage>
              <ItemQuantity>
                <ItemQuantityText>1</ItemQuantityText>
              </ItemQuantity>
              <ItemInfo>
                <ItemTitle>Custom Tattoo Design</ItemTitle>
                <ItemPrice>$75.00</ItemPrice>
              </ItemInfo>
            </ItemCard>
          </ItemsContainer>

          {/* Shipping Options */}
          <SectionTitle>Shipping Options</SectionTitle>
          <ShippingOptionsContainer>
            <ShippingOption 
              isSelected={selectedShipping === 'standard'} 
              onPress={() => setSelectedShipping('standard')}
            >
              <RadioButtonSelected style={{ backgroundColor: selectedShipping === 'standard' ? '#6478F2' : '#F0F0F0' }}>
                {selectedShipping === 'standard' && (
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                )}
              </RadioButtonSelected>
              <ShippingInfo>
                <ShippingTitle>Standard</ShippingTitle>
                <DeliveryTime>5-7 days</DeliveryTime>
              </ShippingInfo>
              <ShippingPrice>FREE</ShippingPrice>
            </ShippingOption>

            <ShippingOption 
              isSelected={selectedShipping === 'express'} 
              onPress={() => setSelectedShipping('express')}
            >
              <RadioButtonSelected style={{ backgroundColor: selectedShipping === 'express' ? '#6478F2' : '#F0F0F0' }}>
                {selectedShipping === 'express' && (
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                )}
              </RadioButtonSelected>
              <ShippingInfo>
                <ShippingTitle>Express</ShippingTitle>
                <DeliveryTime>1-2 days</DeliveryTime>
              </ShippingInfo>
              <ShippingPrice>$12.00</ShippingPrice>
            </ShippingOption>

            <DeliveryNote>
              Delivered on or before Thursday, 23 April 2020
            </DeliveryNote>
          </ShippingOptionsContainer>

          {/* Payment Method */}
          <SectionTitle>Payment Method</SectionTitle>
          <PaymentMethodCard onPress={() => setSelectedPayment('credit')}>
            <RadioButtonSelected style={{ backgroundColor: selectedPayment === 'credit' ? '#6478F2' : '#F0F0F0' }}>
              {selectedPayment === 'credit' && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </RadioButtonSelected>
            <PaymentIcon>
              <Ionicons name="card" size={24} color="#FF5F00" />
            </PaymentIcon>
            <PaymentInfo>
              <PaymentTitle>Credit Card</PaymentTitle>
              <CardNumber>
                <CardNumberText>5234</CardNumberText>
                <EditIcon>
                  <Ionicons name="create-outline" size={14} color="#FFFFFF" />
                </EditIcon>
              </CardNumber>
            </PaymentInfo>
          </PaymentMethodCard>

          <PaymentMethodCard onPress={() => setSelectedPayment('paypal')}>
            <RadioButtonSelected style={{ backgroundColor: selectedPayment === 'paypal' ? '#6478F2' : '#F0F0F0' }}>
              {selectedPayment === 'paypal' && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </RadioButtonSelected>
            <PaymentIcon>
              <Ionicons name="logo-paypal" size={24} color="#00457C" />
            </PaymentIcon>
            <PaymentInfo>
              <PaymentTitle>PayPal</PaymentTitle>
            </PaymentInfo>
          </PaymentMethodCard>

          <PaymentMethodCard onPress={() => setSelectedPayment('google')}>
            <RadioButtonSelected style={{ backgroundColor: selectedPayment === 'google' ? '#6478F2' : '#F0F0F0' }}>
              {selectedPayment === 'google' && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </RadioButtonSelected>
            <PaymentIcon>
              <Ionicons name="logo-google" size={24} color="#4285F4" />
            </PaymentIcon>
            <PaymentInfo>
              <PaymentTitle>Google Pay</PaymentTitle>
            </PaymentInfo>
          </PaymentMethodCard>

          {/* Discount */}
          <DiscountSection>
            <DiscountInput>
              <DiscountIcon>
                <Ionicons name="pricetag-outline" size={24} color="#6478F2" />
              </DiscountIcon>
              <DiscountText>Enter Discount Code</DiscountText>
              <ApplyText>Apply</ApplyText>
            </DiscountInput>
            <VoucherButton>
              <VoucherText>Vouchers</VoucherText>
            </VoucherButton>
          </DiscountSection>

          <AppliedDiscounts>
            <DiscountTag>
              <DiscountTagText>5% Discount</DiscountTagText>
              <CloseButton>
                <Ionicons name="close" size={16} color="#FFFFFF" />
              </CloseButton>
            </DiscountTag>
            <DiscountTag>
              <DiscountTagText>5% Discount</DiscountTagText>
              <CloseButton>
                <Ionicons name="close" size={16} color="#FFFFFF" />
              </CloseButton>
            </DiscountTag>
            <DiscountTag>
              <DiscountTagText>5% Discount</DiscountTagText>
              <CloseButton>
                <Ionicons name="close" size={16} color="#FFFFFF" />
              </CloseButton>
            </DiscountTag>
          </AppliedDiscounts>
        </Container>
      </ScrollView>

      <OrderSummaryCard>
        <SummaryRow>
          <SummaryText>Subtotal</SummaryText>
          <SummaryAmount>$245.00</SummaryAmount>
        </SummaryRow>
        <Divider />
        <SummaryRow>
          <SummaryText style={{ color: '#d15151' }}>You Saved</SummaryText>
          <SummaryAmount style={{ color: '#d15151' }}>$36.75</SummaryAmount>
        </SummaryRow>
        <Divider />
        <SummaryRow>
          <SummaryText style={{ fontWeight: 'bold' }}>Total</SummaryText>
          <SummaryAmount style={{ fontWeight: 'bold' }}>$208.25</SummaryAmount>
        </SummaryRow>
        <PlaceOrderButton>
          <PlaceOrderText>Place Order</PlaceOrderText>
        </PlaceOrderButton>
      </OrderSummaryCard>
    </SafeAreaView>
  );
};

// Styled Components
const Container = styled.View`
  padding: 20px;
  padding-bottom: 0px;
  background-color: #ffffff;
`;

const ContactInfoCard = styled.View`
  width: 100%;
  height: 85px;
  border-radius: 10px;
  background-color: #f9f9f9;
  padding: 16px;
  margin-bottom: 20px;
  position: relative;
`;

const ContactTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #202020;
  letter-spacing: -0.14px;
  margin-bottom: 2px;
  margin-top: -6px;
`;

const ContactDetails = styled.View`
  flex-direction: column;
  gap: 0px;
  margin-top: 4px;
`;

const ContactText = styled.Text`
  font-size: 10px;
  line-height: 15px;
  color: #000000;
  font-family: Nunito Sans;
`;

const EditButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-16px);
`;

const EditButtonCircle = styled.View`
  width: 31px;
  height: 31px;
  border-radius: 15.5px;
  background-color: #6478F2;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #202020;
  margin-bottom: 16px;
  margin-top: 20px;
`;

const PaymentMethodCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 4px;
  position: relative;
`;

const PaymentIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #F8F8F8;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  border: 1px solid #F0F0F0;
`;

const PaymentInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const PaymentTitle = styled.Text`
  font-size: 13px;
  color: #393939;
  font-weight: 600;
  margin-right: 12px;
`;

const CardNumber = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #E8EAFF;
  border-radius: 20px;
  padding: 4px 12px;
  width: auto;
`;

const CardNumberText = styled.Text`
  color: #6478F2;
  font-size: 13px;
  margin-right: 8px;
`;

const EditIcon = styled.View`
  width: 24px;
  height: 24px;
  background-color: #6478F2;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const RadioButton = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #FFFFFF;
  background-color: #F0F0F0;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  position: relative;
`;

const RadioButtonSelected = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #FFFFFF;
  background-color: #6478F2;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  position: relative;
`;

const OrderSummaryCard = styled.View`
  background-color: #FFFFFF;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: 0px -4px;
  shadow-opacity: 0.15;
  shadow-radius: 15px;
  elevation: 10;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 250px;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.05);
`;

const SummaryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const SummaryText = styled.Text`
  font-size: 13px;
  color: #000000;
`;

const SummaryAmount = styled.Text`
  font-size: 13px;
  color: #000000;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #DEE1E6;
  margin-vertical: 12px;
`;

const PlaceOrderButton = styled.TouchableOpacity`
  background-color: #6478F2;
  border-radius: 27px;
  padding: 16px;
  align-items: center;
  margin-top: 16px;
`;

const PlaceOrderText = styled.Text`
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 500;
`;

const ItemCount = styled.Text`
  font-size: 15px;
  color: #6478F2;
  background-color: #E8EAFF;
  padding: 4px 12px;
  border-radius: 20px;
  margin-left: 8px;
`;

const ItemsContainer = styled.View`
  margin-bottom: 20px;
`;

const ItemCard = styled.View`
  flex-direction: row;
  padding: 8px 0;
  border-bottom-width: 0;
  position: relative;
  margin-bottom: 4px;
  align-items: center;
`;

const ItemImage = styled.View`
  width: 51px;
  height: 51px;
  border-radius: 25.5px;
  background-color: #FFE8F7;
  overflow: hidden;
  margin-right: 16px;
  border: 4px solid #FFFFFF;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const ItemImagePlaceholder = styled.View`
  width: 100%;
  height: 100%;
  background-color: #F0F0F0;
`;

const ItemInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #393939;
`;

const ItemQuantity = styled.View`
  position: absolute;
  top: 8px;
  left: 35px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 2px solid #FFFFFF;
  background-color: #E8EAFF;
  justify-content: center;
  align-items: center;
`;

const ItemQuantityText = styled.Text`
  font-size: 13px;
  color: #6478F2;
  font-weight: 600;
`;

const ItemPrice = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #202020;
  position: relative;
  right: 0;
  top: 0;
`;

const ShippingOptionsContainer = styled.View`
  margin-bottom: 20px;
`;

const ShippingOption = styled.TouchableOpacity<{ isSelected?: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.isSelected ? '#E8EAFF' : '#F8F8F8'};
  border-radius: 10px;
  padding: 6px 16px;
  margin-bottom: 8px;
  position: relative;
  height: 40px;
`;

const ShippingInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const ShippingTitle = styled.Text`
  font-size: 13px;
  color: #393939;
  font-weight: 600;
  margin-right: 12px;
`;

const DeliveryTime = styled.Text`
  font-size: 12px;
  color: #6478F2;
  background-color: #F5F8FF;
  padding: 2px 12px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: 110px;
`;

const ShippingPrice = styled.Text`
  font-size: 13px;
  color: #202020;
  font-weight: bold;
  margin-right: 16px;
  position: absolute;
  right: 20px;
`;

const DeliveryNote = styled.Text`
  font-size: 11px;
  color: #6f6f71;
  font-family: Nunito Sans;
  line-height: 15px;
  margin-top: 5px;
`;

const DiscountSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

const DiscountInput = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 8px 12px;
  width: 250px;
  margin-right: 12px;
`;

const DiscountIcon = styled.View`
  margin-right: 8px;
`;

const DiscountText = styled.Text`
  font-size: 13px;
  color: #c6c6c6;
  flex: 1;
`;

const ApplyText = styled.Text`
  font-size: 13px;
  color: #6478F2;
  font-weight: 500;
`;

const VoucherButton = styled.TouchableOpacity`
  background-color: #e5e5fc;
  border: 1px solid #6478F2;
  border-radius: 20px;
  padding: 8px 16px;
  height: 39px;
  justify-content: center;
  align-items: center;
  width: 94px;
  position: absolute;
  right: 0;
  top: 0;
`;

const VoucherText = styled.Text`
  font-size: 13px;
  color: #6478F2;
  font-weight: 600;
`;

const AppliedDiscounts = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const DiscountTag = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #6478F2;
  border-radius: 20px;
  padding: 6px 12px;
  margin-right: 8px;
`;

const DiscountTagText = styled.Text`
  font-size: 13px;
  color: #FFFFFF;
  margin-right: 8px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;

export default CheckoutScreen;
