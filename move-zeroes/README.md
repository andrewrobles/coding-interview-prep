### Solution

[solution.js](solution.js)

### Pseudocode
Set A and B to 0. Increment B until nums[B] is a nonzero number. Increment A until we have found nums[A] equal to a zero number. Swap the numbers. Repeat until nums[B] has reached the last element and is zero.

### Example 1
> Input: nums = [0,1,0,3,9]
Output: [1,3,9,0,0]

Set A and B to 0. A is already at 0. We will increment B until we find a nonzero number.
```
0 1 0 3 9
A
B
```

We have found a nonzero number so we will swap the characters.
```
0 1 0 3 9
A
  B
```

We will increment A until we find a 0. We have found one so now we will increment B until we have found a nonzero character.
```
1 0 0 3 9
A
  B
```

We have found a nonzero character so we swap.
```
1 0 0 3 9
  A
      B
```

We must increment A until we find a zero.
```
1 3 0 0 9
  A
      B
```

We have found a zero so now we must increment B until we find a nonzero.
```
1 3 0 0 9
    A
      B
```

Swap.
```
1 3 0 0 9
    A
        B
```

We have reached the end of the array so we terminate.
```
1 3 9 0 0
    A
        B
```