const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

let resultArr = [];

const listNode = xmlDOM.querySelector("list");
const studentsNode = listNode.querySelectorAll("student");
for (i = 0; i < studentsNode.length; ++i) {
    const nameNode = studentsNode[i].querySelector("name");
    const firstNameNode = nameNode.querySelector("first");
    const secondNameNode = nameNode.querySelector("second");
    const ageNode = studentsNode[i].querySelector("age");
    const profNode = studentsNode[i].querySelector("prof");
    const langAttr = nameNode.getAttribute('lang');
    resultArr.push({ student: [firstNameNode.textContent, secondNameNode.textContent], lang: langAttr, age: Number(ageNode.textContent), prof: profNode.textContent, },);
}

const result = {
    list: resultArr
}

console.log(result);