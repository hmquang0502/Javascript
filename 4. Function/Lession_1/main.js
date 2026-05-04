function showDialog(){
    alert('Hi xin chao cac ban!')
};
showDialog();


// function writeLog(message, message2){
//     console.log(message);
//     console.log(message2);
// };



function writeLog(){
    for(var param of arguments){
        console.log(param);
    }
};
writeLog('Test message','HMQ');
