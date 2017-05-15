這是一個比較兩組手牌大小的 function
輸入兩組 deck of cards 比較他們的大小

# Input

```
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
```

# 呼叫 function

```
console.log(compareDeckofCards(fourCards, sfcards));
```