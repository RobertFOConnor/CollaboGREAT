import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import InputText from '../../components/atoms/InputText';
import Button from '../../components/atoms/Button';
import {APP_NAME, SLOGAN} from "../../locale/strings";
import {LOGIN_BACKGROUND} from "../../assets/images";
import styles from './login.style';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.background} resizeMode={'contain'} source={LOGIN_BACKGROUND}/>
                <Text style={styles.welcome}>{APP_NAME}</Text>
                <Text style={styles.instructions}>{SLOGAN}</Text>
                <InputText placeholder="Email or username"/>
                <InputText style={{marginTop: 10}} secureTextEntry placeholder="Password"/>
                <Button style={{marginTop: 30}} text={'Login'}
                        onPress={() => this.props.navigation.navigate('Profile')}/>
                <Button text={'Create account'} style={{marginTop: 10, backgroundColor: 'white'}}
                        textStyle={{color: 'purple'}}
                        onPress={() => this.props.navigation.navigate('Goals')}/>
            </View>
        );
    }
}

export default Login;