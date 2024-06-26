import  React from 'react'
import {Document, Page, Text, View, StyleSheet, PDFViewer} from '@react-pdf/renderer';
export default function BasicDocument(){
    const styles = StyleSheet.create({
        page:{
            backgroundColor: "#d11fb6",
            color: 'white',
        },
        section: {
            margin: 10,
            padding: 10,
        },
        viewer: {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    })
    return(
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size = "A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Hello</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>World</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>   
    )
}
   