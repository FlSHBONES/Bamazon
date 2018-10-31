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
  database: "bamazondb"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("\n successful connection to bamazondb! \n")
  transactionFunct();
});

var item = ""

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
        
      ]
    })
    .then(function (answer) {
      switch (answer.inventory) {
        case "[1]	tire irons":
          itemId = 1;
          item = "tire iron(s)"
          purchase();
          break;

        case "[2]	office chairs":
        itemId = 2;
        item = "office chairs";
        purchase();
          break;

        case "[3]	ice cream pints (lime only)":
        itemId = 3;
        item = "ice cream pints (lime only)";
        purchase();
          break;

        case "[4]	red wagon wheels":
        itemId = 4;
        item = "red wagon wheels";
        purchase();
          break;

        case "[5]	used t-shirts":
        itemId = 5;
        item = "used t-shirts";
        purchase();
          break;

        case "[6]	refurbished screwdrivers":
        itemId = 6;
        item = "refurbished screwdrivers";
        purchase();
          break;

        case "[7]	120 oz dark coffee":
        itemId = 7;
        item = "120 oz dark coffee";
        purchase();
          break;

        case "[8]	steel cups":
        itemId = 8;
        item = "steel cups";
        purchase();
          break;

        case "[9] jeans (OSFA)":
        itemId = 9;
        item = "jeans (OSFA)";
        purchase();
          break;

        case "[10] red wagons (no wheels)":
        itemId = 10;
        item = "red wagons (no wheels)";
        purchase();
          break;
      }
    });
}

function purchase() {
  inquirer
    .prompt({
      name: "inventoryIron",
      type: "input",
      message: "How many?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    })

    .then(function (answer) {
      var query = "SELECT stock_quantity FROM bamazondb.products WHERE item_id =" + itemId;
        //   var query = "UPDATE bamazondb.products SET stock_quantity=stock_quantity - " + answer.inventoryIron + " WHERE item_id=" + itemid;
      connection.query(query, { inventoryIron: answer.inventoryIron }, function (err, res) {
        if (JSON.stringify(res[0].stock_quantity) >= answer.inventoryIron) {
          console.log("\n"+ answer.inventoryIron + " " + item + "coming up!" );
          console.log(JSON.stringify(res[0].stock_quantity));
        //   query = "UPDATE stock_quantity FROM bamazondb.products SET stock_quantity = stock_quantity - " + answer.inventoryIron + " WHERE product_name = 'tire irons'";
        query = "UPDATE bamazondb.products SET stock_quantity=stock_quantity - " + answer.inventoryIron + " WHERE item_id=" + itemId;
          connection.query(query, { inventoryIron: answer.inventoryIron }, function (err, res) {
                        console.log('\n Quantity Now Remaining: ' + JSON.stringify(res[0]));
            // {"fieldCount":0,"affectedRows":1,"insertId":0,"serverStatus":2,"warningCount":0,"message":"(Rows matched: 1  Changed: 1  Warnings: 0","protocol41":true,"changedRows":1} test2
          })
        }
        else { console.log("No can do, we dont have that many!  We have " + JSON.stringify(res[0].stock_quantity) + ' in our inventory!') }

        console.log('\n --------------------\n');
        transactionFunct();
      });
    });
}
