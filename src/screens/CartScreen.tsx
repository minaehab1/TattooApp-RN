import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['bottom']}>
      <ScrollView>
        <Container>
          {/* Warning Section */}
          <WarningCard>
            <WarningIcon>
              <Ionicons name="warning-outline" size={20} color="#d35b5f" />
            </WarningIcon>
            <WarningText>
              Final pricing is provided after consulting with me for accuracy.
            </WarningText>
          </WarningCard>

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

          {/* Cart Items */}
          <CartItemCard>
            <ItemImage />
            <ItemInfo>
              <ItemTitle>Small Tattoo Session</ItemTitle>
              <ItemDetails>Appointment: Nov 12, 3 PM{'\n'}Total Hours range: 5 - 6</ItemDetails>
              <ItemPrice>$170.00</ItemPrice>
            </ItemInfo>
            <ItemControls>
              <MinusButton>
                <Ionicons name="remove" size={20} color="#6478F2" />
              </MinusButton>
              <QuantityBox>
                <QuantityText>1</QuantityText>
              </QuantityBox>
              <PlusButton>
                <Ionicons name="add" size={20} color="#6478F2" />
              </PlusButton>
            </ItemControls>
            <DeleteButton>
              <Ionicons name="trash-outline" size={20} color="#d15151" />
            </DeleteButton>
          </CartItemCard>

          <CartItemCard>
            <ItemImage />
            <ItemInfo>
              <ItemTitle>Custom Tattoo Design</ItemTitle>
              <ItemDetails>Pink, Size M</ItemDetails>
              <ItemPrice>$75.00</ItemPrice>
            </ItemInfo>
            <ItemControls>
              <MinusButton>
                <Ionicons name="remove" size={20} color="#6478F2" />
              </MinusButton>
              <QuantityBox>
                <QuantityText>1</QuantityText>
              </QuantityBox>
              <PlusButton>
                <Ionicons name="add" size={20} color="#6478F2" />
              </PlusButton>
            </ItemControls>
            <DeleteButton>
              <Ionicons name="trash-outline" size={20} color="#d15151" />
            </DeleteButton>
          </CartItemCard>

          {/* Discount Section */}
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

          {/* Applied Discounts */}
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

          {/* Checkout Summary */}
          <CheckoutSummary>
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
            <CheckoutButton>
              <CheckoutText>Checkout</CheckoutText>
            </CheckoutButton>
          </CheckoutSummary>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styled Components
const Container = styled.View`
  padding: 20px 20px 150px 20px;
  background-color: #ffffff;
`;

const WarningCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fef2f2;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 24px;
`;

const WarningIcon = styled.View`
  margin-right: 8px;
`;

const WarningText = styled.Text`
  font-size: 11px;
  color: #d35b5f;
  flex: 1;
`;

const CartItemCard = styled.View`
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 9px;
  padding: 16px;
  margin-bottom: 12px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
  position: relative;
`;

const ItemImage = styled.View`
  width: 78px;
  height: 85px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-right: 16px;
`;

const ItemInfo = styled.View`
  flex: 1;
  margin-right: 16px;
`;

const ItemTitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #393939;
  margin-bottom: 4px;
`;

const ItemDetails = styled.Text`
  font-size: 10px;
  color: #6f6f71;
  margin-bottom: 8px;
`;

const ItemPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #202020;
`;

const ItemControls = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const MinusButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid #6478F2;
  justify-content: center;
  align-items: center;
`;

const QuantityBox = styled.View`
  background-color: #e5e5fc;
  border-radius: 7px;
  width: 37px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
`;

const QuantityText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const PlusButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 2px solid #6478F2;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

const DiscountSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 24px 0;
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
  font-size: 15px;
  color: #c6c6c6;
  flex: 1;
`;

const ApplyText = styled.Text`
  font-size: 15px;
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
  color: #6478F2;
  font-size: 13px;
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
  background-color: #6478F2;
  border-radius: 20px;
  padding: 4px 12px;
`;

const DiscountTagText = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
  margin-right: 8px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;

const CheckoutSummary = styled.View`
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const SummaryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const SummaryText = styled.Text`
  font-size: 15px;
  color: #000000;
`;

const SummaryAmount = styled.Text`
  font-size: 15px;
  color: #000000;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #DEE1E6;
  margin-vertical: 12px;
`;

const CheckoutButton = styled.TouchableOpacity`
  background-color: #6478F2;
  border-radius: 27px;
  padding: 16px;
  align-items: center;
  margin-top: 16px;
`;

const CheckoutText = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
`;

const ContactInfoCard = styled.View`
  width: 100%;
  height: 85px;
  border-radius: 10px;
  background-color: #f9f9f9;
  padding: 16px;
  margin-bottom: 24px;
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
  transform: translateY(0px);
`;

const EditButtonCircle = styled.View`
  width: 31px;
  height: 31px;
  border-radius: 15.5px;
  background-color: #6478F2;
  justify-content: center;
  align-items: center;
`;

export default CartScreen;
