const me = document.querySelector('.Mercury')
const ve = document.querySelector('.Venus')
const ea = document.querySelector('.Earth')
const ma = document.querySelector('.Mars')
const ju = document.querySelector('.Jupiter')
const sa = document.querySelector('.Saturn')
const ur = document.querySelector('.Uranus')
const ne = document.querySelector('.Neptune')

const botao = document.querySelector('button')

function setInfo(planeta)
{
  planeta.classList.add("info");
}