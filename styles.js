

import { StyleSheet, Dimensions } from 'react-native';

const { width ,height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#000',
  },

  item: {
   
    width: width,
    borderRadius:76,
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#fff',
    
    
  },
 


    image: {
        width: width * 0.7,
        height: width * 0.9,
        resizeMode: 'cover',
        
      },
});
