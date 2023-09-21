/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
  } 

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
   

  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.isEmpty()) {
      throw new Error("The list is empty. Cannot pop.");
    } else {
    return this.removeAt(this.length -1 );
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.isEmpty()) {
      throw new Error("The list is empty. Cannot shift.");
    }

    let removedVal = this.head.val;
    this.head = this.head.next;

    if(!this.head) {
    // If this is falsy...
    this.tail = null;
    }

    this.length -= 1;
    // Used to decrement the length property of the linked list by 1.
    return removedVal;
    // And then return the removed value.
  }

  isEmpty() {
    return this.length === 0;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index.")
    }

    let current = this.head;
    let currentIdx =0;

    while (currentIdx < idx) {
      current = current.next;
      currentIdx += 1;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index.")
    }

    let current = this.head;
    let currentIdx =0;

    while (currentIdx < idx) {
      current = current.next;
      currentIdx += 1;
    }

    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index.")
    }

    if (idx === 0) {
      // Inserts at the beginning as a new head.
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;

      if(!this.tail) {
        this.tail = newNode;
      } 
    } else if (idx === this.length) {
      // Inserts at end as new tail.
      this.push(val);
    } else {
      // Inserts at middle.
      let current = this.head;
      let currentIdx = 0;

      while (currentIdx < idx -1) {
        current = current.next;
        currentIdx += 1;
      }

      let newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
    }

    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index.")
    }

    let removedVal;

    if (idx === 0){
      removedVal = this.head.val;
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let currentIdx =0;

      while (currentIdx < idx -1) {
        current = current.next;
        currentIdx += 1;
      }

      removedVal = current.next.val;
      current.next = current.next.next;
      
      if (!current.next) {
        // If removed node was the tail node.
        this.tail = current;
      }
    }

    this.length -= 1;
    return removedVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    // If the list is empty.
    if (this.length === 0) return 0;
    // Initialize a variable to keep track of the sum of the numbers
    let total = 0;
    // Initializes a variable to point to the head node.
    let current = this.head;

    while (current) {
      total += current.val;
      // Adds val of the curr node to the total.
      current = current.next;
      // Moves to the next node.
    }

    return total / this.length;
    // Calculates & returns the avg.
     
  }
}

module.exports = LinkedList;
