import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Scenario, ScenarioManager } from '../scenarioManagement/Scenarios';
import ScenarioElement from './Scenario';

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 270,
        height: 270,
    },
    textInput: {
        width: "90%",
        height: 50,
        borderColor: "black",
        borderWidth: 2,
    },
    button: {
        backgroundColor: "rgb(7, 38, 63)",
        padding: 20,
        borderRadius: 10,

    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22
    },
    instructions: {
        alignContent: "center",
        padding: 32,
        textAlign: "center",
        fontSize: 23,
    }
});

const Home = () => {
    const [currentScenario, setCurrentScenario] = useState<Scenario>();

    console.log("Current scenario is " + currentScenario);

    function loadIntro() {
        setCurrentScenario(ScenarioManager.getScenario("Introduction"));
    }

    return ( //if there is a current scenario, it will render it
        currentScenario ?
            (<ScenarioElement scenario={currentScenario} setCurrentScenario={setCurrentScenario} />)
            : (
                <View style={styles.base}>
                     <Image
                        style={styles.logo}
                        source={require('./ASLAdventureLogo.png')}
                    />
                    <Text style={styles.instructions}>This game is a prototype for a text adventure game that teaches users American Sign Language. Perform the sign of your selected path to continue to the next scenario and complete your journey. Good luck!</Text>
                    <TouchableOpacity onPress={() => loadIntro()} style={styles.button}>
                        <Text style={styles.buttonText}>PLAY GAME</Text>
                    </TouchableOpacity>
                </View>
            )
    );


}

export default Home;