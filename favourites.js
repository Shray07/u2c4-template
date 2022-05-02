// write js code here corresponding to favourites.html

var favourite=JSON.parse(localStorage.getItem("favourite"));

displayData(favourite);

function displayData(data){
    data.forEach(function(elem,index){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchnumber;

        var td2=document.createElement("td");
        td2.innerText=elem.teamname;

        var td3=document.createElement("td");
        td3.innerText=elem.date;

        var td4=document.createElement("td");
        td4.innerText=elem.venue;

        var td5=document.createElement("td");
        td5.innerText="Delete";
        td5.setAttribute("class","deleteText");
        td5.addEventListener("click",function(){
            deleteItem(elem,index);
        });

        tr.append(td1,td2,td3,td4,td5);

        document.querySelector("tbody").append(tr);
    
    });
}

function deleteItem(_elem,index){
    favourite.splice(index, 1);
    localStorage.setItem("favourites",JSON.stringify(favourite));
    window.location.reload();
    var deletedata=json.parse(localStorage.getItem("favourite"));;
    displayData(deletedata);
}

var arr=[1,2,3,4,5];

localStorage.setItem("sampleArr",json.stringify(arr));

splice()

splice(startIndex,deleteCount)
arr.splice(1,1);
localStorage.setItem("samppleArr",JSON.stringify(arr));
