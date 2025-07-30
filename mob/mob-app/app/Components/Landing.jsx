import { View, ImageBackground, StyleSheet } from 'react-native';

function Landing({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/images/land-bg.png')}
      resizeMode="stretch"
      style={style.bgImg}
    >
      <View style={style.overlay} />
        {children}
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.25)', 
  },
});

export default Landing;
