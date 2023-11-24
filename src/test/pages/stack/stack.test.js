/**
 * reference: https://www.youtube.com/watch?v=Jv2uxzhPFl4
 * code: https://github.com/fireship-io/tdd-basics-project/blob/main/test/stack.test.js
 */


class Stack {
    constructor(){
        this.top = -1;
        this.items = {}
    }

    get peek(){
        return this.items[this.top];
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value
    }

    popOff(value){
        this.top -= 1;
        this.items[this.top] = value
    }
}

describe('My stack', () => {

    let stack;

    /**
     * use beforeEach to re-initialize the stack before each new stack
     */
    beforeEach(() => {
        stack = new Stack()
    })

    it('is created empty', () => {
        
        expect(stack.top).toBe(-1); //use toBe for checking the referential equality between 2 objects
        expect(stack.items).toEqual({}); // in this case, both obj were empty,but 2 different obj in memory, so must use toEqual
    })

    it('can push to the top', () => {
        stack.push('🥑');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🥑');
    })

    it('can pop off', () => {
        stack.push('🥑');
        stack.popOff({});
        expect(stack.top).toBe(-1);
        expect(stack.peek).toEqual({});
    })
})