function down() {   
    let imgs = document.querySelectorAll('.img'); // array of 3 images     
    let arr = []
    
    for (let i = 0; i < imgs.length; i++){
        arr.push(imgs[i].src) // add images' links to an empty array (array's filling)
    }     

    arr.unshift(arr.pop()); // pop() - deleting last array's element
    // unshift() - inserting deleted element in the beginning of an array 
    

    for(let i = 0; i < imgs.length; i++) {
        imgs[i].src = arr[i]
    } // rewrite new array after changes
}

function up() {   
    let imgs=document.querySelectorAll('.img');        
    let arr = []

    for ( let i = 0; i < imgs.length; i++){
        arr.push(imgs[i].src)
    }     

    arr.push(arr.shift()) // shift() - delete first array's element
    // push() - add deleted element to the end of array

    for(let i = 0; i < imgs.length; i++) {
        imgs[i].src = arr[i]
    }          
}

function changeWidth() {
    let widthEl1 = document.querySelector('.img1') // 1 element with class .img1
    let widthEl2 = document.querySelector('.img2')
    let widthEl3 = document.querySelector('.img3')
    
    let x = prompt('Введите ширину', 0) // result of user's input
    
    widthEl1.style.width = x + 'px'
    widthEl2.style.width = x + 'px'
    widthEl3.style.width = x + 'px'  
}

function changeHeight() {
    let heightEl1 = document.querySelector('.img1')
    let heightEl2 = document.querySelector('.img2')
    let heightEl3 = document.querySelector('.img3')
    
    let x = prompt('Введите высоту', 0)
    
    heightEl1.style.height = x + 'px'
    heightEl2.style.height = x + 'px'
    heightEl3.style.height = x + 'px'  
}

function changeBorderWidth() {
    let borderEl1 = document.querySelector('.img1')
    let borderEl2 = document.querySelector('.img2')
    let borderEl3 = document.querySelector('.img3')
    
    let x = prompt('Введите ширину рамки', 0)
    
    borderEl1.style.border = x + 'px solid red'
    borderEl2.style.border = x + 'px solid red'
    borderEl3.style.border = x + 'px solid red'  
}

function changeAlt() {
    let borderEl1 = document.querySelector('.img1')
    let borderEl2 = document.querySelector('.img2')
    let borderEl3 = document.querySelector('.img3')
    
    let x = prompt('Введите альтернативный текст', 0)
    
    borderEl1.alt = x 
    borderEl2.alt = x 
    borderEl3.alt = x 
}