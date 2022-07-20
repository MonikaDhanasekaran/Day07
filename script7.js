//1.Solving problems using array functions on the rest countries data:

//a.Get all the countries from the Asia continent/region using the filter function:

var request=new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
var res=result.filter((item)=>item.region==='Asia');
console.log(res);
}

//b.Get all the countries with a population of less than 2lakhs using filter function:

var request=new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
var res=result.filter((item)=>item.population<2,00,000).map((item)=>item.name);
console.log(res);
}

//c.Print the following details name,capital flag using forEach function:

var request=new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    result.forEach(element=>console.log(element.name));
    result.forEach(element=>console.log(element.capital));
    result.forEach(element=>console.log(element.flag));
}


//d.Print the country which uses US dollars as currency:

var request=new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
var res=result.filter((item)=>item.currency==='USD');
console.log(res);
}
