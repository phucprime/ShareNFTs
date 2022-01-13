import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Components/ResponsiveLayout';
import MyNFTs from '../../Components/MyNFTs';
import SentNFT from '../../Components/SentNFT';
import ReceivedNFT from '../../Components/ReceivedNFT';
import {useDispatch, useSelector} from 'react-redux';

const DashboardScreen = props => {
  const [activeButtonName, setActiveButtonName] = React.useState('My NFTs');
  const {userDetail} = useSelector(state => state.userDetail);
  const [user, setUser] = React.useState(userDetail);
  const dispatch = useDispatch();

  const changeButtonName = text => {
    setActiveButtonName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{backgroundColor: '#202424', height: hp('30%')}}>
        <View
          style={{
            width: wp('80%'),
            justifyContent: 'center',
            marginTop: 68,
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: wp('50%'),
              height: hp('5%'),
            }}
            source={require('../../Assets/logo1.png')}
          />
          <View
            style={{
              height: 40,
              width: 113,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              left: 60,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: 27,
                height: 27,
              }}
              source={require('../../Assets/profile.png')}
            />
            <Text style={{fontSize: 14, color: '#fff'}}>
              {/* {userDetail.username} */}
              {` username`}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: hp('8%'),
            width: wp('95%'),
            backgroundColor: 'rgba(255, 255, 255, 0.21)',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => changeButtonName('My NFTs')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                activeButtonName === 'My NFTs' ? '#fff' : 'transparent',
              height: '80%',
              width: '32%',
              marginLeft: '1.5%',
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: activeButtonName === 'My NFTs' ? '#000' : '#fff',
                fontSize: 16,
                fontWeight: activeButtonName === 'My NFTs' ? 'bold' : 'normal',
              }}>
              My NFTs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeButtonName('Sent')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                activeButtonName === 'Sent' ? '#fff' : 'transparent',
              height: '80%',
              width: '32%',
              marginRight: '1%',
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: activeButtonName === 'Sent' ? '#000' : '#fff',
                fontSize: 16,
                fontWeight: activeButtonName === 'Sent' ? 'bold' : 'normal',
              }}>
              Sent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeButtonName('Received')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                activeButtonName === 'Received' ? '#fff' : 'transparent',
              height: '80%',
              width: '32%',
              marginRight: '1%',
              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: activeButtonName === 'Received' ? '#000' : '#fff',
                fontSize: 16,
                fontWeight: activeButtonName === 'Received' ? 'bold' : 'normal',
              }}>
              Received
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{height: hp('90%'), backgroundColor: '#ededed'}}>
        {activeButtonName === 'My NFTs' && <MyNFTs props={props} />}
        {activeButtonName === 'Sent' && <SentNFT props={props} />}
        {activeButtonName === 'Received' && <ReceivedNFT props={props} />}
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
