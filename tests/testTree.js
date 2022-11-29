const T = require('../Tree/index.js');
const Node = T.Node;
const Tree = T.Tree;

describe('Node', () => {
  test('Constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('Data and Children', () => {
    const n = new Node(1);
    expect(n.data).toEqual(1);
    expect(n.children.length).toEqual(0);
  });

  test('Add children', () => {
    const n = new Node(1);
    n.add(2);
    expect(n.children.length).toEqual(1);
    expect(n.children[0].children.length).toEqual(0);
  });

  test('Remove children', () => {
    const n = new Node(1);
    n.add(2);
    expect(n.children.length).toEqual(1);
    n.remove(2);
    expect(n.children.length).toEqual(0);
  });

  test('Remove children: empty list', () => {
    const n = new Node(1);
    n.remove(2);
    expect(n.children.length).toEqual(0);
  });

  test('Remove children: wrong element', () => {
    const n = new Node(1);
    n.add(2);
    expect(n.children.length).toEqual(1);
    n.remove(3);
    expect(n.children.length).toEqual(1);
  });

});

describe('Tree', () => {
  test('Empty Tree', () => {
    const t = new Tree();
    expect(t.root).toEqual(null);
  });

  test('traverseBF', () => {
    const arr = [];
    const t = new Tree();
    t.root = new Node(1);
    t.root.add(2);
    t.root.add(3);
    t.root.children[0].add(4);
    t.traverseBF(node => arr.push(node.data));
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('traverseDF', () => {
    const arr = [];
    const t = new Tree();
    t.root = new Node(1);
    t.root.add(2);
    t.root.add(4);
    t.root.children[0].add(3);
    t.traverseDF(node => arr.push(node.data));
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});