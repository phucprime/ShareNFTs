import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../VarificationCode/styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Components/ResponsiveLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SearchBar from '../../Components/SearchBar';
import Avatar from '../../Components/Avatar';
import ListItem from '../../Components/ListItem';

const SendNFT = props => {
  const [size, setSize] = React.useState('');
  const [searchPlaceholder, setSearchPlaceholder] =
    useState('Search contacts...');
  const [typeText, setTypeText] = useState('Search');
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([
    {
      recordID: 0,
      givenName: 'Phuc',
      familyName: 'Nguyen',
      thumbnailPath:
        'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg',
      hasThumbnail: true,
      company: 'Company 1',
      selected: false,
    },
    {
      recordID: 1,
      givenName: 'Hoang Phuc',
      familyName: 'Nguyen',
      hasThumbnail: false,
      company: 'Company 2',
      selected: false,
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  const onChangeSize = text => {
    setSize(text);
  };

  const setCheckedOnList = contact => {
    let contactsCopy = contacts;
    contactsCopy[contact.recordID].selected = !contact.selected;
    setContacts([...contactsCopy]);
  };

  const search = text => {};

  const getAvatarInitials = textString => {
    if (!textString) {
      return 'null';
    }
    const text = textString.trim();
    const textSplit = text.split(' ');
    if (textSplit.length <= 1) {
      return text.charAt(0);
    }
    const initials =
      textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
    return initials;
  };

  return (
    <SafeAreaView>
      <StatusBar
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{height: '100%'}}>
        <ImageBackground
          source={require('../../Assets/Header.png')}
          style={{
            width: '100%',
            height: 150,
          }}>
          <View
            style={{
              marginTop: 80,
              flexDirection: 'row',
              backgroundColor: '#eee',
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            <View
              style={{
                width: wp('82%'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: '#000',
                  alignSelf: 'center',
                }}>
                Gift an NFT
              </Text>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <AntDesign name={'close'} size={25} color={'#000'} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View
          style={{
            width: wp('100%'),
            height: 2,
            backgroundColor: '#c4c4c4',
            marginTop: 10,
          }}></View>

        <SearchBar
          searchPlaceholder={searchPlaceholder}
          onChangeText={search}
        />

        {loading === true ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color="#39C0BA" />
          </View>
        ) : (
          <ScrollView style={{flex: 1}}>
            {contacts.map(contact => {
              return (
                <ListItem
                  leftElement={
                    <Avatar
                      img={
                        contact.hasThumbnail
                          ? {uri: contact.thumbnailPath}
                          : undefined
                      }
                      placeholder={getAvatarInitials(
                        `${contact.givenName} ${contact.familyName}`,
                      )}
                      width={40}
                      height={40}
                    />
                  }
                  key={contact.recordID}
                  title={`${contact.givenName} ${contact.familyName}`}
                  description={`${contact.company}`}
                  onPress={() => setCheckedOnList(contact)}
                  onDelete={() => {
                    let contactsCopy = contacts.filter(
                      item => item.recordID !== contact.recordID,
                    );
                    setContacts([...contactsCopy]);
                  }}
                  rightElement={
                    contact.selected ? (
                      <AntDesign
                        name={'checksquare'}
                        color={'#39C0BA'}
                        size={22}
                      />
                    ) : (
                      <Feather name={'square'} color={'#39C0BA'} size={22} />
                    )
                  }
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SendNFT;
