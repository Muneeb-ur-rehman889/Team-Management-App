import { StyleSheet } from 'react-native';
import {Dimensions, View} from 'react-native';
import Svg,{Path} from 'react-native-svg';
function Sheader({path,color}){
    const {width}= Dimensions.get('window');
    return(
        <>
            <View className='relative top-0  z-10' >
                <Svg width={'100%'} height={140} viewBox={`0 0 1440 400`}>
                    <Path
                   fill={color}
                  fillOpacity={1}
                     d={path}
                     transform="scale(1, 1.2)"
                    />
                </Svg>
            </View>
        </>
    );
}

export default Sheader