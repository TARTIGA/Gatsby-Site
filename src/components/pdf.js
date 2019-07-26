import React from "react"
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer"

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

// Create Document Component
export const MyDocument = ({ label1, label2 }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
          Mollitia et ad {label1}. Facilis repellendus sit qui. Aut voluptas
          optio {label2}.
        </Text>
      </View>
    </Page>
  </Document>
)
