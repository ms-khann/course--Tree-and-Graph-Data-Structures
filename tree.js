class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    insertChild(value) {
        let newTree = new Tree(value);
        this.children.push(newTree);
        return newTree;
    }
}

class ChatBot {
    constructor(question) {
        this.question = question;
        this.yes = null;
        this.no = null;
    }
    insertChild(question, side) {
        const newQuestion = new ChatBot(question);
        this[side] = newQuestion;
        return newQuestion;
    }
}

const chat_bot = new ChatBot(1);
const chat_bot1 = chat_bot.insertChild(2,1);