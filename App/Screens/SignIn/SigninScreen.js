import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Components/ResponsiveLayout';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {signUpService} from '../../Store/Actions/SignUp';
import {useDispatch} from 'react-redux';
import Loader from '../../Components/Loader';

const SigninScreen = props => {
  const [activeButtonName, setActiveButtonName] = React.useState('email');
  const [text, setText] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState('Email Address');
  const dispatch = useDispatch();

  const changeButtonName = text => {
    setActiveButtonName(text);
    text === 'email'
      ? setPlaceholder('Email Address')
      : setPlaceholder('Phone Number');
  };

  const onChangeText = text => {
    // console.log(text)
    setText(text);
  };

  const signUp = async (activeButtonName, text, props) => {
    // console.log(activeButtonName)
    // console.log(text)
    // setTimeout(setLoading(true),2000)
    <Loader />;
    let action1;
    action1 = signUpService(activeButtonName, text, props);
    dispatch(action1);
    // setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container11}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'padding'}
        style={{
          width: Platform.OS === 'android' ? null : null,
          height: Platform.OS === 'android' ? hp('100%') : hp('100%'),
        }}>
        <ScrollView>
          <Image
            style={{
              width: wp('100%'),
              height: hp('58%'),
            }}
            source={require('../../Assets/Header.png')}
          />

          {loading === true ? (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View style={{marginBottom: 30}}>
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                  fontSize: 18,
                  marginTop: 10,
                }}>
                Continue With
              </Text>

              {/*Email and Phone Buttons */}

              <View style={styles.selectionButtons}>
                <TouchableOpacity
                  onPress={() => {
                    // setActiveButtonName('email')
                    // console.log(activeButtonName)
                    changeButtonName('email');
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      activeButtonName === 'email' ? '#79e0d8' : 'transparent',
                    height: '80%',
                    width: '49%',
                    marginLeft: '1%',
                    borderRadius: 10,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: activeButtonName === 'email' ? '#fff' : '#fff',
                      fontSize: 16,
                      fontWeight:
                        activeButtonName === 'email' ? 'bold' : 'normal',
                    }}>
                    Email
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // setActiveButtonName('phone')
                    changeButtonName('phone');
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      activeButtonName === 'phone' ? '#79e0d8' : 'transparent',
                    height: '80%',
                    width: '49%',
                    marginRight: '1%',
                    borderRadius: 10,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: activeButtonName === 'phone' ? '#fff' : '#fff',
                      fontSize: 16,
                      fontWeight:
                        activeButtonName === 'phone' ? 'bold' : 'normal',
                    }}>
                    Phone
                  </Text>
                </TouchableOpacity>
              </View>

              {/*Enter Text place */}

              <View style={styles.enterTextView}>
                <TextInput
                  style={{height: 60, padding: 10, width: '82%'}}
                  onChangeText={text => onChangeText(text)}
                  value={text}
                  placeholder={placeholder}
                  placeholderTextColor={'#808080'}
                />
                <TouchableOpacity
                  onPress={() => {
                    signUp(activeButtonName, text, props);
                    // setLoading(true);
                  }}
                  style={styles.arrowButton}>
                  <AntDesign name={'arrowright'} color={'#fff'} size={26} />
                </TouchableOpacity>
              </View>

              {/*Enter Text place */}

              <View style={{width: wp('100%'), marginTop: 10}}>
                <Text style={{color: '#fff', alignSelf: 'center'}}>
                  To continue you must agree to labs
                </Text>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <TouchableOpacity>
                    <Text style={{color: '#4D8EFC', alignSelf: 'center'}}>
                      Terms and Conditions{' '}
                    </Text>
                  </TouchableOpacity>
                  <Text style={{color: '#fff', alignSelf: 'center'}}>and </Text>
                  <TouchableOpacity>
                    <Text style={{color: '#4D8EFC', alignSelf: 'center'}}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.alreadyAccountText}>
                Already have an account?
              </Text>

              {/*Login Button*/}
              <TouchableOpacity
                onPress={() => props.navigation.navigate('login')}
                style={styles.loginButton}>
                <Text style={styles.loginText}>Log in</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SigninScreen;
