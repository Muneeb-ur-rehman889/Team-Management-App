import { View,Image,ScrollView,Text,TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView, Platform} from 'react-native';
function Scrolling({children}){
    return(
        <>
             <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 100} 
              behavior={Platform.OS==='ios' ? 'padding' : 'height'}>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView keyboardShouldPersistTaps='handled' className="w-full" contentContainerStyle={{ alignItems: 'center',
                flexGrow: 1,
                justifyContent: 'center', 
                alignItems: 'center',    
               
             }}>
                    {children}
                 </ScrollView>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    );
}
export default Scrolling
