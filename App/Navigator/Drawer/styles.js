import {Dimensions} from 'react-native';
import {Colors, FontSize} from 'Theme';
const {height} = Dimensions.get('window');

const styles = {
  drawer: {
    rootViewContainerStyle: {flexGrow: 1},
    rootViewStyle: {
      height: height * 0.225,
      width: '100%',
      justifyContent: 'flex-end',
      backgroundColor: Colors.primary,
    },
    imageContainerStyle: {
      height: '80%',
      width: '45%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    moreContentContainerStyle: {
      marginVertical: 10,
      height: 1,
      backgroundColor: '#7777',
    },
  },
  screen: {
    rootViewStyle: {
      height: height * 0.07,
      marginBottom: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: '5%',
    },
    textStyle: {
      fontSize: FontSize.body - 2,
      color: Colors.text,
      marginLeft: '7.5%',
    },
  },
};

export default styles;
