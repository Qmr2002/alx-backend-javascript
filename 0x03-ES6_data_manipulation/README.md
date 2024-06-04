
// join(), slice(), indexOf(),push(), splice()

// Methods that have special treatment for empty slots include the following: concat(), copyWithin(), every(), filter(), flat(),
// flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice().
// Iteration methods such as
// forEach don't visit empty slots at all. Other methods, such as concat, copyWithin, etc.,
//  preserve empty slots when doing the copying, so in the end the array is still sparse.

//Newer methods (e.g. keys) do not treat empty slots specially and treat them as
// if they contain undefined.Methods that conflate empty slots
// with undefined elements include the following:
//  entries(), fill(), find(), findIndex(), findLast(), findLastIndex(),
// includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(),
// toSpliced(), values(), and with ().

// The following methods create new arrays by accessing this.constructor[Symbol.species] to determine
// the constructor to use:
// concat(), filter(), flat(), flatMap(), map(), slice(),
// and splice()(to construct the array of removed elements that's returned).


// All iterative methods are copying and generic, although they behave differently with empty slots.

// The following methods are iterative:
// every(), filter(), find(), findIndex(), findLast(), findLastIndex(), flatMap(), forEach(), map(), and some().

// In particular, every(), find(), findIndex(), findLast(), findLastIndex(), and some()
// do not always invoke callbackFn on every element — they stop iteration as soon as the return value is determined.

// The reduce() and reduceRight() methods also take a callback function and run it at most once for each element in the array, but they have slightly different signatures 
// from typical iterative methods(for example, they don't accept thisArg).

// The sort() method also takes a callback function, but it is not an iterative method. 
// It mutates the array in -place, doesn't accept thisArg, and may invoke the callback multiple times on an index.
