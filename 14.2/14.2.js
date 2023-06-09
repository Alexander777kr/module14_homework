const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
}`

const data = JSON.parse(jsonString);
const list = data.list;

const arr = [];

for (const elem of list) {
    arr.push({ name: elem.name, age: Number(elem.age), prof: elem.prof });
}

console.log("result", { list: arr })