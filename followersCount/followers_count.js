let count = 0;

const increaseCount = () => {
    count++;
    displayCount()
}

const displayCount = () => {
    //  Display count in the HTML
    document.getElementById('countDisplay').innerHTML = count;
    checkCountValue();

}

const checkCountValue = () => {
    if (count === 10) {
        alert('Your Instagram post gained 10 followers!')
    } else if (count === 20) {
        alert('Your Instagram post gained 20 followers! Keep it up!!!')
    }
}