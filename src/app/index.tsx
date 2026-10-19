import { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { authClient } from "@/lib/auth-client";

// Entry point – decides whether the user is signed in and redirects accordingly.
export default function Index() {
	const [checking, setChecking] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				// If a valid session exists, go to the home screen.
				await authClient.getSession();
				router.replace("/home");
			} catch {
				// No session – go to sign‑in.
				router.replace("/signin");
			} finally {
				setChecking(false);
			}
		})();
	}, []);

	if (checking) {
		return (
			<View style={styles.center}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	// While navigation occurs the component renders nothing.
	return null;
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
