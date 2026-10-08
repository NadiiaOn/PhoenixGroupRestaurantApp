import {
  FlatList,
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { MinusIcon, PlusIcon, TrashIcon } from "phosphor-react-native";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Fonts from "../constants/Fonts";

export default function OrderScreen({ navigation }) {
  const {
    items,
    changeQuantity,
    removeItem,
    clearCart,
    totalCount,
    totalPrice,
  } = useCart();

  function handlePlaceOrder() {
    Alert.alert("Order placed!", `Thank you!`, [
      { text: "OK", onPress: clearCart },
    ]);
  }

  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Your order is empty</Text>
          <Text style={styles.emptyText}>
            Add something tasty to your order, we recommend the Swedish
            meatballs.
          </Text>
          <Pressable
            onPress={() => navigation.navigate("FoodMenu")}
            style={({ pressed }) =>
              pressed
                ? [styles.primaryButton, styles.pressed]
                : styles.primaryButton
            }
          >
            <Text style={styles.primaryButtonText}>Browse the menu</Text>
          </Pressable>
        </View>
        <Navbar />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.content}
        data={items}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <OrderRow
            item={item}
            onIncrease={() => changeQuantity(item.key, 1)}
            onDecrease={() => changeQuantity(item.key, -1)}
            onRemove={() => removeItem(item.key)}
          />
        )}
        ListFooterComponent={
          <View style={styles.summary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Items</Text>
              <Text style={styles.summaryValue}>{totalCount}</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${totalPrice} </Text>
            </View>

            <Pressable
              onPress={handlePlaceOrder}
              style={({ pressed }) =>
                pressed
                  ? [styles.primaryButton, styles.pressed]
                  : styles.primaryButton
              }
            >
              <Text style={styles.primaryButtonText}>
                Place order · ${totalPrice}
              </Text>
            </Pressable>
          </View>
        }
      />

      <Navbar />
    </View>
  );
}

function OrderRow({ item, onIncrease, onDecrease, onRemove }) {
  const { product, quantity } = item;
  const imageSource =
    typeof product.image === "string" ? { uri: product.image } : product.image;

  return (
    <View style={styles.row}>
      {imageSource ? (
        <Image
          source={imageSource}
          style={styles.thumbnail}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
      ) : (
        <View style={[styles.thumbnail, styles.thumbnailPlaceholder]} />
      )}

      <View style={styles.rowInfo}>
        <View style={styles.rowHeader}>
          <Text style={styles.rowName} numberOfLines={1}>
            {product.name}
          </Text>
          <Pressable
            onPress={onRemove}
            hitSlop={10}
            style={styles.removeButton}
          >
            <TrashIcon size={18} color="#999" />
          </Pressable>
        </View>

        <Text style={styles.rowUnitPrice}>${product.price} each</Text>

        <View style={styles.rowFooter}>
          <View style={styles.stepper}>
            <Pressable
              onPress={onDecrease}
              hitSlop={8}
              style={styles.stepperButton}
            >
              <MinusIcon size={16} color="#222" weight="bold" />
            </Pressable>
            <Text style={styles.stepperValue}>{quantity}</Text>
            <Pressable
              onPress={onIncrease}
              hitSlop={8}
              style={styles.stepperButton}
            >
              <PlusIcon size={16} color="#222" weight="bold" />
            </Pressable>
          </View>

          <Text style={styles.rowTotal}>${product.price * quantity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 120,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  thumbnail: {
    width: 84,
    height: 84,
    borderRadius: 10,
  },
  thumbnailPlaceholder: {
    backgroundColor: "#eeeeee",
  },
  rowInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowName: {
    flex: 1,
    fontFamily: Fonts.heading,
    fontSize: 16,
    color: "#222",
    marginRight: 8,
  },
  removeButton: {
    padding: 2,
  },
  rowUnitPrice: {
    fontFamily: Fonts.body,
    fontSize: 13,
    color: "#888",
  },
  rowFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f0ec",
    borderRadius: 20,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  stepperButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  stepperValue: {
    minWidth: 24,
    textAlign: "center",
    fontFamily: Fonts.headingMedium,
    fontSize: 15,
    color: "#222",
  },
  rowTotal: {
    fontFamily: Fonts.headingMedium,
    fontSize: 16,
    color: "#f45a45",
  },
  summary: {
    marginTop: 8,
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#faf6f2",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontFamily: Fonts.body,
    fontSize: 15,
    color: "#555",
  },
  summaryValue: {
    fontFamily: Fonts.bodySemiBold,
    fontSize: 15,
    color: "#222",
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#eadfd5",
    paddingTop: 10,
    marginBottom: 16,
  },
  totalLabel: {
    fontFamily: Fonts.heading,
    fontSize: 18,
    color: "#222",
  },
  totalValue: {
    fontFamily: Fonts.heading,
    fontSize: 18,
    color: "#f45a45",
  },
  primaryButton: {
    backgroundColor: "#f45a45",
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  primaryButtonText: {
    fontFamily: Fonts.heading,
    fontSize: 16,
    color: "#fff",
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingBottom: 100,
  },
  emptyTitle: {
    fontFamily: Fonts.heading,
    fontSize: 22,
    color: "#222",
    marginBottom: 8,
  },
  emptyText: {
    fontFamily: Fonts.body,
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
});