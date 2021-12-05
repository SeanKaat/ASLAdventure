#this file generates the scenarioList js file
import os;

directory = "./ASLAdventure/scenarioManagement/scenarios/"


l = []

for root, dirs, files in os.walk(directory):
	for file in files:
		l.append(file.replace(".json", ""))

with open('./ASLAdventure/scenarioManagement/scenarioList.js', 'w') as f:
    f.write("//GENERATED from ../generateScenarioList.py\n\n")
    for name in l:
        n = name.replace(" ", "_")
        f.write("import " + n + " from './scenarios/" + name + ".json'\n")
    f.write("\nexport default {\n")

    for name in l:
        n = name.replace(" ", "_")
        f.write("\t" + n + ",\n")

    f.write("}")