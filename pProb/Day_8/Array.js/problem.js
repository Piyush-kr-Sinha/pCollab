// // // // Implement a array Data structure in javascript with these following features: -

// // - ** insertion **
// // - ** deletion **
// // - ** searching **
// // - ** display **
// // - ** traverse **
// // - ** update **.

// let array = [1, 2, 3, 4, 5];
// let n = array.length;

// // // insertion in  array

// // push method insert element at the end of element
// array.push(6);
// console.log(array);

// // push element at index 0
// array.unshift(1);
// console.log(array);

// // push element at index where you want
// array.splice(2, 0, 2);
// console.log(array);

// // // deletion in  array

// // delete first elemet and return the deleted element
// console.log(array.shift());
// console.log(array);

// // subarray or cut the slice from original array but not change the original array
// console.log(array.slice(0,2));
// console.log(array);

// // delete last elemet and return the deleted  element
// console.log(array.pop());
// console.log(array);

// // delete element from index where you want to delete
// array.splice(1,2);
// console.log(array);

// // // Searching

// // Linear search
// let k = 3;
// for (let i = 0; i < n; i++){
//     if (array[i] == k) {
//         console.log(` ${k} is present at ${i} index`);
//     }
// }

// // Binary search
// let k = 3;
// array.sort();
// li = 0;
// ri = n - 1;
// mid = (li + ri) / 2;
// while (li < ri) {
//     if (array[mid] == k) {
//         console.log(` ${k} is present at ${mid} index`);
//         return;
//     }

//     else if (mid > k) {
//         ri = mid - 1;
//     }

//     else if (mid < k) {
//         li = mid + 1;
//     }
//     mid = (li + ri) / 2;
// }

// // // Display element of array

// // using normal for loop
// for (let i = 0; i < n; i++){
//     console.log(array[i]);
// }
