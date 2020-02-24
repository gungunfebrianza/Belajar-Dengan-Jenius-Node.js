  var data = '{"name":"Gun", "born":"1992-12-14", "city":"Bandung"}';
  var obj = JSON.parse(data);
  obj.born = new Date(obj.born);
  console.log(obj.born.getFullYear()) //1992