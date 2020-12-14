# Atlan Project

To use this, do npm install, then you could type npm start and start up the server

# Node.js script for scraping the data

As I received the data in a CSV file, I wrote a Node.js script that gets the data from the CSV files and then puts it in it's own JSON file. Then I used those files inside of the react project. I then made API calls to that JSON file, got the data and then used it to create the application.

# How to test Node.js Script

I have a folder named jsonparser in the project, which has the node.js script project files in it. Then I have the code in a jsonparser.js file. I used various npm packages like csvtojson, to scrape the data from the CSV file and then put them in their own JSON file.

I already have a folder that has the example of the JSON files that the script generates. However, if you want to test it out for yourself, you could delete the folder named json-files and then run the script file named jsonparser.js and that will create a new folder called json-files and then insert the specific json files into it.

💡 Thank you
