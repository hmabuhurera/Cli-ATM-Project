//Inquirer Importer
import inquirer from "inquirer";
//Blace info
let myBlance = 20000;
//Pin info
let myPin = 12345;
//satatment pinAnswer and Conditanal Statment
let pinAns = await inquirer.prompt([
    {
        name: "atmpin",
        type: "number",
        message: "pleace enter your correct pin number",
    }
]);
if (pinAns.atmpin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "action",
            message: "pleace select opetion",
            type: "list",
            choices: ["Withdraw", "Check Blance", "Fast Withdraw", "Bill Paid"]
        }
    ]);
    if (operationAns.action === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Yout Amount",
                type: "number",
            }
        ]);
        myBlance -= amountAns.amount;
        console.log(`Your Remaning Balance is : + ${myBlance}`);
    }
    else if (operationAns.action === "Check Blance") {
        console.log(`Your Blance is : + ${myBlance}`);
    }
    else if (operationAns.action === "Bill Paid") {
        let bilAns = await inquirer.prompt([
            {
                name: "bill",
                messange: "select your bill",
                type: "list",
                choices: ["KE Bill", "SSGC Bill", "KWSB Bill", "OPTCL Bill", "UNIVERCITY Challan"]
            }
        ]);
        console.log(`SORRY!! Our Team Work To Resolve It (TAKE CARE)`);
    }
    else if (operationAns.action === "Fast Withdraw") {
        let fastAns = await inquirer.prompt([
            {
                name: "quick",
                message: "select amount",
                type: "list",
                choices: [1000, 5000, 10000, 50000, 100000]
            }
        ]);
        if (fastAns.quick > myBlance) {
            console.log("Insufficient Blance");
        }
        else {
            myBlance -= fastAns.quick,
                console.log(`${fastAns.quick} withdraw Succesfully`),
                console.log(`Your Remaning Balance is: = ${myBlance}`);
        }
    }
}
else {
    console.log("Incorrect Pin Pleace Try again");
}
;
