// binaryCalculator.css

body {
    width: 33%
}

#res {
    background-color: lightgray; 
    border: 1px solid;
    height: 48px;
    font-size: 20px;
}

#btns button {
    width: 25%;
    height: 36px;
    font-size: 18px;
    margin: 0px;
    float: left;
}

#btn0, #btn1 {
    background-color: lightgreen;
    color: brown;
}

#btnClr, #btnEql {
    background-color: darkgreen;
    color: white;
}

.operatorBtns {
    background-color: black;
    color: red;
}

// binaryCalculator.js

(function(){
    const result = document.getElementById("res");
    const btns = document.getElementById("btns");
    let lastOpr = '';
    btns.addEventListener('click', function(e){
        let { innerHTML } = result;
        const { textContent, id }  = e.srcElement;
        const OPERATORS = ['+','-','*','/']
        if(OPERATORS.includes(textContent)) lastOpr = textContent;
        if(id !== 'btnClr' && id !== 'btnEql')
            innerHTML = innerHTML + textContent;
        if(id === 'btnClr')
            innerHTML = '';
        if(id === 'btnEql'){
            const arr = innerHTML.split(/[+*\/-]/)
            const num1 = parseInt(arr[0], 2).toString(10);
            const num2 = parseInt(arr[1], 2).toString(10);
            if(lastOpr === '+')
                innerHTML = (num1 + num2 >>> 0).toString(2)
            if(lastOpr === '-')
                innerHTML = (num1 - num2 >>> 0).toString(2)
            if(lastOpr === '*')
                innerHTML = (num1 * num2 >>> 0).toString(2)
            if(lastOpr === '/')
                innerHTML = (num1 / num2 >>> 0).toString(2)
        }
        result.innerHTML = innerHTML;
    })
})()

// index.html

<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    <body>
        <div id="res"></div>
        <div id="btns">
            <button id="btn0">0</button>
            <button id="btn1">1</button>
            <button id="btnClr">C</button>
            <button id="btnEql">=</button>
            <button id="btnSum" class="operatorBtns">+</button>
            <button id="btnSub" class="operatorBtns">-</button>
            <button id="btnMul" class="operatorBtns">*</button>
            <button id="btnDiv" class="operatorBtns">/</button>
        </div>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>
