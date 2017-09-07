<script>
/* 第一题 start */
console.log('********** 第一题 ***********')

function A(){}
function B(){}
A.prototype = {
    fun:function(){}
}

var a = new A();
console.log(a.constructor === A);
console.log(A.prototype.constructor === A);
console.log(a.hasOwnProperty('constructor'))
console.log(a instanceof A);

A.prototype = new B();
var b = new A();
console.log(b.constructor === A);
console.log(B.prototype.constructor === A);
console.log(b.constructor.prototype.constructor === A);
console.log(b.hasOwnProperty('constructor'));
console.log(a instanceof A);//做错了 我的是->true  答案->false
console.log(a instanceof B);
/* 第一题 end */


/* 第二题 start */
console.log('********** 第二题(1) ***********')

var b = {x:4}
function fn2(o){
    this.x = o.x;
}
fn2.prototype={
    init:function(){
        return this.x;
    }
}
var fn3 = new fn2({x:5});
console.log(fn3.init());
console.log(fn3.init === fn2.init);
console.log(fn3.init.call(b));
var c = fn3.init;
console.log(c());

console.log('********** 第二题(2) ***********')

setTimeout(function(){
    console.log(1)
},0)
new Promise(function(resolve){
    console.log(2);
    for(var i=0;i<10;i++){
        i == 9 && resolve();
    }
}).then(function(){
    console.log(4)
});
console.log(5)
// 做错了 我的是2,4,5,1 正确->2,5,4,1
/* 第二题 end */


/* 第三题 start */
/*getNum(count); 输入3 输出13; 参考数列[1,3,7,13,21,31,43....]*/
console.log('********** 第三题 ***********')
function getNum(count){
    var result = 0;
    if(count == 0){
        result=0;
    }else if(count == 1){
        result = 1+2*1;
    }else if(count >1){
        result += getNum(count-1)+2*count;
    }
    return result;
}
console.log(getNum(3));
/* 第三题 end */   

/* 第四题 start */
console.log('********** 第四题 ***********')
var str1 = 'aabaddffttdeeeee';
var str2 = 'acdcddeettdfffff';

var str3 = 'aba';
var str4 = 'cdc';

var str5 = 'aabbcc';
var str6 = 'aaccbb'

var findLUSLength=function(a,b){
    var result = [];
    var spliceIndex=[];
    var resultArr = [];
    var arr1=a.split('');
    var arr2=b.split('');
    if(arr1.length-arr2.length>=0){
        for(var i=0;i<arr2.length;i++){
            if(arr2[i]!=arr1[i]){
                result.push(i)
            }
        }
    }else{
        for(var i=0;i<arr1.length;i++){
            if(arr1[i]!=arr2[i]){
                result.push(i)
            }
        }
    }
    for(var i=0;i<result.length;i++){
        if(result[i+1]-result[i]>1){
            spliceIndex.push(i);
        }else if(result[i]-result[i-1]==1 && i==result.length-1){
            spliceIndex.push(result.length-1);
        }
    }
    for(var i=0;i<spliceIndex.length;i++){
        if(resultArr.length==0){
            resultArr.push(result.slice(0,spliceIndex[i]+1));
        }else if(i != spliceIndex.length-1){
            resultArr.push(result.slice(spliceIndex[i-1]+1,spliceIndex[i]+1));
        }else{
            resultArr.push(result.slice(spliceIndex[i-1]+1));
        }
    }

    resultArr.sort(function(a,b){
        return b.length-a.length;
    })

    console.log(resultArr[0]);

    return resultArr[0].length;
}

var num = findLUSLength(str1,str2);
console.log(num);

var num2 = findLUSLength(str3,str4);
console.log(num2);

var num3 = findLUSLength(str5,str6);
console.log(num3);
</script>   
