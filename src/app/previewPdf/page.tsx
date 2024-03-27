import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

// Define styles for PDF rendering
const styles = StyleSheet.create({
    image1: {
        width: '100%',
        height: '100%',
        zIndex: -2
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    flexWithRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexWithCol: {
        display: 'flex',
        flexDirection: 'column'
    },
    container2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20, // Adjust as needed
        marginVertical: 20,
    },
    activityContainer: {
        width: '45%', // Adjust as needed to leave space for margins
        marginBottom: 40, // Adjust as needed
    },
    activityText: {
        fontSize: 20,
        color: '#4D9FD7',
        fontWeight: 'bold',
    },
});

const acitivity = ["Hiking",
    "Exploring ",
    "Cruising",
    "Visiting Hobbiton ",
    "bungee",
    "Tramping ",
    "jumping",
    "skydiving",
    "Taking pine",
    "Mountain biking i",
    "Exploring the Waitakere ",]
const PreviewPdf = () => {
    return (
        <Document>
            <Page size="A4" >
                <View style={{width:'100%',height:'100%'}}>
                <View style={{ display: 'flex', width: '60%', flexDirection: 'column', position: 'absolute', top: 300, left: 50 }}>
                        <Text style={{ fontSize: 40, color: 'white' }}>Explore</Text>
                        <Text style={{ fontSize: 18, color: 'white', }}>Traveling – it leaves you speechless, then turns you into a storyteller.
                            Kiwian Panorama
                            8 Days and  7 nights
                        </Text>
                    </View>
                    <Image
                        src={"https://images.unsplash.com/photo-1517800497904-3253a0f38be5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        style={styles.image1}
                    />
                </View>
                <View style={styles.container}>
                   
                   
                   {/*  */}
                    <Image
                        src={"https://media.istockphoto.com/id/1148985714/photo/tranalpine-train.jpg?s=612x612&w=0&k=20&c=yb7AfmMD8dCxRW0AR5u1Lo7YBL7FMVIoy5B2YHERjyQ="}
                        style={{ width: '100%', height: 250 }}
                    />
                    <View style={{ ...styles.flexWithCol, padding: 40 }}>
                        <Text style={{ fontSize: 50, color: '#4D9FD7', fontWeight: 'bold' }}>Things to be done</Text>
                        <View style={styles.container2}>
                            {acitivity.map((activity, index) => (
                                <View key={index} style={styles.activityContainer}>
                                    <Text style={styles.activityText}>{index + 1}. {activity}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={{ ...styles.flexWithRow, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 70 }}>
                        <Image
                            src={"https://images.unsplash.com/photo-1515248027005-c33283ec3fba?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            style={{ height: 250, width: '40%', objectFit: 'cover' }}
                        />
                        <View style={{ ...styles.flexWithCol, width: '60%', paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 40, color: '#4D9FD7' ,marginBottom:20 }}>Why Choose Travel Tara?</Text>
                            <Text style={{ fontSize: 20, }}>Lorem ipsum dllus vgue itumst. Sed in metus a sem mattLorem ipsum dllus vgue itumst. Sed in metus a sem mattLorem ipsum dllus vgue itumst. Sed in metus a sem mattLorem ipsum dllus vgue itumst. Sed in metus a sem mattLorem ipsum dllus vgue itumst. Sed in metus a sem mattis finibus. Aliquam id ligula pulvinar, bibendum mi vitae, efficitur sem.</Text>
                        </View>
                    </View>
                    <Image
                        src={"https://images.unsplash.com/photo-1578305034822-5dab0fea5ded?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        style={{ height: 200, width: '100%', objectFit: 'cover' }}
                    />
                    <View style={{width:100,height:100}}></View>
                    <View style={{ ...styles.flexWithCol, paddingVertical: 70 }}>
                    <Text style={{fontSize:50, color: '#4D9FD7',padding:40 }}>Day 1: Queensland</Text>
                    <View style={{ ...styles.flexWithRow, justifyContent: 'space-between',padding:20 , alignItems: 'center', paddingVertical: 50 }}>
                        <View style={{ ...styles.flexWithCol, width: '60%', paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 40, color: '#4D9FD7' ,marginBottom:20 }}>BRIEF</Text>
                            <Text style={{ fontSize: 20, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non tellus neque. Nam nulla elit augue in ultrices. Morbi eu finibus nisl. In hac habitasse platea dictumst. Sed in metus a sem mattis finibus. Aliquam id ligula pulvinar, bibendum mi vitae, efficitur sem.</Text>
                        </View> 
                         <Image
                            src={"https://images.unsplash.com/photo-1562620948-7ef06527f430?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            style={{ height: 200, width: '40%', objectFit: 'cover' }}
                        />

                    </View>
                    <View style={{ ...styles.flexWithRow, justifyContent: 'space-between',paddingHorizontal:20 , alignItems: 'center', paddingVertical: 50 }}>
                        <View style={{ ...styles.flexWithCol, width: '60%', paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 40, color: '#4D9FD7' ,marginBottom:20 }}>Activities</Text>
                            <Text style={{ fontSize: 20, }}>Lorem ipsum dolor sit ametsl. In hac habitasse platea dictumst. Sed in metus a sem mattis finibus. Aliquam id ligula pulvinar, bibendum mi vitae, efficitur sem.</Text>
                        </View> 
                         <Image
                            src={"https://images.unsplash.com/photo-1578305034822-5dab0fea5ded?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            style={{ height: 200, width: '40%', objectFit: 'cover' }}
                        />

                    </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default PreviewPdf;
