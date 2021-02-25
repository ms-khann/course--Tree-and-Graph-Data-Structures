class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
        this.length = 0
    }
    insertNode(value) {
        let node = new Node(value);
        if (this.root == null) {
            this.root = node;
            this.length++;
            return
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(current.left == null){
                    current.left = node;
                    this.length++;
                    return;
                }else{
                    current = current.left;
                }
            }else{
                if(current.right ==  null){
                    current.right = node;
                    this.length++;
                    return;
                }else{
                    current = current.right;
                }
            }
        }
    }
    contains(value){
        let current = this.root;
        while(current){
            if( value === current.value){
                return 'found';
            }
            if(value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return 'not found';
    }
    remove(value){
        
    }
}

let myBST = new BST();
myBST.insertNode(10);
myBST.insertNode(9);
myBST.insertNode(20);
myBST.insertNode(12);
console.log(myBST);
console.log(myBST.contains(110));