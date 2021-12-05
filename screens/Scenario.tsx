import React from 'react';
import { ScrollView, View, StatusBar, Text, Button, StyleSheet, Image, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { ScenarioManager } from '../scenarioManagement/Scenarios';
import GifImages from '../scenarioManagement/gifList';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollViewStyle: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    logo: {
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        width: 100,
        height: 100,
        marginBottom: 30
    },
    buttonHolder: {
        display: "flex",
        flexDirection: "column",
        // width: "90%",
        padding: 10,
    },
    option: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    button: {
        backgroundColor: "rgb(7, 38, 63)",
        padding: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
    },
    buttonActionText: {
        color: "white",
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: "gray",
        padding: 10,
        // width: 100,
        // height: 100,
        // marginBottom: 30
    },
    mainText: {
        padding: 10,
        marginTop: 150,
        textAlign: "left",
        fontSize: 16
    },
    gifStyle: {
        height: 100,
        width: 100,
    },
    signButton: {
        alignSelf: 'center',
        height: 100,
        width: 160,
    }
});

const Scenario = ({ scenario, setCurrentScenario }: any) => {
    console.log("Amount of option for current scenario: " + scenario.options.length);

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            <TouchableOpacity onPress={() => setCurrentScenario(null)} style={styles.backButton}>
                <Text>Home</Text>
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require('./ASLAdventureLogo.png')}
            />
            <Text style={styles.mainText}>{scenario.content}</Text>
            <View style={styles.buttonHolder}>
                {
                    scenario.options.map((option: any, ind: number) => {
                        // @ts-ignore
                        const gif = GifImages[option[1]];
                        const actionPos = option[2].toLowerCase().search(option[1]);
                        const firstHalf = option[2].substring(0, actionPos);
                        const actionInOption = option[2].substring(actionPos, actionPos+option[1].length);
                        const secHalf = option[2].substring(actionPos+option[1].length, option[2].length);
                        return (
                            <View style={styles.option} key={ind}>
                                <Image source={gif} style={styles.gifStyle} />
                                <TouchableOpacity
                                    onPress={() => setCurrentScenario(ScenarioManager.getScenario(option[0]))}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>
                                        {firstHalf}
                                        <Text style={styles.buttonActionText}>
                                            {actionInOption}
                                        </Text>
                                        {secHalf}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
        <Image
            source={require('./signButton2.png')}
            style={styles.signButton}
        />
        </SafeAreaView>
    );
}

export default Scenario;