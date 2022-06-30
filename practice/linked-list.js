
class LinkedList {
  constructor(data) {
    this.head = { data, next: null };
  }

  static convert(head) {
    const linkedList = new this(head.data);
    let node = head.next;

    while(node) {
      linkedList.push(node.data);
      node = node.next;
    }
    return linkedList;
  }

  static fromArray(array) {
    const linkedList = new this(array[0]);
    const partialArray = array.slice(1)


    for (const num of partialArray) {
      linkedList.push(num);
    }

    return linkedList;
  }

  push(data) {
    let node = this.getLast();

    node.next = { data, next: null };
  }

  getFirst() {
    return this.head;
  }

  delete(index) {
    let i = 0
    let node = this.head;
    if (index === 0) {
      this.head = this.head.next;
    }
    
    const stop = index - 1;
    while(i < stop) {
      node = node.next;
      i++;
    }
    node.next = node.next.next;
  }

  insert(index, data) {
    let i = 0
    let node = this.head;
    const stop = index - 1;

    while(i < stop) {
      node = node.next;
      i++;
    }
    node.next = { data, next: node.next };
  }

  size() {
    let size = 1
    let node = this.head;
    while(node.next) {
      node = node.next;
      size++;
    }
    return size;
  }

  getLast() {
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  toArray() {
    const array = [];
    let node = this.head;
    array.push(node.data);
  
    while(node.next) {
      node = node.next;
      array.push(node.data);
    }

    return array;
  }
}

// const linked = new LinkedList(12);
// linked.push(14)
// linked.push(16)
// linked.push(18)

// console.log(linked.size())
// console.log(linked.getFirst())
// console.log(linked.getLast())
// console.log(linked.insert(2, 15))
// // console.log(linked.delete(2))


// console.log(JSON.stringify(linked))

// const list = LinkedList.convert({data: 1, next: {data: 2, next: {data: 3, next: null}}})
const list = LinkedList.fromArray([11, 12, 8, 18, 16, 5, 18])
console.log("before", JSON.stringify(list))
console.log("before", list.toArray())
list.delete(0)
console.log("after", JSON.stringify(list))
console.log("after", list.toArray())