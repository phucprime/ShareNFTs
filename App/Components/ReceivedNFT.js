import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './ResponsiveLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const list = [
  {
    id: 2,
    name: 'JAMIEGRAY',
    title: 'Music',
    time: '11/03/2019 12:45 PM',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacW8wD-RHopXQN-12UBSYaXedV6Np3_MjVQ&usqp=CAU',
  },
  {
    id: 4,
    name: 'ToyFace by Amri',
    title: 'Digital Art',
    time: '11/03/2019 12:45 PM',
    imgUrl:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRAQERUVFxUXGRUVGBUXFRUWFhUVFRgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslICUrLS0rLy0rLS0tLi0tLS0tLS0uLS0tLS0rKy0tLS0tLS0tLS0rKy0uLS0tLS0tLS0tK//AABEIAPkAywMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xABAEAACAQIEAwQHBQYFBQEAAAAAAQIDEQQFITEGEkETUWFxByIygZGhsUJSgsHRFCNikrLwM0NjcqIkNFNz4Qj/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJxEBAQACAQQCAQMFAAAAAAAAAAECEQMEEiExE0FRcZHxBSIygaH/2gAMAwEAAhEDEQA/APDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1nD/o/wAZilzdnKFO1/ZcpteENLdNZuKaejZPzHhOOHVnT1W7nLmk/crRS8LPzZW5SJ04WMW9lcyxwk39l/T6m/aUdEkkvcY5TJ2NP+w1Pu/NfqWSwk19l/U28qhY6hGxp5Qa3TXmWm2czDUpRfT4aE7Q14M88P3amFokUAAAAAAAAAAAAAAAAAMuGoSqTjThFynUkoxit5Sk7RS8W2gMmXYCriKkaNGDnVqO0Yx3b/JdW3olqz6H9Hnoho4RRr4u1XE2TS+xTe/q9b/xb6K3Lqjcei70fU8soqU7TxlVJ1J/d/04fwr5vXuS7LH46FGDnUlaK+fkRaK1nClTeijCKeiskeFcdZlTc5Wd9Sdx56QpVG6dN2gu78zyzGY2U3dsz93aylerdkeUyyUzG5FkMjkWORZzGahC4Fqi2VdGXcbzLsEpHT4Lh+MlsRboecyg10MVSnc9Lx/Bt1dI43NMnnSeq0EsHOTg0Wk+cL6EKpCzsXlQtABIAAAAAAAAAAAe1/8A574RU5TzGtG6g3ToJ/e2qVPd7Kf+/uR4tCDbSSu27JLdt7JHtMOK3l8P2KhL1MKlRutOaULqrL8VR1JfiK5XSY9mznO6OGi5TkrraPU8M4645niJNRdorZLZHPZ5xNVrt80nr4nNVatyvm+xfXrNvVkaUy2cixskVcigASGbDzMITCHT5TibNHe5Fi1oeUYXEWOmyjNLW1K5RMey4VRnE0HE+QRnFuxDyjO9tTd1MzjKO5n6S8QzvLXSm1bQ01endeKPR+L6EZXaPP6kbM1lVrVgvrRs2WGiAAAAAAAAAAAbng2F8dhrq6hiITa71TkptfCLJdWq3rJ3k9W+9vdkPhCpy4yjrbmm4X8ZxcF85GactF5FaliqzI05F1WRiZAFLlGwEqgoCRUqURUgViyXh8TYhhMIdNgs1cepuKWfabnCwq2MyxDI0OjzPNOdbnNVpXYlWbMZMgi4taryMBnxb1RgLRAACQAAAAAAABmwWJdKpCpH2qU4zV++LUl9DeZrTUak1H2L80Ov7uaU6T98JRfvOdN3Cr2tCLveph1ySXV02/3U+/RtwfdekkRRCkyxsrIvwuHdScYR3nKMV4czSv8AMqsyYPAVq3M6VKc1TV5uKbUE9nOW0b7K+70K1MtrR3pv4xfyTPV8TUpYfLqGCoK15zrVn1nJNxg5Pq7K/wCGJyFeV2YfNu+G/wAGp5ce420ej7ivKdPUpJ7pPzVzBLAw+78LovOSK3iv05+wN48up9z+JWOApr7PzZPyRX4smhM9LB1JezB/JfU3tOjGO0UvcZEVvJ+F5xfloMVgKtP26co28mvirojnqNXCqvgI4iP+Jhp9nU8YP2W/JtfE8+znCKEk4q0ZdOia3+qGHJu6Rnx9s3EFMFpbOVkasWCu7vyMYBdAAAAAAAAAAABJy7GOlNTSTVnGUXtOElacH4NN6rVbqzSZGAG1x+GjG06cuajUu4S66W5qc+6pG6uvFNaSRtOCYp4mKa1SlL+WL/Oxbwnw/jK8Zyp4d1MI7dq5Pkg7XtKMt1Ujd2lFO12mnFyT6Hhzh6VDE1JKSnTjQlyvaSvKn7S20u1p56GHNlJjZttxY25S68JmaTNHN97t5m2zN7mlrw5rcyTS20Vl7u/x3Zz4Tw6s7fpemns0/LX6BoiSwivePqS719GtmiUmWsUm/ssUsXlLDaVtjE68L25437rq5knC/kWKhG1uVW7rImaRdu49GzVR4nCS9nEUHZeK0v8ANfA4XiGi+z13hOz/AKX8zqfRtLs8dSS2lzRt5xe3wNfxthbVsTBL/Onb+bmKy6zMpvGuDI9Wd/InYnLayXs3XcndmuaOzHVcllntQAFlQAAAAAAAAAADZcO5esRiaVKTtGUry7+WKcpJeNos1pteF8YqOJpzbsvWi3/vi4/Vorlvtulsdd029g4x4mg4RwuFgqeEoJKMUrOTirXfclqkvf5ctkWMk60lfelL6xIWMxF2zFkldLEJfejJfK/5HFZuW13SyWSNjmL1Zq5ysrvobPMN2autC6a70MfRkx0qyle3QyXRrqGHlBO71b6GGpiHezvY0uPnwymV15buFNtXSbXfZ2+JabfEZtTnKlDk5cPTjCD7JKLcFvJN3Tm73u/LRbamtJX02sUjTwozBRxMZNpdDNuQMHg5Qk22mntb8+4tJPO1Lvc06ng2dsbh3/qpfFNfmSuNaX/W4rwlzf8AGP6kLg6N8ZQ8Kqfwuy7iLG89fET/APJOSX80UvlEpfa8azLaKnUhTclBVJqPM9o8zsm/DU03GeUuhUfMuWcZunNfxLZrzXysbKJG48zZ4ifPO3aVJqTS6KMeSPyt8GaYb75pnya7a5IAHW5AAAAAAAAAAAAABssPm0lZTXNbr1fn3m3wGe0nVpqNHlcqkU5N3td2v8zliqZS4Sp35l/D0nGs1zK4fMFWpRn1taXhJb/r5NFvOcklnh3d0vlSUbmCWFi+hJuUZO0MVOio7FTKo+K97t8n+RZK3QHbpamXplhVEjY5Nieyqdot4Rly/wC5pxX1NRnON7OKdruUvyu39PiTI6HLZ7i+0qWXsw09/V/33E8ePdkpyZaxZ555p6sNfFmqr1pTk5Sd2zGDpmMnpzXK32AAsqAAAAAAAAAAAAAAAAm5ZjnSl/BLdfRrxN9DEJ6rVPqcoScFjZ0mnF7PZ7GeeG/K0zsnh1EKxk7RGLB5nhqy9a1Kp46RflLp77FcfhopNc2/ijG4VOPVT1lLKycyKKa6GqjFWwuivUqTUv4l2sIpPwtf4snwcbOVrJ4ivCy29WUZx08VUa/ATePUazlZrlUyJiMxpU93r3LV/ojUY3OZz0j6sfn8egnHaXlifm+acqcIP13u/u//AE50A3xxmMY5ZXKgALKgAAAAAAAAAAAAAAAAAAAAAdNiMElGD69nC/jaCX5HS8O+iOtWoRxFer2fPHnjRjG9RxavHmk2o0297a+Nnoq5tw5iYO3YystNLS28mZcm/GlOPqeDdxuU3+rk3Qkuzad+yldJ6fa5n/y+SN9w7FKOIVvWeEnr4qVNt+fqkeeV11vSmvwsz5bRnTc+aMkp0KsNnvKD5fnYzvdY1x5uGX/KfvHH5wv30vd/SiEdPj8idRdpGVqu3ZuOjS2amnu+5rpuczKLTs9GtLHRj6jOcuGeV7bL+igAJWAAAAAAAAAAAAAAAAAAAAPSOBvRXWxSjWxblQwz1ULWq1F0aT9iPi1d9FZ3CmfJjhN5XTgcuy+tiJqlQpzq1JbRhFyfnZbLxPRsi9DOJnaWLrQoR0fJH97U8U7NQj53fkexZPlGHwlPssNSjSh15d5PvnJ6yfi2Z6jDyeo/qlnjjn7uWzDF4nDXjBSnTjs1q7dLpap+6xzWO4tqPSSs/HQ73ErU1GNoxluk/NXHivBmfb/LhamcOW5Z+1we50OKyuk/sR+CNZVyyn0iTppj1OE+mrrYqPRHI5lkU5SlOElLmk5cr9V6u9l0+h29XL49EQ6mDtsTp19P1fx23H7ecV6EoO0ouL7mYzv8ThIyXLOKa8fyfQ5vM8hlG8qV5R+79peXeRp7XB12HJ4y8X/jSAAh3AAAAAAAAAAAAAAXQi20km23ZJatt7JItPZ/RNwP2SjjcTH99JXowf8Alxa0qNfffTuXi9Dn6nqMeDDuy/1Pyk+jb0axocuKxsVLEaShSesaXdKa+1Pw2j57eoFsUXC18/yc2fLe7OqMwVGZZsh16hS1hki4hmsxMiZXma3ETJjnyxQ6zIFYlVZESqy8Y3FEmiLUiS5keaLL4SolSnciVKJsJRMM4kOjG2OWzrJFO84K1TqtlL9GcrKLTs1ZrRruPS5wOf4hyjnTqQXrrdL7S/Vf30Isez0XW61hn6+q5MAEPZAAAAAAAAAAB23ow4X/AGuv21WN8PQktHtOpo4x8Ut37l1PoCgrI889Ef8A2FP/ANlX+o9Bpk5eHynW82XJ1GW/q6iUmWymWEeqZWqRWtWINaqX1f7+JBriQsYq9U19eoZa/wCv0INT82XZZRjqSI1RmSoR5lopMVszFIrItkG2OMY2iycTJIxyI207UepAwTiSpkaZZWzTjuJct7OXaRXqTevhL9H+poztuJP8Cf4f64nEkV9F0HJlycX9314AAQ7AAAf/2Q==',
  },
];
const renderItem = ({item}) => (
  <View>
    <View
      style={{
        width: wp('90%'),
        marginLeft: '5%',
        height: hp('15%'),
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
      }}
      elevation={10}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: '28%', height: '90%', justifyContent: 'center'}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              marginLeft: 9,
              marginTop: 9,
            }}
            source={{
              uri: item.imgUrl,
            }}
          />
        </View>

        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            {item.name}
          </Text>
          <Text style={{marginTop: 3, color: '#79e0d8'}}>{item.title}</Text>
          <Text style={{marginTop: 3}}>Sent to</Text>
          <Text>msCWdkjdhf...kdjfjkhdf</Text>
          <Text>on {item.time}</Text>
        </View>
      </View>
    </View>
  </View>
);

const ReceivedNFT = ({props}) => {
  const [nftQuantityShow, setNftQuantityShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setNftQuantityShow(false);
    }, 1000);
  });
  return (
    <SafeAreaView>
      {nftQuantityShow && (
        <View
          style={{
            height: 20,
            backgroundColor: '#DEDEDE',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 13}}>
            {` loading... ${list.length} NFTs found `}
          </Text>
        </View>
      )}
      <View style={{marginTop: 10, height: hp('48%')}}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={{marginTop: 0}}>
        <View
          style={{
            marginTop: 5,
            width: wp('90%'),
            marginLeft: '5%',
            height: hp('12%'),
            backgroundColor: '#fff',
            borderRadius: 15,
            borderWidth: 2,
            borderColor: '#e7e7e7',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('createNFT')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0072CE',
              height: '70%',
              width: '45%',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <AntDesign name={'plus'} size={24} color={'#fff'} />
            <Text style={{color: '#fff', fontSize: 20}}> Create NFT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('SendNFT')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#39C0BA',
              height: '70%',
              width: '45%',
              borderRadius: 10,
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            <FontAwesome name={'send'} size={24} color={'#fff'} />
            <Text style={{color: '#fff', fontSize: 20}}> Send NFT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReceivedNFT;
