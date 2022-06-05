import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	Button,
	Pressable,
	TouchableOpacity,
} from "react-native";
import React from "react";
// import SignInScreen from "./SignInScreen";

const SignInScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
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
								Register
							</Text>
						</View>
						<View style={styles.seperatorEnd}></View>
					</View>
					<View>
						<Text style={styles.userText}>Name</Text>
						<TextInput
							style={styles.textI}
							placeholder="Enter your name"
							placeholderTextColor={"rgba(255,255,255,0.4)"}
						/>
					</View>
					<View>
						<Text style={styles.userText}>Email address</Text>
						<TextInput
							style={styles.textI}
							placeholder="Enter username or e-mail"
							placeholderTextColor={"rgba(255,255,255,0.4)"}
						/>
					</View>
					<View>
						<Text style={styles.userText}>Username</Text>
						<TextInput
							style={styles.textI}
							placeholder="Only alphanumeric allowed"
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

					<Pressable style={styles.pressStyleReg}>
						<Text style={styles.pressStyleText}>Register</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.btmContainer}>
				<Pressable
					style={styles.pressStyleSign}
					onPress={() => navigation.navigate("SignIn")}
				>
					<Text style={styles.pressStyleText}>Sign In</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#1E1E1E",
		height: "100%",
		// width: "100%",
		// position: "absolute",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		paadingBottom: 40,
	},
	signinst: {
		width: 320,
		height: 500,
		padding: 30,
		borderStyle: "solid",
		borderWidth: 1,
		// position: "absolute",
		backgroundColor: "#363434",
		borderRadius: 10,
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
	pressStyleSign: {
		width: 280,
		height: 45,
		borderRadius: 3,
		backgroundColor: "rgba(196, 196, 196, 0.2)",
		justifyContent: "center",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	pressStyleReg: {
		width: 280,
		height: 45,
		borderRadius: 3,
		backgroundColor: "#FF4E43",
		justifyContent: "center",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	pressStyleText: {
		color: "#FFFFFF",
		fontSize: 17,
	},

	// inputFieldLastChild: {
	// 	marginTop: -18,
	// },
	btmContainer: {
		marginBottom: 40,
	},
});

export default SignInScreen;
