import { View, Text } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/color";

export const BalanceCard = ({ summary }) => {
  //console.log(summary._j);
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>
        ${parseFloat(summary._j?.balance).toFixed(2)}
      </Text>
      <View style={styles.balanceStats}>
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            +${parseFloat(summary._j?.income).toFixed(2)}
          </Text>
        </View>
        <View style={[styles.balanceStatItem,styles.statDivider]}/>
        <View style={styles.balanceStatItem}>
          <Text style={styles.balanceStatLabel}>Expense</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            -${Math.abs(summary._j?.expense).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

