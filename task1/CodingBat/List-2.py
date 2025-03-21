#count_evens
def count_evens(nums):
    return sum(1 for num in nums if num % 2 == 0)

#sum13
def sum13(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 13:
            skip = True
            continue
        if skip:
            skip = False
            continue
        total += num
    return total