class NodeClass {
  data: any;
  next: any;

  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: any;
  size: any;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert FirstNode
  insertFirstNode(element) {
    this.head = new NodeClass(element, this.head);
    ++this.size;
  }

  // insert lastNode
  insertLastNode(element) {
    let node = new NodeClass(element);
    let current;

    // check if empty
    if (!this.head) {
      this.head = node;
      return;
    }

    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    ++this.size;
  }

  // insert at index
  insertAt(element, index) {
    if (index > 0 && index > this.size) {
      this.insertLastNode(element);
      return;
    } else if (index === 0) {
      this.insertFirstNode(element);
      return;
    }

    const node = new NodeClass(element);
    let current, previous;

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      ++count;
      current = current.next; //Node After Index
    }

    node.next = current;
    previous.next = node;

    ++this.size;
  }

  // get at index

  getAt(index) {
    let current = this.head;
    let count = 0;

    if (index < 0) {
      current = this.head;
      console.log('Line 80 : ', JSON.stringify(current, null, 4));
      return;
    } else if (index >= this.size) {
      while (current.next) {
        current = current.next;
      }
      console.log('Line 86 : ', JSON.stringify(current, null, 4));
      return;
    }

    while (current) {
      if (count === index) {
        console.log('Inside GETAT', JSON.stringify(current, null, 4));
      }
      ++count;
      current = current.next;
    }
  }

  // remove at index
  removeAt(index) {
    if (index >= 0 && index > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    --this.size;
  }

  removeDuplicate() {
    let current, previous;
    current = this.head;

    while (current.next) {
      previous = current.next;

      if (current.data === previous.data) {
        previous = current;
        current = current.next;
      }
      console.log('136', current.data);
      current = current.next;
    }
  }

  // clear the List
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print the list data
  printListData() {
    console.log('Size of LinkedList : ', this.size);

    let current = this.head;
    while (current) {
      // console.log(current);
      console.log(current.data);
      current = current.next;
    }
  }
}

const nodeOne = new LinkedList();

nodeOne.insertFirstNode(70);
nodeOne.insertFirstNode(60);
nodeOne.insertFirstNode(50);
nodeOne.insertFirstNode(40);
nodeOne.insertFirstNode(30);
nodeOne.insertFirstNode(30);
nodeOne.insertFirstNode(20);
nodeOne.insertFirstNode(10);
// nodeOne.insertLastNode(40);

// nodeOne.insertAt(50, 1);
nodeOne.removeDuplicate();
// nodeOne.removeAt(2);

// nodeOne.clearList();

nodeOne.printListData();

// nodeOne.getAt(-10);
// console.log(JSON.stringify(nodeOne, null, 2));
