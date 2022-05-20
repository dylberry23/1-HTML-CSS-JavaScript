function showPattern() {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    let topPosition = 1;
    let leftPosition = 500;
    let width = 1000;
    let height = 1000;

    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];

        document.body.appendChild(newDiv);
        topPosition +=10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}