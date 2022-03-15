
let user_name = document.querySelector('.contact__name');
let user_relate = document.querySelector('.contact__relationship');
let user_phone = document.querySelector('.contact__phone');
let add_btn = document.querySelector('.contact__btn');
let friend = document.querySelector('.friend')
let family = document.querySelector('.family')
let relative = document.querySelector('.relative')
let classmate= document.querySelector('.classmate')
let all = document.querySelector('.all')
let contact_list = document.querySelector('.list')
let contacts = []


add_btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (user_name.value != '' && user_relate.value != '' && user_phone.value != '') {
        let user = {
            userName : user_name.value,
            userRelate : user_relate.value,
            userPhone : user_phone.value
        }

        let item = document.createElement("li");
        let header3 = document.createElement("h3");
        let paragraph = document.createElement("p");
        let anchor = document.createElement("a");
        let icons = document.createElement('div')
        
        header3.textContent = user.userName;
        paragraph.textContent = user.userRelate;
        anchor.textContent = user.userPhone;

        header3.classList.add('name');
        paragraph.classList.add('relation');
        anchor.classList.add('phone');
        anchor.setAttribute('href', 'tel:+998909270558')
        item.classList.add('list__item')

        item.appendChild(header3)
        item.appendChild(icons)
        item.appendChild(anchor)
        item.appendChild(paragraph)

        contact_list.appendChild(item)

        contacts.push(user)
        console.log(item)
        console.log(contacts)
    }

    user_name.value = '';
    user_relate.value = '';
    user_phone.value = '';
})

friend.addEventListener('click', (e) => {
    let items = document.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        item.style.display = 'block'
    });
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        item.style.display = 'block'
        if (itemName != 'Friend') {
            item.style.display = 'none'
        }
    });
})

family.addEventListener('click', (e) => {
    let items = document.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        item.style.display = 'block'
    });
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        item.style.display = 'block'
        if (itemName != 'Family') {
            item.style.display = 'none'
        }
    });
})

classmate.addEventListener('click', (e) => {
    let items = document.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        item.style.display = 'block'
    });
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        if (itemName != 'Classmate') {
            item.style.display = 'none'
        }
    });
})

relative.addEventListener('click', (e) => {
    let items = document.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        item.style.display = 'block'
    });
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        if (itemName != 'Najot Talim') {
            item.style.display = 'none'
        }
    });
})

all.addEventListener('click', (e) => {
    let items = document.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {
        let itemName = item.lastElementChild.textContent;
        item.style.display = 'block'
    });
})


// searching elements
let searchInput = document.getElementById('search');
let itemList = document.getElementsByTagName('li');

searchInput.addEventListener('keyup', (e) => {
    let text = e.target.value.toLowerCase()
    Array.from(itemList).forEach(function (item) {
        let listItem = item.firstElementChild.textContent;
        if (listItem.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    })
});
