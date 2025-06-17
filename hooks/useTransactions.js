import { useCallback, useState } from "react";
import { Alert } from "react-native";

export const useTranscations = (userID) => {
  // "https://rn-wallet-backend-i12g.onrender.com/api"
  const API_URL = "https://rn-wallet-backend-i12g.onrender.com/api";
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userID}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching Transactions : ", error);
    }
  }, [userID]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userID}`);
      const data = response.json();
      setSummary(data);
    } catch (error) {
      console.error("Error fetching Summary : ", error);
    }
  }, [userID]);

  const loadData = useCallback(async () => {
    if (!userID) return;
    setIsLoading(true);
    try {
      await Promise.all([fetchSummary(), fetchTransactions()]);
      console.log(summary);
    } catch (error) {
      console.error("Error loading Data : ", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetchSummary, userID]);

  const deleteTransaction = async (id) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "Delete",
      });
      if (!response.ok) throw new Error("Failed to delete Transaction");
      loadData();
      Alert.alert("Success", "Transaction Deleted Successfully");
    } catch (error) {
      console.error("Error deleting transaction", error);
      Alert.alert("Error", error.message);
    }
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };
};
