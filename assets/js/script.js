let selectedElement = null;
let selectedValue = null;


function selectMark(event) {
    if (selectedElement && event.target.textContent === selectedElement.textContent) {
        return;
    } else if (selectedElement) {
        selectedElement.setAttribute('class', 'circle mark-item');
    }
    selectedElement = event.currentTarget;
    selectedValue = selectedElement.textContent;
    let classAtributes = selectedElement.getAttribute('class');
    selectedElement.setAttribute('class', classAtributes + ' active');
}

function submit() {
    if (selectedValue) {
        document.querySelector('.rating-content').style.display = 'none'; // hide ranking content
        document.querySelector('.appreciated').style.display = 'block'; // show result content
        document.getElementById('result-value').textContent = ' ' + selectedValue + ' '; // set rank value
    } else {
        alert('Please, select a rating from 1 to 5 first!')
    }
}


const element = document.querySelectorAll('.mark-item');

element.forEach(el => {
    el.onclick = selectMark;
})
