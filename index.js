
function getFirstSelector(smtn){
  return document.querySelector(smtn)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}



function deepestChild(){
  return document.querySelector('#grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
}
