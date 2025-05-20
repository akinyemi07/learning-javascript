age = int(input("Enter age "))

price = 0

if age < 12 :
  price = 5
elif age < 18:
  price = 10
elif age < 60:
  price = 20
else:
  price = 15


print("this is the price this age $",price)
