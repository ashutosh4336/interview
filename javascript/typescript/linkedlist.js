var NodeClass = /** @class */ (function () {
    function NodeClass(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return NodeClass;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    // insert FirstNode
    LinkedList.prototype.insertFirstNode = function (element) {
        this.head = new NodeClass(element, this.head);
        ++this.size;
    };
    // insert lastNode
    LinkedList.prototype.insertLastNode = function (element) {
        var node = new NodeClass(element);
        var current;
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
    };
    // insert at index
    LinkedList.prototype.insertAt = function (element, index) {
        if (index > 0 && index > this.size) {
            this.insertLastNode(element);
            return;
        }
        else if (index === 0) {
            this.insertFirstNode(element);
            return;
        }
        var node = new NodeClass(element);
        var current, previous;
        current = this.head;
        var count = 0;
        while (count < index) {
            previous = current;
            ++count;
            current = current.next; //Node After Index
        }
        node.next = current;
        previous.next = node;
        ++this.size;
    };
    // get at index
    LinkedList.prototype.getAt = function (index) {
        var current = this.head;
        var count = 0;
        if (index < 0) {
            current = this.head;
            console.log('Line 80 : ', JSON.stringify(current, null, 4));
            return;
        }
        else if (index >= this.size) {
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
    };
    // remove at index
    LinkedList.prototype.removeAt = function (index) {
        if (index >= 0 && index > this.size)
            return;
        var current = this.head;
        var previous;
        var count = 0;
        if (index === 0) {
            this.head = current.next;
        }
        else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        --this.size;
    };
    // clear the List
    LinkedList.prototype.clearList = function () {
        this.head = null;
        this.size = 0;
    };
    // print the list data
    LinkedList.prototype.printListData = function () {
        console.log('Size of LinkedList : ', this.size);
        var current = this.head;
        while (current) {
            console.log(current);
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
var nodeOne = new LinkedList();
nodeOne.insertFirstNode(10);
// nodeOne.insertFirstNode(20);
nodeOne.insertLastNode(30);
// nodeOne.insertAt(40, 1);
// nodeOne.removeAt(2);
// nodeOne.clearList();
nodeOne.printListData();
// nodeOne.getAt(-10);
// console.log(JSON.stringify(nodeOne, null, 2));
