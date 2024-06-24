class TwoStacks {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size).fill(0);
    // These two indices to denote the top of the 2 Stacks
    this.top1 = -1;
    this.top2 = size;
  }

  push1(value) {
    // Increment top pointer and add element to stack 1 if space is available, else print stack overflow and exit
    if (this.top1 < this.top2 - 1) {
      this.top1 += 1;
      this.arr[this.top1] = value;
    } else {
      throw new Error("Stack overflow");
    }
  }

  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.top2 -= 1;
      this.arr[this.top2] = value;
    } else {
      throw new Error("Stack overflow");
    }
  }

  pop1() {
    // To Check elements are present in the stack
    if (this.top1 >= 0) {
      let value = this.arr[this.top1];
      this.top1 -= 1;
      return value;
    } else {
      throw new Error("Stack Underflow");
    }
  }
  pop2() {
    if (this.top2 < this.size) {
      let value = this.arr[this.top2];
      this.top2 += 1;
      return value;
    } else {
      throw new Error("Stack Underflow");
    }
  }
}

// Driver Code

// Driver code
function main() {
  const calls = [
    ["TwoStacks", "push1", "push2", "pop2"],
    ["TwoStacks", "push1", "pop1", "push2", "pop2"],
    ["TwoStacks", "push1", "push2", "push1", "push2", "pop1", "pop2", "pop1"],
    ["TwoStacks", "push2", "pop2", "push2", "push1"],
    ["TwoStacks", "push1", "push1", "push2", "pop1"],
  ];

  const inputs = [
    [5, 10, 15, null],
    [7, -4, null, -6, null],
    [5, 10, 20, 50, 30, null, null, null],
    [10, 4, null, 8, 10],
    [3, 10, 20, 30, null],
  ];

  for (let i = 0; i < calls.length; i++) {
    console.log(`Testcase ${i + 1}:`);
    const stack_obj = new TwoStacks(inputs[i][0]);

    for (let j = 1; j < calls[i].length; j++) {
      if (calls[i][j] === "push1") {
        stack_obj.push1(inputs[i][j]);
      } else if (calls[i][j] === "push2") {
        stack_obj.push2(inputs[i][j]);
      } else if (calls[i][j] === "pop1") {
        console.log(`\tpop1 returns ${stack_obj.pop1()}`);
      } else if (calls[i][j] === "pop2") {
        console.log(`\tpop2 returns ${stack_obj.pop2()}`);
      }
    }

    console.log("-".repeat(50));
  }
}

main();
