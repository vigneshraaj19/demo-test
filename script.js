var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var flag=true;
for(var i=0;i<obj1.length;i++)
{
    for(var j=0;j<obj2.length;j++)
    {
        if(obj1[i]==obj2[j])
        {
            continue;
        }
        else{
           flag=false;
            break;
        }
    }
}
console.log("Json objects are equal : " +flag);