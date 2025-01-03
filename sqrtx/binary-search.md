### Binary Search
```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```
Using brute force, we check every number 1, 2 then see that 2 works perfectly so we return 2.

Using binary search, we start by setting left = 0 and right = 5 and we calculate the mid = left + (right - left) / 2 = 0 + (5) / 2 = 2. We check 2 * 2 and see that it is equal to 4 so we return the number 2.

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```
Using brute force, we check 1, 2, 3 and see that 2 is too low and 3 is too high so in this case we round down to the nearest integer so we return 2.

We set left = 0 and right = 8 and mid = 4 and check 4 * 4 which is equal to 16 which is too high so we need to adjust our right pointer to be mid - 1 which is 3. Now our mid is equal to 1. We check this mid by doing 1 * 1 and get 1 which is too low so we need to update our left pointer to be 2. We calculate mid = low + (high - low) // 2 = 2 + (3 - 2) / 2 = 2 + 1 // 2 = 2 + 0 = 2 and we check 2 * 2 and see that it is too low. We have reached a point in which left < right and left + 1 == right so we found the square root to be in between both of these numbers so we return left which is 2.

```
Input: x = 1
Output: 1
```
We set left = 0 and right = 1 and mid = 0 which is too small so we update left = 1 and calculate a new mid = 1 which we check to be the square so we return 1.

```
Input: x = 2
Output: 1
```

First, left = 0, right = 1, and mid = 0. Next, left = 1, right = 1, and mid = 1.

### Pseudocode
This is a typical binary search algorithm except that we know that we have found the solution when `mid ** 2 === x` in which we return the mid or if we ever get the condition `left < right && left + 1 == right && left ** 2 < x && right ** 2 > x` in which we return left. If we ever reach the end of the loop, then we return right because of the case when the square is between x - 1 and x.

### Complexity
This solution uses logarithmic time and constant space.

### Solution
```js
const mySqrt = x => {
    let left = 0, right = x
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (mid ** 2 === x) {
            return mid
        }
        if (left < right && left + 1 === right && left ** 2 < x && right ** 2 > x) {
            return left
        }
        if (mid ** 2 < x) {
            left = mid + 1
        }
        if (mid ** 2 > x) {
            right = mid - 1
        }
    }
    return right
}
```