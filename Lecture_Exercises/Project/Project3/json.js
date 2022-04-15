// get data
const gallery = document.querySelector(".container").querySelectorAll('a')


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





// searching