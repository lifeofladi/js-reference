const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }
  get count() {
    return _stack.get(this).length;
  }
  //peek ==> return object at the top stack
  peek() {
    return _stack.get(this)[_stack.get(this).length - 1];
  }
  //pop ==> removes object at the top of stack
  pop() {
    return _stack.get(this).pop();
  }
  //push ==> adds an object to stack
  push(item) {
    _stack.get(this).push(item);
  }
}

const container = new Stack();
