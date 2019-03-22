/*
 * Submission date: March 22, 2019
 * Runtime: 368ms
 * Faster than: 68.63%
 * Memory Usage: 37.9 MB
 * Less than: 100.00%
 */

// this problem was tricky
// i can't quite think of a faster solution myself

// essentially, i convert the wordList into a graph
// and perform Djikstra's algorithm to find the endWord

// the algorithm begins with the beginWord and on each iteration
// it is checked for a one letter difference with all the other nodes
// as soon as the endWord is found the distance can be returned

// uses a variation of Djikstra's algorithm
const ladderLength = (beginWord, endWord, wordList) => {
  // check if endWord exists
  let endExists = false;
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === endWord) {
      endExists = true;
      break;
    }
  }

  if (!endExists) {
    return 0;
  }

  // find index of beginWord
  let startIdx = -1;
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === beginWord) {
      startIdx = i;
      break;
    }
  }

  // add beginWord to wordList if it doesn't already exist
  if (startIdx === -1) {
    wordList.push(beginWord);
    startIdx = wordList.length - 1;
  }

  // initialize nodes
  let nodes = new Array(wordList.length);
  for (let i = 0; i < nodes.length; i++) {
    nodes[i] = {
      word: wordList[i],
      prev: null,
      dist: Number.MAX_SAFE_INTEGER,
    };
  }

  nodes[startIdx].dist = 0;
  // keeps track of the indexes of nodes that are potentially in the final solution
  let visited = [startIdx];

  while(visited.length !== 0) {
    // find the element with the lowest dist
    let idxLowDist = 0;
    for (let i = 1; i < visited.length; i++) {
      if (nodes[visited[i]].dist < nodes[visited[idxLowDist]].dist) {
        idxLowDist = i;
      }
    }

    let currentNode = nodes[visited[idxLowDist]];
    // remove the current node from the open and visited list
    let removedIdx = visited[idxLowDist];
    nodes.splice(visited[idxLowDist], 1);
    visited.splice(idxLowDist, 1);

    // update the indexes in the visited array
    // this must be done since an item was removed from nodes
    for (let i = 0; i < visited.length; i++) {
      if (visited[i] > removedIdx) {
        visited[i]--;
      }
    }

    // found!
    if (currentNode.word === endWord) {
      return currentNode.dist + 1;
    }

    // the edge weightings will always be 1
    let newDist = currentNode.dist + 1;
    // go through all nodes and find potential children
    for (let i = 0; i < nodes.length; i++) {
      if (newDist < nodes[i].dist && isOneLetterDiff(currentNode.word, nodes[i].word)) {
        visited.push(i);
        nodes[i].dist = newDist;
        nodes[i].prev = currentNode;
      }
    }
  }

  return 0;
};

// checks whether or not there is only a one letter difference between two words
const isOneLetterDiff = (wordA, wordB) => {
  // keep track of whether or not one difference has been found already
  let isOneLetterDiff = false;
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] !== wordB[i]) {
      // if one difference was already found then return false
      if (isOneLetterDiff) {
        return false;
      } else {
        // otherwise keep note that one difference was found
        isOneLetterDiff = true;
      }
    }
  }

  return true;
};
