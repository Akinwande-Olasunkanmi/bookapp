const form = document.querySelector('form');
const msg = document.querySelector('.msg');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const price = document.querySelector('#price');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', bookApp);

function bookApp(e){
    if (title.value === '' || author.value === '' || isbn.value === '' || price.value === '') {

        // display message if empty
        msg.innerHTML = 'Please Fill In The Fields';
        msg.classList.add('error');

        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('error');
        },2000);
        
    } else {

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${title.value}</td>
            <td>${author.value}</td>
            <td>BA-${isbn.value}</td>
            <td>&#8358; ${price.value}</td>
            <td><a href='#' class='delete'><i class='bi bi-x-circle'></i></a></td>
        `
        // append child
        tbody.appendChild(tr);

        // display message if added
        msg.innerHTML = 'Please Fill In The Missing Fields';
        msg.classList.add('success');
        
        
        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('success');
        },2000);

        // clear the inputs
        title.value = ''
        author.value = ''
        isbn.value = ''
        price.value = ''
    }

    e.preventDefault()
}

tbody.addEventListener('click',deleteApp)

function deleteApp(e){
    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.parentElement.remove()
    }
}