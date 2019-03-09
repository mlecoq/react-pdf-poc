import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 10
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    width: "100%",
    borderBottom: "1 solid black"
  },
  images: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  imageContainer: {
    width: 100,
    height: 100
  },
  imageSection: {
    border: "1 solid black",
    padding: 5,
    maxWidth: "100%"
  },
  description: {
    fontSize: 7,
    marginLeft: 5,
    width: "60%"
  },
  details: {
    flexDirection: "row",
    maxWidth: "100%"
  }
});

const n = 20;

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Visite</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.main}>
          <Text>Infos</Text>
          {[...Array(n)].map((e, i) => (
            <View key={i} style={styles.imageSection} wrap={false}>
              <Text>Title</Text>

              <View style={styles.details}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    src="http://www.chien.nozamis.com/im-races/img-37-1.jpg"
                  />
                </View>

                <View>
                  <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse tristique vitae mi et aliquet. Nulla eget
                    porttitor ligula. Curabitur porta diam in ligula finibus
                    iaculis. Morbi tellus neque, scelerisque vitae lobortis eu,
                    aliquet et dolor. Fusce nulla mi, porttitor semper euismod
                    vel, accumsan id turpis. Nunc vel dolor ut sapien faucibus
                    commodo a facilisis libero. Nam id diam eget risus pharetra
                    iaculis ac at libero. Donec nunc tortor, faucibus et erat
                    quis, consectetur ultrices eros. Aliquam commodo aliquet
                    sagittis. Vivamus semper purus at sem faucibus, ac venenatis
                    mi semper. Etiam leo libero, mattis ac ultrices vel, semper
                    eu quam. Ut in urna pharetra, placerat metus vel, aliquam
                    est. Mauris pellentesque mauris ipsum, in fermentum nunc
                    placerat vitae. Integer elementum lorem eget arcu porttitor,
                    id malesuada elit aliquam. Morbi non auctor lorem. Proin
                    sapien orci, pretium in dolor at, porttitor tempor ante.
                    Curabitur nec bibendum tortor. Maecenas vel tortor erat.
                    Maecenas nec turpis mi. Aliquam tincidunt dictum diam in
                    pharetra. In id mi dictum, vehicula est vel, gravida nulla.
                    Duis consectetur blandit imperdiet. Donec est quam,
                    venenatis eget eros et, pretium iaculis velit. Morbi nisi
                    tellus, fringilla sed eleifend in, aliquet et metus. Donec
                    eget tristique velit. Quisque sollicitudin et justo ut
                    euismod. Duis vitae sapien vel dui consequat porta.
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
