import { View, Text } from 'react-native';
import { styles } from './styles';
import Component1 from './src/ScrollView/index';

function App(){
  return(
     <View style={{ flex: 1 }}>
        <Text style={[styles.titulos, styles.textoPrincipal]}>Vagas </Text>
      
        <Component1 />
      </View>
  )
}

export default App;