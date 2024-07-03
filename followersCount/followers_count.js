let count = 0;

const increaseCount = () => {
    count++;
    displayCount()
    checkCountValue();
}

const resetCount = () => {
    if (count > 0) {
        document.getElementById('countDisplay').innerHTML = 0;
        alert('The Followers count has been reset')
    }
}

const displayCount = () => {
    //  Display count in the HTML
    document.getElementById('countDisplay').innerHTML = count;

}

const checkCountValue = () => {
    if (count === 10) {
        alert('Your Instagram post gained 10 followers!')
    } else if (count === 20) {
        alert('Your Instagram post gained 20 followers! Keep it up!!!')
    } 
}