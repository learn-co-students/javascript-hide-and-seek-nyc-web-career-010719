function getFirstSelector(selectors){
  return document.querySelector(selectors)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankList = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankList.length; i++) {
    let children = rankList[i].children

  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }
  }
}

function deepestChild(){
  let node = document.querySelector('#grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
