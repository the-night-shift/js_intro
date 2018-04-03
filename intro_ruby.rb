# times loop
fruits = ["apple", "pear", "blube", "banana"]

length_of_fruits = fruits.length

i = 0
length_of_fruits.times do
  the_fruit = fruits[i]
  p the_fruit
  i += 1
end


# each loop
fruits.each do |the_fruit|
  p the_fruit
end

# the each loop keeps track of the index for you
# the each loop makes 'the_fruit' variable for you and assigns it to the correct element in the array
