// const node1 = {
//   data: 100,
// };

// const node2 = {
//   data: 200,
// };

// node1.next = node2;

// console.log(node1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert The first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // Inser the last Node
  insertLast(element) {
    let node = new Node(element);
    let current;
    console.log(node);
    console.log(this.head);

    if (!this.head) {
      this.head = node;
      return;
    }

    current = this.head;
    while (current.next) {}
  }

  // Insert at index

  // get at Index

  // Remove at index

  // clear the list

  // print the list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// const n1 = new Node(100);

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

// ll.printListData();

ll.insertLast(500);

// console.log(ll);
