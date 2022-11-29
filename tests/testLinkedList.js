const { Node, LinkedList } = require('../LinkedList/index.js');

describe('Insert Node', () => {
  test('insertFirst: Beginning of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    expect(l.head.data).toEqual(1);
    l.insertFirst(2);
    expect(l.head.data).toEqual(2);
  });
  test('insertLast: End of empty linked list', () => {
    const l = new LinkedList();
    l.insertLast(1);
    expect(l.getLast().data).toEqual(1);
    l.insertLast(2);
    expect(l.getLast().data).toEqual(2);
  });
  test('insertLast: End of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertFirst(3);
    l.insertLast(4);
    expect(l.getLast().data).toEqual(4);
  });
  test('insertAt: Beginning of empty linked list', () => {
    const l = new LinkedList();
    l.insertAt(1,0);
    expect(l.head.data).toEqual(1);
  });
  test('insertAt: Beginning of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertAt(2,0);
    expect(l.head.data).toEqual(2);
  });
  test('insertAt: End of linked list', () => {
    const l = new LinkedList();
    l.insertLast(1);
    l.insertLast(2);
    l.insertAt(3, 2);
    expect(l.getAt(0).data).toEqual(1);
    expect(l.getAt(1).data).toEqual(2);
    expect(l.getLast().data).toEqual(3);
  });
  test('insertAt: Middle of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertFirst(3);
    l.insertLast(4);
    l.insertAt(5, 2);
    expect(l.getAt(2).data).toEqual(5);
  });
  test('insertAt: Out of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertFirst(3);
    l.insertLast(4);
    l.insertAt(5, 10);
    expect(l.getAt(4).data).toEqual(5);
  });
});

describe('Size of Linked List', () => {
  test('size: empty linked list', () => {
    const l = new LinkedList();
    expect(l.size()).toEqual(0);
  });
  test('size: linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertAt(3,1);
    l.insertLast(4);
    expect(l.size()).toEqual(4);
  });
});

describe('Get Node', () => {
  test('getFirst: Head of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    expect(l.getFirst().data).toEqual(1);
    l.insertFirst(2);
    expect(l.getFirst().data).toEqual(2);
  });
  test('getLast: End of linked list', () => {
    const l = new LinkedList();
    l.insertLast(1);
    expect(l.getLast().data).toEqual(1);
    l.insertLast(2);
    expect(l.getLast().data).toEqual(2);
  });

  test('getAt: Beginning of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    expect(l.getAt(0).data).toEqual(1);
  });
  test('getAt: End of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    expect(l.getAt(1).data).toEqual(2);
  });
  test('getAt: Middle of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertFirst(3);
    l.insertLast(4);
    l.insertAt(5, 2);
    expect(l.getAt(2).data).toEqual(5);
  });
  test('getAt: Out of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertFirst(3);
    l.insertLast(4);
    expect(l.getAt(5)).toEqual(null);
  });
});


describe('Clear', () => {
  test('Makes the head null', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    expect(l.size()).toEqual(2);
    l.clear();
    expect(l.size()).toEqual(0);
  });
});

describe('RemoveNode', () => {
  test('removeFirst : empty list', () => {
    const l = new LinkedList();
    expect(() => l.removeFirst()).not.toThrow();
  });

  test('removeFirst: single element list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.removeFirst();
    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });

  test('removeFirst: multiple element list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(3);
    l.insertAt(2,1);
    expect(l.size()).toEqual(3);
    l.removeFirst();
    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual(2);
    l.removeFirst();
    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual(3);
  });

  test('removeLast : empty list', () => {
    const l = new LinkedList();
    expect(() => l.removeLast()).not.toThrow();
  });

  test('removeLast: single element list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.removeLast();
    expect(l.size()).toEqual(0);
    expect(l.getLast()).toEqual(null);
  });

  test('removeLast: multiple element list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(3);
    l.insertAt(2,1);
    expect(l.size()).toEqual(3);
    l.removeLast();
    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual(2);
    l.removeLast();
    expect(l.size()).toEqual(1);
    expect(l.getLast().data).toEqual(1);
  });

  test('removeAt: empty list', () => {
    const l = new LinkedList();
    expect(() => l.removeAt(0)).not.toThrow();
  });

  test('removeAt: Beginning of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    l.removeAt(0);
    expect(l.size()).toEqual(2);
    expect(l.getAt(0).data).toEqual(2);
  });

  test('removeAt: End of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    l.removeAt(2);
    expect(l.size()).toEqual(2);
    expect(l.getAt(1).data).toEqual(2);
  });

  test('removeAt: Middle of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    l.removeAt(2);
    expect(l.size()).toEqual(3);
    expect(l.getAt(2).data).toEqual(4);
  });

  test('removeAt: Out of linked list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    expect(() => l.removeAt(5)).not.toThrow();
  });

});

describe('ForEach', () => {
  test('executes given function on each node', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    
    l.forEach(node => node.data += 1);
    
    expect(l.getAt(0).data).toEqual(2);
    expect(l.getAt(1).data).toEqual(3);
    expect(l.getAt(2).data).toEqual(4);
    expect(l.getAt(3).data).toEqual(5);
  });
});

describe('Default Iterator loops', () => {

  test('for of: empty list', () => {
    const l = new LinkedList();
    expect(() => {for (let node of l) {node.data += 1}}).not.toThrow();
  });

  test('for of: multiple element list', () => {
    const l = new LinkedList();
    l.insertFirst(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    for (let node of l) {node.data += 1}
    
    expect(l.getAt(0).data).toEqual(2);
    expect(l.getAt(1).data).toEqual(3);
    expect(l.getAt(2).data).toEqual(4);
    expect(l.getAt(3).data).toEqual(5);
  });


});