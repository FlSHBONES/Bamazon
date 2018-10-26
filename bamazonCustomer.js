var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  transactionFunct();
});

function transactionFunct() {
  inquirer
    .prompt({
      name: "inventory",
      type: "list",
      message: "Here's the list of goods.  What are you buying?",
      choices: [
"[1]	tire irons",
"[2]	office chairs",
"[3]	ice cream pints (lime only)",
"[4]	red wagon wheels",
"[5]	used t-shirts",
"[6]	refurbished screwdrivers",
"[7]	120 oz dark coffee",
"[8]	steel cups",
"[9]	jeans (OSFA)",
"[10]	red wagons (no wheels)",
        // "Find songs by artist",
        // "Find all artists who appear more than once",
        // "Find data within a specific range",
        // "Search for a specific song",
        // "Find artists with a top song and top album in the same year"
      ]
    })
    .then(function(answer) {
      switch (answer.inventory) {
      case "[1]	tire irons":
        tireIrons();
        break;

      case "[2]	office chairs":
        officeChairs();
        break;

      case "[3]	ice cream pints (lime only)":
        iceCream();
        break;

      case "[4]	red wagon wheels":
        redWagon();
        break;

      case "[5]	used t-shirts":
        tShirts();
        break;

        case "[6]	refurbished screwdrivers":
        screwDriver();
        break;

      case "[7]	120 oz dark coffee":
        darkCoffee();
        break;

      case "[8]	steel cups":
        steelCups();
        break;

      case "[9] jeans (OSFA)":
        jEans();
        break;

      case "[10] red wagons (no wheels)":
        redWags();
        break;
      }
    });
}

function tireIrons() {
  var query = "SELECT product_name FROM bamazonDB GROUP BY product_name WHERE ?";
  connection.query(query, { inventory: answer.inventory }, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Found it");
    }
    transactionFunct();
  });
}