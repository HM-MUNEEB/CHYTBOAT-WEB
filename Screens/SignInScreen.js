import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	Pressable,
	ScrollView,
} from "react-native";
import React from "react";
import RegisterScreen from "./RegisterScreen";

const SignInScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* <ScrollView> */}
			<View>
				<TouchableOpacity>
					<Image style={styles.img} source={require("../assets/logo.png")} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.text}>ChytBoat</Text>
				</TouchableOpacity>
			</View>
			<View>
				<View style={styles.signinst}>
					<View style={styles.seperatorStack}>
						<View style={styles.seperatorStart}></View>
						<View>
							<Text
								style={{
									textAlign: "center",
									fontSize: 24,
									color: "white",
								}}
							>
								Sign In
							</Text>
						</View>
						<View style={styles.seperatorEnd}></View>
					</View>
					<View style={styles.inputFieldFirstChild}>
						<Text style={styles.userText}>Email/UserName</Text>
						<TextInput
							style={styles.textI}
							placeholder="Enter username or e-mail"
							placeholderTextColor={"rgba(255,255,255,0.4)"}
						/>
					</View>

					<View style={styles.inputFieldLastChild}>
						<Text style={styles.userText}>Password</Text>
						<TextInput
							style={styles.textI}
							placeholder="Enter your Password"
							placeholderTextColor={"rgba(255,255,255,0.4)"}
						/>
					</View>
					<Pressable style={styles.pressStyleSign}>
						<Text style={styles.pressStyleText}>Sign In</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.btmContainer}>
				<View>
					<Text
						style={{ color: "white", textAlign: "center", marginBottom: 10 }}
					>
						Forgot your Password?
					</Text>
				</View>
				<Pressable
					style={styles.pressStyleReg}
					onPress={() => navigation.navigate("Registration")}
				>
					<Text style={styles.pressStyleText}>Register</Text>
				</Pressable>
			</View>
			{/* </ScrollView> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// position: "absolute",
		width: "100%",
		alignItems: "center",
		backgroundColor: "#1E1E1E",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		paadingBottom: 40,
	},
	signinst: {
		width: 320,
		height: 400,
		padding: 30,
		marginTop: 20,
		// position: "absolute",
		backgroundColor: "#363434",
		borderRadius: 10,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
	},
	img: {
		marginTop: 35,
	},
	text: {
		color: "white",
		fontSize: 20,
		// marginLeft: 15,
	},
	seperatorStack: {
		width: "100%",
		display: "flex",
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	seperatorEnd: {
		height: 2,
		backgroundColor: "rgba(255,255,255,0.65)",
		width: 80,
	},
	seperatorStart: {
		height: 2,
		backgroundColor: "rgba(255,255,255,0.65)",
		width: 80,
	},
	inputFieldFirstChild: {
		marginBottom: 10,
	},
	userText: {
		color: "white",
		marginBottom: 5,
		fontSize: 15,
		padding: 2,
	},
	textI: {
		color: "white",
		backgroundColor: "#1E1E1E",
		width: 280,
		height: 40,
		borderRadius: 5,
		padding: 10,
	},
	btn: {
		width: 300,
	},

	inputFieldLastChild: {
		marginTop: -18,
	},
	btmContainer: {
		marginBottom: 40,
	},
	pressStyleSign: {
		width: 280,
		height: 45,
		borderRadius: 3,
		backgroundColor: "#FF4E43",
		justifyContent: "center",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	pressStyleReg: {
		width: 280,
		height: 45,
		borderRadius: 3,
		backgroundColor: "rgba(196, 196, 196, 0.2)",
		justifyContent: "center",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	pressStyleText: {
		color: "#FFFFFF",
		fontSize: 17,
	},
});

export default SignInScreen;
