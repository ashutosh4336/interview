var NodeClass = (function () {
    function NodeClass(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return NodeClass;
})();
var LinkedList = (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    // insert FirstNode
    LinkedList.prototype.insertFirstNode = function (element) {
        this.head = new NodeClass(element, this.head);
        ++this.size;
    };
    return LinkedList;
})();
var nodeOne = new LinkedList();
nodeOne.insertFirstNode(100);
nodeOne.insertFirstNode(200);
console.log(nodeOne);
