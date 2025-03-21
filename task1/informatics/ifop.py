#A
n = int(input())
if n % 2 == 0:
    print("EVEN")
else:
    print("ODD")

#B
a = int(input())
b = int(input())
print(max(a, b))

#C
n = int(input())
if n > 0:
    print("1")
elif n < 0:
    print("-1")
else:
    print("0")

#D
x, y = int(input()), int(input())
if (x + y) % 2 == 0:
    print("BLACK")
else:
    print("WHITE")

#E
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

