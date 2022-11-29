const Node = require('../BST/index');

describe('Unit test for comb sort', () => {
    test('Node is a constructor', () => {
        let type = typeof Node.prototype.constructor;
        expect(type).toEqual('function');
    });      

    test('Insertion is correct', () => {
        let node = new Node(20);
        node.insert(10);
        node.insert(30);
        node.insert(35);

        expect(node.left.data).toEqual(10);
        expect(node.right.data).toEqual(30);
        expect(node.right.right.data).toEqual(35);
    });

    test('Contains returns node with the same data', () => {
        let node = new Node(20);
        node.insert(10);
        node.insert(30);
        node.insert(40);
        node.insert(0);
        node.insert(-10);
        node.insert(8);

        expect(node.contains(40)).toEqual(node.right.right);
        expect(node.contains(8)).toEqual(node.left.left.right);
        expect(node.contains(-10)).toEqual(node.left.left.left);
    });

    test('Contains returns null if value not found', () => {
        let node = new Node(20);
        node.insert(10);
        node.insert(30);

        expect(node.contains(0)).toEqual(null);
        expect(node.contains(100)).toEqual(null);
    });
})



