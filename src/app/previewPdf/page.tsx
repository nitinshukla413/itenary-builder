import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

// Define styles for PDF rendering
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        color: '#4D9FD7',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    brief: {
        marginTop: 5,
        flexDirection: 'row',
    },
    textContainer: {
        width: '50%',
        marginRight: 10,
    },
    imageContainer: {
        width: '50%',
    },
    image: {
        width: '100%',
        height: '50%',
    },
    activities: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'flex-start', // Align items at the start of the flex container
    },
    activityTextContainer: {
        flex: 1, // Take up remaining space
        marginRight: 10,
    },
    activityImageContainer: {
        width: '20%', // Adjust width as needed
    },
});

const PreviewPdf = () => {
    return (
        <Document>
            <Page size="A4">
                <View style={styles.container}>
                    <Text style={styles.title}>Day 1: QueensTown</Text>
                    <View style={styles.brief}>
                        <View style={styles.textContainer}>
                            <Text>Brief</Text>
                            <Text style={{ marginTop: 10 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non tellus neque. Nam nulla libero, accumsan id elit quis, tincidunt varius lacus. Donec congue odio quis velit porta dictum. Phasellus venenatis, sapien sed congue porta, quam ex euismod elit, eu porttitor augue nunc id diam.
                            </Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                src="https://picsum.photos/seed/picsum/200/300" // Replace with the actual image URL
                                style={styles.image}
                            />
                        </View>
                    </View>
                    {/* Activities Section */}
                    <View style={styles.activities}>
                        <View style={styles.activityTextContainer}>
                            <Text>Activities</Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ marginLeft: 10 }}>- Phasellus varius posuere neque nec congue.</Text>
                                <Text style={{ marginLeft: 10 }}>- Praesent sed turpis luctus, feugiat elit non, posuere nisi.</Text>
                                <Text style={{ marginLeft: 10 }}>- Nullam luctus dictum augue in ultrices.</Text>
                                <Text style={{ marginLeft: 10 }}>- Morbi eu finibus nisl.</Text>
                                <Text style={{ marginLeft: 10 }}>- In hac habitasse platea dictumst.</Text>
                            </View>
                        </View>
                        <View style={styles.activityImageContainer}>
                            <Image
                                src="https://picsum.photos/seed/picsum/200/300" // Replace with the actual image URL
                                style={styles.image}
                            />
                        </View>
                    </View>


               
                </View>
            </Page>
        </Document>
    )
}

export default PreviewPdf;
