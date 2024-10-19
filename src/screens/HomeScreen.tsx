import React from 'react';



import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';



import { Ionicons } from '@expo/vector-icons';







const HomeScreen: React.FC = () => {



  return (



    <ScrollView style={styles.container}>



      <Text style={styles.dashboardTitle}>Dashboard</Text>



      



      <View style={styles.heroSection}>



        <View style={styles.profileImagePlaceholder}>



          <Ionicons name="person" size={40} color="#607AFB" />



        </View>



        <View style={styles.heroContent}>



          <Text style={styles.greeting}>Hi, Jodie</Text>



          <Text style={styles.pointsText}>You have 13,000 points</Text>



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







      <View style={styles.greyBackground}>



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



        



        <View style={styles.quickLink}>



          <View style={styles.quickLinkContent}>



            <Ionicons name="images" size={24} color="#607AFB" style={styles.icon} />



            <View>



              <Text style={styles.quickLinkTitle}>Access gallery</Text>



              <Text style={styles.quickLinkSubtitle}>Check out our latest works and collections</Text>



            </View>



          </View>



          <Ionicons name="chevron-forward" size={24} color="#a0aec0" />



        </View>







        <Text style={styles.sectionTitle}>Booking Status</Text>

        <View style={styles.bookingCard}>

          <Text style={styles.bookingTitle}>Upcoming Appointment</Text>

          <Text style={styles.bookingDetail}>Date: Nov 15, 2023</Text>

          <Text style={styles.bookingDetail}>Artist: Alex Carter</Text>

          <TouchableOpacity style={styles.cancelButton}>

            <Text style={styles.cancelButtonText}>Cancel</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.bookingCard}>

          <Text style={styles.bookingTitle}>Upcoming Appointment</Text>

          <Text style={styles.bookingDetail}>Date: Dec 10, 2023</Text>

          <Text style={styles.bookingDetail}>Artist: Jamie Lee</Text>

          <TouchableOpacity style={styles.cancelButton}>

            <Text style={styles.cancelButtonText}>Cancel</Text>

          </TouchableOpacity>

        </View>



        <Text style={styles.sectionTitle}>Gallery</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>

          <View style={styles.galleryImagePlaceholder}>

            <Ionicons name="image" size={40} color="#607AFB" />

          </View>

          <View style={styles.galleryImagePlaceholder}>

            <Ionicons name="image" size={40} color="#607AFB" />

          </View>

          <View style={styles.galleryImagePlaceholder}>

            <Ionicons name="image" size={40} color="#607AFB" />

          </View>

        </ScrollView>

        <View style={styles.galleryDots}>

          <View style={[styles.dot, styles.activeDot]} />

          <View style={styles.dot} />

          <View style={styles.dot} />

          <View style={styles.dot} />

          <View style={styles.dot} />

        </View>



        <Text style={styles.sectionTitle}>Promotions</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionsScroll}>

          <View style={styles.promotionCard}>

            <View style={styles.promotionImagePlaceholder}>

              <Ionicons name="image" size={40} color="#607AFB" />

            </View>

            <Text style={styles.promotionTitle}>Flash Sale: Up to 70% off</Text>

          </View>

          <View style={styles.promotionCard}>

            <View style={styles.promotionImagePlaceholder}>

              <Ionicons name="image" size={40} color="#607AFB" />

            </View>

            <Text style={styles.promotionTitle}>New Designs: 2023 Collection</Text>

          </View>

        </ScrollView>



        <Text style={styles.sectionTitle}>News & Events</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newsScroll}>

          <View style={styles.newsCard}>

            <View style={styles.newsImagePlaceholder}>

              <Ionicons name="newspaper" size={40} color="#607AFB" />

            </View>

            <Text style={styles.newsTitle}>Flash Sale: Up to 70% off</Text>

          </View>

          <View style={styles.newsCard}>

            <View style={styles.newsImagePlaceholder}>

              <Ionicons name="newspaper" size={40} color="#607AFB" />

            </View>

            <Text style={styles.newsTitle}>New Designs: 2023 Collection</Text>

          </View>

        </ScrollView>

      </View>



    </ScrollView>



  );



};







const styles = StyleSheet.create({



  container: {



    flex: 1,



    backgroundColor: 'white',



  },



  dashboardTitle: {



    fontSize: 24,



    fontWeight: 'bold',



    marginBottom: 20,



    padding: 16,



  },



  heroSection: {



    flexDirection: 'row',



    alignItems: 'center',



    padding: 16,



    backgroundColor: 'white',



  },



  profileImagePlaceholder: {



    width: 80,



    height: 80,



    borderRadius: 40,



    backgroundColor: '#f0f0f0',



    justifyContent: 'center',



    alignItems: 'center',



    marginRight: 16,



  },



  heroContent: {



    flex: 1,



  },



  greeting: {



    fontSize: 24,



    fontWeight: 'bold',



  },



  pointsText: {



    fontSize: 16,



    color: 'gray',



  },



  buttonContainer: {



    flexDirection: 'row',



    justifyContent: 'space-between',



    padding: 16,



    backgroundColor: 'white',



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



  greyBackground: {



    backgroundColor: '#F3F4F6',



    paddingTop: 20,



    paddingHorizontal: 16,



  },



  sectionTitle: {



    fontSize: 20,



    fontWeight: 'bold',



    marginBottom: 12,



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



    marginBottom: 12,



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



  bookingCard: {

    backgroundColor: 'white',

    borderRadius: 8,

    padding: 16,

    marginBottom: 12,

    shadowColor: '#000',

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.1,

    shadowRadius: 4,

    elevation: 3,

  },

  bookingTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  bookingDetail: {

    fontSize: 14,

    color: 'gray',

    marginBottom: 4,

  },

  cancelButton: {

    alignSelf: 'flex-start',

    marginTop: 8,

    paddingVertical: 6,

    paddingHorizontal: 12,

    borderRadius: 4,

    borderWidth: 1,

    borderColor: '#607AFB',

  },

  cancelButtonText: {

    color: '#607AFB',

  },

  galleryScroll: {

    marginBottom: 12,

  },

  galleryImagePlaceholder: {

    width: 200,

    height: 200,

    backgroundColor: '#f0f0f0',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,

    borderRadius: 8,

  },

  galleryDots: {

    flexDirection: 'row',

    justifyContent: 'center',

    marginBottom: 20,

  },

  dot: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#D1D5DB',

    marginHorizontal: 4,

  },

  activeDot: {

    backgroundColor: '#607AFB',

  },

  promotionsScroll: {

    marginBottom: 20,

  },

  promotionCard: {

    width: 200,

    marginRight: 12,

  },

  promotionImagePlaceholder: {

    width: 200,

    height: 120,

    backgroundColor: '#f0f0f0',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 8,

    borderRadius: 8,

  },

  promotionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  newsScroll: {

    marginBottom: 20,

  },

  newsCard: {

    width: 200,

    marginRight: 12,

  },

  newsImagePlaceholder: {

    width: 200,

    height: 120,

    backgroundColor: '#f0f0f0',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 8,

    borderRadius: 8,

  },

  newsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default HomeScreen;


