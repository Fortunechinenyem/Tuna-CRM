import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  text: { fontSize: 12 },
});

export default function InvoicePDF({ invoice }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Invoice</Text>
          <Text>Customer: {invoice.customerName}</Text>
          <Text>Email: {invoice.customerEmail}</Text>
          <Text>Total Amount: ${invoice.totalAmount}</Text>
        </View>
      </Page>
    </Document>
  );
}
