  var objectLiteral = {
    name: "Gun Gun Febrianza",
    age: 28,
    city: "Bandung"
  };
  var JSONData = JSON.stringify(objectLiteral);
  console.log(typeof JSONData) // string
  console.log(JSONData)
  // {"name":"Gun Gun Febrianza","age":28,"city":"Bandung"}
