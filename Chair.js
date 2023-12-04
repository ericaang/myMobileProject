import {useState} from 'react';
import {Text} from 'react-native';

const Chair = props => {
  const {theme} = props;
  const [isBig, seIsBig] = useState(false);
  console.log('isBig=', isBig);
  const changeState = () => {
    seIsBig(!isBig);
  };
  return (
    <Text
      style={{
        fontSize: isBig ? 24 : 14,
        color: theme == 'dark' ? 'grey' : 'purple',
      }}
      onPress={changeState}>
      This is a chair
    </Text>
  );
};

export default Chair;
