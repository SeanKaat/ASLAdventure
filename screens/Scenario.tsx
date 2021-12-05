import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScenarioManager } from '../scenarioManagement/Scenarios';

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    logo: {
        alignItems: 'center',
        position: 'absolute',
        top: 60,
        width: 100,
        height: 100,
        marginBottom: 30
    },
    button: {
        backgroundColor: "rgb(7, 38, 63)",
        padding: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
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
    }
});

const Scenario = ({ scenario, setCurrentScenario }: any) => {
    console.log("Amount of option for current scenario: " + scenario.options.length);

    return (
        <View style={styles.base}>
            <TouchableOpacity onPress={() => setCurrentScenario(null)} style={styles.backButton}>
                <Text>Home</Text>
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require('./ASLAdventureLogo.png')}
            />
            <Text>{scenario.title}</Text>
            <Text>{scenario.content}</Text>
            {
                scenario.options.map((option: any, ind: number) => {
                    return (
                        <TouchableOpacity
                        onPress={() => setCurrentScenario(ScenarioManager.getScenario(option[0]))} style={styles.button}
                        key={ind}>
                            <Text style={styles.buttonText}>{option[2]}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

export default Scenario;