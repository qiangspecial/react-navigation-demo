import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ListView,
    Platform,
    Image
} from 'react-native';
import CommonHeader from './common/head'

export default class App extends Component {
    static navigationOptions = {
        title: 'Chats',
        header: {
        visible: Platform.OS === 'ios',
        },
        tabBar: {
        icon: ({ tintColor }) => (
            <Image
            // Using react-native-vector-icons works here too
            source={require('../chat/chat-icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
        },
    }
	render() {
		return (
			<View>
				<CommonHeader />
				{/*头部蓝色位置*/}
				<IndexBanner />
				{/*场地列表*/}
				<ChangDI />
			</View>
		);
	}
}
//首页头部整体统计
class IndexBanner extends Component {
	constructor(props){
		super(props);
	};
	render (){
		return (
			<View style={styles.indexBanner}>
				<View style={[styles.totalTitle,{marginTop:10}]}>
					<Text style={{color:"#fff"}}>昨日统计（元）</Text>
				</View>
				<View style={styles.totalTitle}>
					<Text style={{color:"#fff",fontSize:36}}>60000</Text>
				</View>
				<View style={{flexDirection:'row'}}>
					<View style={styles.halfBox}>
						<View style={styles.half}>
							<View style={[styles.totalTitle,styles.totalTile1]}>
								<Text style={{color:"#fff"}}>本月累计（元）</Text>
							</View>
							<View style={[styles.totalTitle,styles.totalTile1]}>
								<Text style={{color:"#fff",fontSize:14}}>60000</Text>
							</View>
						</View>
					</View>
					<View style={styles.halfBox}>
						<View style={styles.half}>
							<View style={[styles.totalTitle,styles.totalTile1]}>
								<Text style={{color:"#fff"}}>本年累计（元）</Text>
							</View>

							<View style={[styles.totalTitle,styles.totalTile1]}>
								<Text style={{color:"#fff",fontSize:14}}>5000</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	};
}
//场地概况
class ChangDI extends Component {
	constructor (props){
		super(props)
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				{
					cdmc:"羽毛球",
					cdje:3000,
					cddd:20,
					cdrc:10
				},
				{
					cdmc:"足球球",
					cdje:3000,
					cddd:20,
					cdrc:10
				},
				{
					cdmc:"网球馆",
					cdje:3000,
					cddd:20,
					cdrc:10
				},
				{
					cdmc:"篮球场",
					cdje:3000,
					cddd:20,
					cdrc:10
				}
			])
		};
	}
	render (){
		return (
			<View>
				<View style={styles.changdiTitle}>
					<Text style={{color:"#3883ca",paddingLeft:5,paddingRight:5}}>&#xe68a;</Text>
					<Text style={{fontSize:16,color:'#222'}}>场地概况</Text>
				</View>
				<View>

					<ListView
						dataSource={this.state.dataSource}
						renderRow={(rowData) => (
							<View style={styles.cdLIst}>
								<View style={[styles.cdLIstText,{flex:3,justifyContent:'flex-start',flexDirection:'row'}]}>
									<Text style={{color:'#3883ca'}}>
										&#xe608;
									</Text>
									<Text>
										{rowData.cdmc}
									</Text>
								</View>
								<View style={[styles.cdLIstText,{flex:1}]}>
									<Text>
										{rowData.cdje}
									</Text>
								</View>
								<View style={[styles.cdLIstText,{flex:1}]}>
									<Text>
										{rowData.cddd}
									</Text>
								</View>
								<View style={[styles.cdLIstText,{flex:1}]}>
									<Text>
										{rowData.cdrc}
									</Text>
								</View>
							</View>
						)}
						renderHeader = {()=>(
							<View style={styles.cdLIst}>
								<View style={[styles.cdLIstText,{flex:3,height:30,alignItems:'flex-start'}]}>
									<Text style={{fontSize:12,paddingLeft:12}}>
										场地名称
									</Text>
								</View>
								<View style={[styles.cdLIstText,{flex:1,height:30}]}>
									<Text style={{fontSize:12}}>
										金额
									</Text>
								</View>
								<View style={[styles.cdLIstText,{flex:1,height:30}]}>
									<Text style={{fontSize:12}}>
										订单数
									</Text>
								</View>
								<View style={[styles.cdLIstText,{flex:1,height:30}]}>
									<Text style={{fontSize:12}}>
										人次
									</Text>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	indexBanner:{
		height:173,
		backgroundColor:"#3883ca"
	},
	totalTitle:{
		alignSelf:"center",
		height:50,
		justifyContent:'center'
	},
	halfBox:{
		flex:1
	},
	totalTile1:{
		height:30
	},
	changdiTitle:{
		height:40,
		alignItems:"center",
		borderBottomWidth:1,
		borderColor:"#ccc",
		flexDirection:"row"
	},
	cdLIst:{
		flexDirection:'row',
	},
	cdLIstText:{
		justifyContent:'center',
		height:40,
		alignItems:"center"
	},
    icon: {
        width: 30,
        height: 26,
    },
});

