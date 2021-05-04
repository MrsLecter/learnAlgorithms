import time

# Вывести n-нное число Фибоначчи, где n >= 0


def fib(n):
    if n <= 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)


start = time.time()


print(fib(25), ' => time: ', round((time.time() - start), 5))
