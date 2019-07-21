// all the varibles and query selctor to grab the ids
const heads = document.querySelector('#heads')
const tails = document.querySelector('#tails')
const coin = document.querySelector('#coin')
const result = document.querySelector('#result')
heads.addEventListener('click', function(e) {
  flipCoin(heads.value)
  // to get the value of heads
})
tails.addEventListener('click', function(e) {
  flipCoin(tails.value)
  // get the value for tails
})

function flipCoin(n) {
  let headtailsArr = ['heads', 'tails']
  let i = Math.floor(Math.random() * 2)
  coin.textContent = n
  // textContent property of of node interface
  // represents the text content of a node + descendants. (MDN.com)
  if (n == headtailsArr[i]) {
    result.textContent = 'you got it!'
  } else {
    result.textContent = 'aw, try again'
  }
}
