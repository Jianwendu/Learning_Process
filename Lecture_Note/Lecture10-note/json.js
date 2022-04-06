const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uff" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "x" },
    { name: "yadri" },
    { name: "zack" }
  ];

// render names to webpage

let ul = document.querySelector('ul')

let searchbar = document.querySelector('input');

function rendername(people) {
    for (i =0;i < people.length;i++) {
        console.log(people[i])
        let  list_item = document.createElement("li");
        ul.appendChild(list_item);
        list_item.textContent = people[i].name;

    }
}

//rendername(people)

function searchname(event) {
    let searchString = event.target.value; // why add target?
    console.log(searchString);

    const searchedname = people.filter(function(person) {
        if (searchString) {
            return person.name.includes(searchString);
        }
    })
    renderSearchNames(searchedname);
}

function renderSearchNames(seached) {
    console.log("line 64:",seached);
    for (i=0;i<seached.length;i++) {
        let list_item = document.querySelector('li');
        list_item.textContent = seached[i].name;
        ul.appendChild(list_item);
    }
}

searchbar.addEventListener('keyup',searchname)