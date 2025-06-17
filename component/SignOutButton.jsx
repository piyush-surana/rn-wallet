import { useClerk } from "@clerk/clerk-expo";
import { COLORS } from "../constants/color";
import { Alert, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";

export const SignOutButton = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "logout", style: "destructive", onPress: signOut },
    ]);
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  );
};
