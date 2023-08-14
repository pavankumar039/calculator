let operator="";
let firstnum="";
let secondnum="";

function append(number){
    if(operator===""){
        firstnum+=number;
        document.getElementById('result').value=firstnum;


    }
    else{
        secondnum+=number;
        document.getElementById('result').value=secondnum;
        
    }
}
function operationL(op){
    operator=op;

}
function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstnum)+parseInt(secondnum);
            break;
        case '-':
            result=parseInt(firstnum)-parseInt(secondnum);
            break;
        case '*':
            result=parseInt(firstnum)*parseInt(secondnum);
            break;
        case '/':
            result=parseInt(firstnum)/parseInt(secondnum);
            break;

            
                
    }
    document.getElementById('result').value=result;

}
function clearresult(){
    operator="";
    firstnum="";
    secondnum="";
    document.getElementById('result').value="";
}