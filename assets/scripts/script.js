const toBalance = document.getElementById('tobalance')
const useToBalance = document.querySelector('.usetobalance')
const display = document.querySelector('.display')
const balances = document.getElementById('balance')
const balances2 = document.getElementById('balance2')
const balances3 = document.getElementById('balance3')
let arrscale1 = []
let var1, var2, w, t, found, y, l
let arrscale2 = []

balances.onclick = function addElements () {
  var1 = toBalance.value
  arrscale1 = var1.split(',')
  if (arrscale1.length <= 2) {
    toBalance.disabled = true
    balances.disabled = true
  }
}

balances2.onclick = function add () {
  var2 = useToBalance.value
  arrscale2 = var2.split(',')
  if (arrscale2.length <= 4) {
    useToBalance.disabled = true
    balances2.disabled = true
  }
}

balances3.onclick = function add1 () {
  for (let i = 0; i < arrscale2.length; i++) {
    for (let j = arrscale2.length; j >= 0; j--) {
      w = parseInt(arrscale1[0]) + parseInt(arrscale2[i])
      t = parseInt(arrscale1[1]) + parseInt(arrscale2[j])

      if (w === t) {
        found = true
        y = parseInt(arrscale2[j])
        l = parseInt(arrscale2[i])
      }
    }
    if (found) {
      break
    }
  }
  if (found) {
    display.innerHTML = `Balance numbers of ${arrscale1} are: ${y}, ${l}`
  } else {
    display.innerHTML = 'Scale Imbalanced'
  }
}
