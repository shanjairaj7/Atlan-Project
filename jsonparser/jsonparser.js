// Importing all modules
const fs = require("fs");
const csvFilePath = "./archive/deliveries.csv";
const csv = require("csvtojson");
const readXlsxFile = require("read-excel-file/node");

//  Looping through the folder and getting data from each file
const dir = "./archive";
const fileNames = fs.readdirSync(dir);

fileNames.forEach((fileName) => {
  // console.log("./archive/" + fileName);

  // Get the data from Excel file
  readXlsxFile("./archive/Players.xlsx").then(({ rows, columns }) => {
    console.log(columns);
    fs.writeFile(
      "./json-files/Players.json",
      JSON.stringify(rows),
      function (err) {
        if (err) throw err;
      }
    );
  });

  // Get data from CSV files
  if (fileName !== "deliveries.csv") {
    csv()
      .fromFile("./archive/" + fileName)
      .then((json) => {
        fs.writeFile(
          "./json-files/" + fileName.split(".")[0] + ".json",
          JSON.stringify(json),
          function (err) {
            if (err) throw err;
          }
        );
        console.log("JSON file created as ", fileName.split(".")[0] + ".json");
      })
      .catch((error) => {
        console.log("CSV Parse error");
      });
  }

  // ! Test code
  // if (fileName !== "deliveries.csv") {
  //   csv()
  //     .fromFile(`${dir}/${fileName}`)
  //     .then((json) => {
  //       fs.writeFile(`${1}.json`, JSON.stringify(json), function (err) {
  //         if (err) throw err;
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
});
