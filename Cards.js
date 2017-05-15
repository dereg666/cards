let ncards = [{suits: 'Spade', rank: '2'}, 
        {suits: 'Heart', rank: '3'},
        {suits: 'Diamond', rank: '5'},
        {suits: 'Club', rank: '2'},
        {suits: 'Spade', rank: 'Q'}];

let sfcards = [{suits: 'Spade', rank: '2'}, 
        {suits: 'Spade', rank: '3'},
        {suits: 'Spade', rank: '4'},
        {suits: 'Spade', rank: '5'},
        {suits: 'Spade', rank: '6'}];

let fourCards = [{suits: 'Spade', rank: '2'}, 
        {suits: 'Diamond', rank: '2'},
        {suits: 'Heart', rank: '2'},
        {suits: 'Club', rank: '2'},
        {suits: 'Spade', rank: '6'}];


function toValue( str ) {
  if (str === 'A') {
    return 14;
  } else if (str === 'K') {
    return 13;
  } else if (str === 'Q') {
    return 12;
  } else if (str === 'J') {
    return 11;
  } else {
    return Number(str);
  }
}

function stoValue( str ) {
  if (str === 'Spade') {
    return 4;
  } else if (str === 'Heart') {
    return 3;
  } else if (str === 'Diamond') {
    return 2;
  } else if (str === 'Club') {
    return 1;
  } else {
    console.err('err', str);
  }
}

function compareMethod(card1, card2) {
  if (toValue(card1.rank) > toValue(card2.rank)) {
    return 1;
  } else if (toValue(card1.rank) < toValue(card2.rank)) {
    return 0
  } else {
    return (stoValue(card1.suits) > stoValue(card2.suits));
  }
}

function determine(deckofCards) {
  deckofCards.sort(compareMethod);
  console.log(deckofCards);
  let straight = true;
  let flush = 0;
  let count = undefined;
  let max = 0, max2 = 0;
  const mapp = new Array(13).fill(0);
  for (let i = 0; i < 5; i += 1) {
    mapp[toValue(deckofCards[i].rank) - 2] += 1;
    if (straight) {
      const now = toValue(deckofCards[i].rank);
      // console.log('now: ', now);
      if (count === undefined) {
        count = now;
      } else if (i === 4 && (now === 14 && count == 5)) {
        straight = true;
      } else { 
        straight = (count + 1 === now ? true : false);
        count += 1;
      }
    }
    if (flush === 0) {
      flush = stoValue(deckofCards[i].suits)
    } else if (flush !== stoValue(deckofCards[i].suits)) {
      flush = -1;
    }
  }
  // console.log('straing: ', straight);
  // console.log('count: ', count);
  // console.log(mapp);
  for (let i = 0; i < 13; i+= 1) {
    if (mapp[i] > max) {
      max2 = max;
      max = mapp[i];
    } else if (mapp[i] > max2 && mapp[i] < max) {
      max2 = mapp[i];
    }
  }
  // console.log('max: ', max);
  // console.log('max2: ', max2);
  // console.log('flush :', flush)
  if (straight && flush > 0) {
    return 5000 + toValue(deckofCards[4].rank)*10 + stoValue(deckofCards[4].suits);
  } else if (straight) {
    return 1000 + toValue(deckofCards[4].rank)*10 + stoValue(deckofCards[4].suits);
  } else if (flush > 0) {
    return 2000 + toValue(deckofCards[4].rank)*10 + stoValue(deckofCards[4].suits);
  } else if (max === 4) {
    return 4000 + toValue(deckofCards[3].rank)*10;
  } else if (max === 3 && max2 === 2) {
    return 3000 + toValue(deckofCards[3].rank)*10;
  } else {
    return 0;
  }
  
}

function compareDeckofCards(cards1, cards2) {
  if (determine(cards1) > determine(cards2)) {
    return 'first deck of cards has the better hand of the two';
  } else  {
    return 'second deck of cards has the better hand of the two';
  }
}

console.log(compareDeckofCards(fourCards, sfcards));