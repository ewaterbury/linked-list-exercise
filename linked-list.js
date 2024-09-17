class LinkedList {
  constructor() {
    this.head = null;
  }

  newNode(value) {
    class Node {
      constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
      }
    }
    return new Node(value);
  }

  append(value) {
    if (this.head === null) this.head = this.newNode(value);
    else {
      let node = this.tail();
      node.next = this.newNode(value);
    }
  }

  prepend(value) {
    const temp = this.head;
    this.head = this.newNode(value);
    this.head.next = temp;
  }

  insertAt(value, index) {
    const insertPoint = this.at(index);
    const temp = insertPoint.next;
    const node = this.newNode(value);
    node.next = temp;
    insertPoint.next = node;
  }

  size(list = this.head, count = 0) {
    count++;
    if (list.next === null) return count;
    return this.size(list.next, count);
  }

  getHead() {
    return this.head;
  }

  tail(list = this.head) {
    if (list === null) return null;
    if (list.next === null) return list;
    return this.tail(list.next);
  }

  at(index, list = this.head, n = 0) {
    if (list.next === null && index !== n)
      return "Error: No item at requested index.";
    if (index === n) return list;
    n++;
    return this.at(index, list.next, n);
  }

  pop() {
    const size = this.size() - 2;
    const node = this.at(size);
    node.next = null;
  }

  removeAt(index) {
    const prequel = this.at(index - 1);
    const temp = this.at(index + 1);
    prequel.next = temp;
  }

  contains(value, list = this.head) {
    if (list.value === value) return true;
    if (list.next === null) return false;
    return this.contains(value, list.next);
  }

  find(value, list = this.head, index = 0) {
    if (list.value === value) return index;
    if (list.next === null) return "Value not found in list.";
    index++;
    return this.find(value, list.next, index);
  }

  toString(list = this.head) {
    if (list.next === null) return `( ${list.value} ) -> null`;
    return `( ${list.value} ) -> ${this.toString(list.next)}`;
  }
}

const list = new LinkedList();

list.append("Three");
list.append("ToBeDeleted");
list.append("Four");
list.prepend("One");
list.prepend("Zero");
list.insertAt("Two", 1);
list.append("ToBeDeletedAgain");
list.pop();
list.removeAt(4);
console.log(list.at(5));
console.log(list.getHead());
console.log(list.size());
console.log(list.toString());
console.log(list.contains("One"));
console.log(list.contains("Six"));
console.log(list.find("One"));
console.log(list.at(list.find("Three")));
console.log(list.find("Six"));
