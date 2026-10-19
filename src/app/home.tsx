import { useEffect, useState } from "react";
import {
	View,
	Text,
	Button,
	ActivityIndicator,
	StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { authClient } from "@/lib/auth-client";

export default function HomeScreen() {
	const [profile, setProfile] = useState<{ name?: string } | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await authClient.getSession();
				// The response shape includes a `user` field with profile data.
				setProfile(data?.user ?? null);
			} catch (e: any) {
				setError(e?.message ?? "Failed to load session.");
				// If there is no valid session, send the user back to sign‑in.
				router.replace("/signin");
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	const handleSignOut = async () => {
		try {
			await authClient.signOut();
			router.replace("/signin");
		} catch {
			// ignore errors during sign out
		}
	};

	if (loading) {
		return (
			<View style={styles.center}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.center}>
				<Text style={styles.error}>{error}</Text>
				<Button title="Retry" onPress={() => router.replace("/home")} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Welcome, {profile?.name ?? "User"}!</Text>
			<Button title="Sign Out" onPress={handleSignOut} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	center: { flex: 1, justifyContent: "center", alignItems: "center" },
	welcome: { fontSize: 20, marginBottom: 20 },
	error: { color: "red", marginBottom: 12 },
});
