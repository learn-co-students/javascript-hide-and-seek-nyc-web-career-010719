
function getFirstSelector(selector){
  // console.log(document.querySelector(selector));
  return document.querySelector(selector);
}

// getFirstSelector("#nested")

function nestedTarget(){
  // console.log(document.querySelector(`#nested .target`))
  return document.querySelector(`#nested .target`)
}
//
//
// function increaseRankBy(n){
//   return (for (.ranked-list)+ n).parseInt
//
// }

function increaseRankBy(n){
  const rankList = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li')
    // console.log(rankList)
    for (let i = 0; i < rankList.length; ++i) {
      rankList[i].innerText = (parseInt(rankList[i].innerText) + n)
    }
}
increaseRankBy(3)
//
function deepestChild(){
    // return document.querySelector('#grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
    return document.querySelector('#grand-node div div div div')

}
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
//
// let el = rankList[i].innerHTML = (i + n).toString()
// }
