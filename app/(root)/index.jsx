import { useUser } from "@clerk/clerk-expo";
import { SignOutButton } from "../../component/SignOutButton";
import {
  Alert,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranscations } from "../../hooks/useTransactions";
import PageLoader from "../../component/PageLoader";
import { Image } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "../../assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { BalanceCard } from "../../component/BalanceCard";
import { TransactionItem } from "../../component/TransactionItem";
import NoTransactionFound from "../../component/NoTransactionFound";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTranscations(user.id);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleDelete = (id) => {
    console.log(id);
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to Delete this transaction",
      [
        { text: "cancel", style: "cancel" },
        {
          text: "delete",
          style: "destructive",
          onPress: () => deleteTransaction(id),
        },
      ]
    );
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (isLoading && !refreshing) return <PageLoader />;
      // console.log(summary)sfafsa
  return (

    <View style={styles.container}>
      <View style={styles.content}>
        {/* //HEADER */}
        <View style={styles.header}>
          {/* LEFT */}
          <View style={styles.headerLeft}>
            <Image
              source={require("../../assets/images/dollar.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            ></Image>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
          {/* //RGIHT */}
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push("/Create")}
            >
              <Ionicons name="add" size={18} color={"#fff"} />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        <BalanceCard summary={summary} />

        <View style={styles.transactionsContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>

      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={<NoTransactionFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></FlatList>
    </View>
  );
}
