let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) { // Left arrow key
        // Trigger previous slide action
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]); 
    } else if (event.keyCode === 39) { // Right arrow key
        // Trigger next slide action
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    }
});






