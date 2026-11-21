const vehicle=['car','bike','truck','Duke','Yamaha','jawa','RE'];
vehicle.push("bus");//add the element at the end
console.log(vehicle);
vehicle.pop(0);// remove the element at the end
console.log(vehicle);
vehicle.shift();//remove the element at the start
console.log(vehicle);
vehicle.unshift("KTM");//add the element at the starting
console.log(vehicle);
console.log(vehicle.indexOf("truck"));
console.log(vehicle.indexOf("train"));
vehicle.splice(1,1);
console.log(vehicle);
vehicle.splice(2);
console.log(vehicle);
