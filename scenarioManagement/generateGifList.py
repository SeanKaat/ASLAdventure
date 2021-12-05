#this file generates the scenarioList js file
import os;

directory = "./scenarioManagement/gifs/"

# const ahead = require('../scenarioManagement/gifs/ahead.gif');

# const GifImages = {
#     ahead: ahead,

# }

# export default GifImages;


l = []

for root, dirs, files in os.walk(directory):
	for file in files:
		l.append(file.replace(".gif", ""))

print(l)

with open('./scenarioManagement/gifList.ts', 'w') as f:
    f.write("//GENERATED from ../generateGifList.py\n\n")
    for name in l:
        n = name.replace(" ", "_")
        f.write("const " + n + " = require('./gifs/" + name + ".gif');\n")
    f.write("\nconst GifImages = {\n")

    for name in l:
        n = name.replace(" ", "_")
        f.write("\t" + n + ": " + n + ",\n")

    f.write("}\nexport default GifImages;")