/**

Remove commented code to test on your own IDE or browser console 
Uncommented code is LeetCode interview answer

*/
/*class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}*/

let addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let prevNode = new ListNode();
  let dummy = prevNode;
  while (l1 || l2 || carry) {
    let var1 = 0;
    let var2 = 0;
    if (l1) {
      var1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      var2 = l2.val;
      l2 = l2.next;
    }
    let sum = var1 + var2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    let currentNode = new ListNode(sum);
    prevNode.next = currentNode;
    prevNode = currentNode;
  }
  return dummy.next;
};
/*function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

let l1 = [2, 4, 3];
let l2 = [5, 5, 4];
console.log(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));

l1 = [9, 9, 9];
l2 = [1, 1, 1];
console.log(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
*/