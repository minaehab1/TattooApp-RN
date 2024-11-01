import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { ImageIcon, ImageIcon2, ImageIcon3 } from '../components/Icons';
import { NotificationIcon } from '../components/Icons';
import { ControlsIcon } from '../components/Icons';

// Add interfaces at the top of the file
interface NavItemProps {
  isActive?: boolean;
}

interface StyledButtonProps {
  isSelected?: boolean;
}

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <Container>
          <TopContainer>
            <ProfileSection>
              <ProfileContainer>
                <ProfileImage />
              </ProfileContainer>
              <GreetingText>Hi, Jodie</GreetingText>
              <PointsText>You have 13,000 points</PointsText>
            </ProfileSection>
            <ButtonsContainer>
              <RedeemButton>
                <RedeemButtonText>Redeem</RedeemButtonText>
              </RedeemButton>
              <InviteButton>
                <InviteButtonText>Invite</InviteButtonText>
              </InviteButton>
            </ButtonsContainer>
          </TopContainer>

          <AnnouncementCard>
            <Rectangle />
            <AnnouncementText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.
            </AnnouncementText>
            <AnnouncementTitle>Announcement</AnnouncementTitle>
            <AnnouncementArrowButton>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </AnnouncementArrowButton>
          </AnnouncementCard>

          <SaleBanner>
            <BannerBackground>
              <ImageIcon />
            </BannerBackground>
            <SaleContent>
              <SaleTitle>Big Sale</SaleTitle>
              <SaleSubtitle>Happening{'\n'}Now</SaleSubtitle>
              <DiscountText>Up to 50%</DiscountText>
            </SaleContent>
            <Controls>
              <ControlsIcon />
            </Controls>
          </SaleBanner>

          <TryOnContainer>
            <TryOnBanner>
              <BannerBackground>
                <ImageIcon2 />
              </BannerBackground>
              <TryOnContent>
                <TryOnTitle>Photo Tattoo Try On</TryOnTitle>
                <TryOnSubtitle>Check out our latest works and collections</TryOnSubtitle>
                <TryNowButton>
                  <TryNowText>Try Now</TryNowText>
                </TryNowButton>
              </TryOnContent>
            </TryOnBanner>
            <TryOnBanner>
              <BannerBackground>
                <ImageIcon3 />
              </BannerBackground>
              <TryOnContent>
                <TryOnTitle>Tattoo Cam Try On</TryOnTitle>
                <TryOnSubtitle>Check out our latest works and collections</TryOnSubtitle>
              </TryOnContent>
            </TryOnBanner>
          </TryOnContainer>

          <OrdersSection>
            <OrdersTitle>My Orders</OrdersTitle>
            <OrderButtons>
              <OrderButton>
                <OrderButtonText>To Pay</OrderButtonText>
              </OrderButton>
              <OrderButton>
                <OrderButtonText>To Receive</OrderButtonText>
                <NotificationBadge />
              </OrderButton>
              <OrderButton>
                <OrderButtonText>To Review</OrderButtonText>
              </OrderButton>
            </OrderButtons>
          </OrdersSection>

          <BookingStatusSection>
            <BookingTitle>Booking Status</BookingTitle>
            <BookingCardsContainer>
              <BookingCard>
                <AppointmentTitle>Upcoming Appointment</AppointmentTitle>
                <AppointmentDate>Date: Nov 15, 2023</AppointmentDate>
                <CancelButton>
                  <CancelButtonText>Cancel</CancelButtonText>
                </CancelButton>
              </BookingCard>
              <BookingCard>
                <AppointmentTitle>Upcoming Appointment</AppointmentTitle>
                <AppointmentDate>Date: Dec 10, 2023</AppointmentDate>
                <CancelButton>
                  <CancelButtonText>Cancel</CancelButtonText>
                </CancelButton>
              </BookingCard>
            </BookingCardsContainer>
          </BookingStatusSection>

          <StorySection>
            <StoryTitle>Gallery</StoryTitle>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <StoryItem>
                <StoryBackground />
                <LiveBadge>
                  <LiveText>Live</LiveText>
                </LiveBadge>
                <StoryPlayButton>
                  <Ionicons name="play" size={24} color="#FFFFFF" />
                </StoryPlayButton>
              </StoryItem>
              <StoryItem>
                <StoryBackground style={{ backgroundColor: '#FFE8F7' }} />
                <StoryPlayButton>
                  <Ionicons name="play" size={24} color="#FFFFFF" />
                </StoryPlayButton>
              </StoryItem>
              <StoryItem>
                <StoryBackground style={{ backgroundColor: '#E8FFFA' }} />
                <StoryPlayButton>
                  <Ionicons name="play" size={24} color="#FFFFFF" />
                </StoryPlayButton>
              </StoryItem>
              <StoryItem>
                <StoryBackground style={{ backgroundColor: '#FFF8E8' }} />
                <StoryPlayButton>
                  <Ionicons name="play" size={24} color="#FFFFFF" />
                </StoryPlayButton>
              </StoryItem>
              <StoryItem>
                <StoryBackground style={{ backgroundColor: '#FFE8E8' }} />
                <StoryPlayButton>
                  <Ionicons name="play" size={24} color="#FFFFFF" />
                </StoryPlayButton>
              </StoryItem>
            </ScrollView>
          </StorySection>

          <PromotionsSection>
            <PromotionsHeader>
              <PromotionsTitle>Promotions</PromotionsTitle>
              <ArrowButton>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </ArrowButton>
            </PromotionsHeader>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 5 }}
            >
              <PromotionCard>
                <PromotionImage />
                <PromotionTitle>Flash Sale: Up to 70% off</PromotionTitle>
              </PromotionCard>
              <PromotionCard>
                <PromotionImage />
                <PromotionTitle>New Designs: 2023 Collection</PromotionTitle>
              </PromotionCard>
              <PromotionCard>
                <PromotionImage />
                <PromotionTitle>New Designs: 2023 Collection</PromotionTitle>
              </PromotionCard>
            </ScrollView>
          </PromotionsSection>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styled Components
const Container = styled.View`
  padding: 20px;
  background-color: #ffffff;
`;

const TopContainer = styled.View`
  height: 260px;
  width: 100vw;
  background-color: #fffeff;
  padding: 20px;
  shadow-color: #171a1f;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.07;
  shadow-radius: 1px;
  elevation: 1;
  margin-left: -20px;
  margin-right: -20px;
  margin-top: -90px;
`;

const ProfileSection = styled.View`
  margin-top: 60px;
  padding: 0 0px;
`;

const ProfileContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #f0f0f0;
  border: 1px solid #f0f0f0;
  margin-bottom: 12px;
  margin-left: 5;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 0px;
`;

const RedeemButton = styled.TouchableOpacity`
  width: 177px;
  height: 48px;
  border-radius: 24px;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
`;

const InviteButton = styled.TouchableOpacity`
  width: 177px;
  height: 48px;
  border-radius: 24px;
  background-color: #5f7afb;
  justify-content: center;
  align-items: center;
`;

const GreetingText = styled.Text`
  font-size: 19px;
  line-height: 30px;
  color: #000000;
  margin-left: 100px;
  margin-top: -83px;
`;

const PointsText = styled.Text`
  font-size: 14px;
  line-height: 22px;
  color: #8a8a8a;
  margin-left: 100px;
`;

const AnnouncementCard = styled.View`
  width: 100%;
  height: 72px;
  border-radius: 10px;
  background-color: #f8f8f8;
  margin: 20px 0;
  position: relative;
`;

const Rectangle = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  background-color: #f8f8f8;
`;

const AnnouncementText = styled.Text`
  font-size: 10px;
  line-height: 15px;
  color: #000;
  padding: 0 60px 0 16px;
  margin-top: 30px;
`;

const AnnouncementTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #202020;
  position: absolute;
  top: 12px;
  left: 16px;
`;

const OrdersSection = styled.View`
  margin-bottom: 24px;
`;

const OrdersTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #202020;
  margin-bottom: 16px;
`;

const OrderButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const OrderButton = styled.TouchableOpacity`
  background-color: #e5e5fc;
  border-radius: 18px;
  padding: 8px 16px;
`;

const OrderButtonText = styled.Text`
  color: #607afb;
  font-size: 16px;
  font-weight: 500;
`;

const SaleBanner = styled.View`
  height: 136px;
  border-radius: 9px;
  background-color: #ffa77b;
  margin-bottom: 20px;
  padding: 16px;
`;

const SaleTitle = styled.Text`
  font-size: 29px;
  font-weight: bold;
  color: #fff;
`;

const SaleSubtitle = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #fff;
`;

const DiscountText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;

const TryOnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TryOnBanner = styled.View`
  width: 164px;
  height: 135px;
  border-radius: 9px;
  background-color: #ff7bbb;
  padding: 16px;
`;

const TryOnTitle = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: #fff;
  text-align: center;
`;

const TryOnSubtitle = styled.Text`
  font-size: 10px;
  color: #fff;
  text-align: center;
`;

const GallerySection = styled.View`
  margin-bottom: 24px;
`;

const GalleryTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

const GalleryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const BookingStatusSection = styled.View`
  margin-bottom: 24px;
`;

const BookingTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
`;

const BookingCardsContainer = styled.View`
  flex-direction: row;
  gap: 15px;
`;

const BookingCard = styled.View`
  width: 167px;
  height: 151px;
  border-radius: 10px;
  background-color: #fff;
  padding: 16px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const AppointmentTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
`;

const AppointmentDate = styled.Text`
  font-size: 14px;
  color: #8a8a8a;
`;

const CancelButton = styled.TouchableOpacity`
  width: 71px;
  height: 32px;
  border-radius: 20px;
  border: 1px solid #7483dd;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const CancelButtonText = styled.Text`
  color: #7483dd;
  font-size: 13px;
`;

const PromotionsSection = styled.View`
  margin: 0 -20px 150px -20px;
  padding: 0 15px;
`;

const PromotionsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const PromotionsTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

const SeeAllText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #202020;
  margin-right: 8px;
`;

const PromotionsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const BannerBackground = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 9px;
  background-color: #ffa77b;
`;

const SaleContent = styled.View`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
  bottom: 16px;
`;

const Controls = styled.View`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const StorySection = styled.View`
  margin-bottom: 24px;
`;

const StoryTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
`;

const StoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const StoryItem = styled.TouchableOpacity`
  width: 104px;
  height: 175px;
  border-radius: 9px;
  background-color: #f0f0f0;
  overflow: hidden;
  margin-right: 8px;
`;

const StoryBackground = styled.View`
  width: 100%;
  height: 100%;
  background-color: #E8EAFF;
`;

const StoryPlayButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const TryNowButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const TryNowText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

const StyleOption = styled.TouchableOpacity<StyledButtonProps>`
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

const LiveBadge = styled.View`
  position: absolute;
  left: 3px;
  top: 10px;
  width: 41px;
  height: 20px;
  background-color: #08c514;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const LiveText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
`;

const NotificationBadge = styled.View`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #08c514;
  border: 2px solid #fff;
`;

const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #607AFB;
  justify-content: center;
  align-items: center;
`;

const BannerGradient = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
  border-radius: 9px;
`;

const PromotionCard = styled.View`
  width: 164px;
  height: 183px;
  border-radius: 9px;
  background-color: #ffffff;
  margin: 10px 12px 10px 0;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const PromotionImage = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: #F0F0F0;
`;

const PromotionTitle = styled.Text`
  font-size: 12px;
  line-height: 17px;
  color: #000;
  padding: 12px;
`;

const AnnouncementArrowButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 50%;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #607AFB;
  justify-content: center;
  align-items: center;
  transform: translateY(-15px);
  z-index: 1;
`;

const ProfileImage = styled.View`
  position: absolute;
  left: 20px;
  top: 19px;
  width: 39px;
  height: 41px;
  border-radius: 6px;
  background-color: #607AFB;
`;

const RedeemButtonText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #8a8a8a;
`;

const InviteButtonText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
`;

// Add this styled component
const TryOnContent = styled.View`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
  bottom: 16px;
  justify-content: center;
  align-items: center;
`;

export default HomeScreen;
