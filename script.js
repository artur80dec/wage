const length = document.querySelector('#length')
const width = document.querySelector('#width')
const height = document.querySelector('#high')
const countButton = document.querySelector('.count')
const result = document.querySelector('.result')
const buttonReset = document.querySelector('.reset')

let proccess
let maxL = 100
let maxW = 67
let maxH = 60

const counting = () =>
{
    if (length.value <= maxL && width.value <= maxW && height.value <= maxH)
    {
        proccess = ((length.value * width.value * height.value) / 5000).toFixed(1);
        result.textContent = `Waga wymiarowa paczki to: ${proccess} kg`;
    }
    else
    {
        result.textContent = `jeden z wymiarów przekracza maksymalny rozmiar`
    }
}

const reset = () =>
{
    length.value = '';
    width.value = '';
    height.value = '';
    result.textContent = '';
}


countButton.addEventListener('click', counting);
buttonReset.addEventListener('click', reset);