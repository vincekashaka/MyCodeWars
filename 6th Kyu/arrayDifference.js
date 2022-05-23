
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

P R E P
Parameter === a, b
Return === the values that are not in both arrays

*/

const arrayDiff = (arrayA, arrayB) => {
    if (arrayA===[]||arrayB===[]){return arrayA}
    else{
    let A = [...arrayA]
    for (let i = 0; i < arrayB.length ; i++) {
    A = A.filter(x => x!==arrayB[i])
    }
    return A
    }
 }
 console.log(arrayDiff([1,2,2,2,3],[2]));

 //another solution
 function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }