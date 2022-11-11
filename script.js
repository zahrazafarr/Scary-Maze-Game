$(() => {

    let circle = document.getElementById('player');
    const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);


})

//make it so the user is safe on black <div path>, <div wall2> is a black wall accidentally so try to let user pass through that too ?
//game ends when user touches turquoise squares