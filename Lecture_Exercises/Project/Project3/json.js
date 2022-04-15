// get data
const gallery = document.querySelector(".container").querySelectorAll('a');
const galleryarray = Array.from(gallery);
const container = document.querySelector(".container");

// filter
const filterbn = document.querySelector(".category");

function filterfn(event) {
    const category = event.target.getAttribute('data-filter');
    for (i=0;i<gallery.length;i++) {
        if (gallery[i].querySelector('div').classList.contains(category) || category === "home" ) {
            gallery[i].classList.remove('hide');
            gallery[i].classList.add('show');
        }
        else {
            gallery[i].classList.remove('show');
            gallery[i].classList.add('hide');
        }
    }
}

filterbn.addEventListener('click',filterfn);


// sorting
const sortbn = document.querySelector(".sortbox")

function render(event) {
    for (i=0;i<gallery.length;i++) {
        container.appendChild(event[i]);
    }
}

function sortfn(event) {
    const sortcategory = event.target.getAttribute('data-sort');
    if (sortcategory === 'up') {
        // clean & render
        container.innerHTML = "";
        render(gallery);
    }
    else if (sortcategory === 'down') {
        // clean & reverse
        container.innerHTML = "";
        render(galleryarray.reverse())
    }
}

sortbn.addEventListener('click',sortfn);

// searching
const searchbar = document.querySelector("input");

function search(event) {
    const searchcontent = event.target.value;
    console.log(searchcontent);
    const name = document.querySelector(".container").getElementsByTagName('p');
    for (i=0;i<gallery.length;i++) {
        if (name[i].textContent.includes(searchcontent)) {
            gallery[i].classList.remove('none');
        }
        else {
            gallery[i].classList.add("none");
        }
    }
}

searchbar.addEventListener("keyup", search);

