import scenarioList from "./scenarioList";


export class Option {
    nextScenario = "";
    text = "";

    constructor(nextScenario, text) {
        this.nextScenario = nextScenario;
        this.text = text;
    }
}

export class Scenario {
    title = "";
    content = "";
    options = [];
    image = "";

    constructor(title, content, options, image = "") {
        this.title = title;
        this.content = content;
        this.options = options;
        this.image = image;
    }

    toString() {
        return this.title + ": " + this.content + "\n" + "Options: " + this.options + "; Image?: " + this.image;
    }
}

export class ScenarioManager {
    static getScenarios() {
        const scenarios = [];

        for (const key in scenarioList) {
            const s = scenarioList[key];
            scenarios.push(new Scenario(s.title, s.content, s.options));
        }

        return scenarios;
    }

    static getScenario(title) {
        const sList = ScenarioManager.getScenarios();

        for (var scen of sList) {
            if (scen.title == title) {
                return scen;
            }
        }
    }
}