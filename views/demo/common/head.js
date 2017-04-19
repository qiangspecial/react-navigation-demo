/**
 * Created by chingo on 2017/4/17.
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class CommonHeader extends Component {
	render() {
		return (
			<View style={styles.header}>
				<Text style={{color:'#fff',fontSize:18}}>场馆收费统计</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	header:{
		height:40,
		backgroundColor:"#3883ca",
		alignItems:"center",
		justifyContent:"center"
	}
})