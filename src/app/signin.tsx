import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	ActivityIndicator,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { router } from "expo-router";
import { authClient } from "@/lib/auth-client";

export default function SignInScreen() {
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [step, setStep] = useState<"email" | "otp">("email");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const validateEmail = (value: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(value);
	};

	const sendCode = async () => {
		setError(null);
		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}
		setLoading(true);
		try {
			await authClient.emailOtp.sendVerificationOtp({
				email,
				type: "sign-in",
			});
			setStep("otp");
		} catch (e: any) {
			setError(e?.message ?? "Failed to send verification code.");
		} finally {
			setLoading(false);
		}
	};

	const verifyCode = async () => {
		setError(null);
		setLoading(true);
		try {
			await authClient.signIn.emailOtp({
				email,
				otp,
			});
			// Sign‑in succeeded – go to the protected home screen.
			router.replace("/home");
		} catch (e: any) {
			setError(e?.message ?? "Invalid or expired code.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : undefined}
			style={styles.container}
		>
			<View style={styles.inner}>
				{step === "email" ? (
					<>
						<Text style={styles.title}>Sign In</Text>
						<TextInput
							placeholder="Email"
							autoCapitalize="none"
							keyboardType="email-address"
							value={email}
							onChangeText={setEmail}
							style={styles.input}
						/>
						{error && <Text style={styles.error}>{error}</Text>}
						{loading ? (
							<ActivityIndicator />
						) : (
							<Button title="Send Code" onPress={sendCode} />
						)}
					</>
				) : (
					<>
						<Text style={styles.title}>Enter Verification Code</Text>
						<TextInput
							placeholder="6‑digit code"
							keyboardType="number-pad"
							value={otp}
							onChangeText={setOtp}
							style={styles.input}
						/>
						{error && <Text style={styles.error}>{error}</Text>}
						{loading ? (
							<ActivityIndicator />
						) : (
							<Button title="Verify" onPress={verifyCode} />
						)}
						<Button title="Resend Code" onPress={sendCode} disabled={loading} />
					</>
				)}
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	inner: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
		gap: 12,
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
		textAlign: "center",
		marginBottom: 12,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 6,
		padding: 10,
	},
	error: { color: "red", textAlign: "center" },
});
