# Assignment Overview: Lab for Class 5

There are two parts to your lab assignment:

### First Part: Over the weekend

One of them is a weekend project and is simple to describe: Use your new knowledge and skills in CSS to style your About Me page with color, fonts, and images. This will be due at 11:59p on Sunday evening. The more time you spend with this, the better you'll get at CSS, but keep in mind that you also have readings to do and also need to get some rest and relaxation in as well!

---

### Second Part: In lab today

Today in lab you will create a new GitHub repo, solve some little code problems, and then do some pair work in the second half of the lab. We'll plan to start the pair work at 2:30p and it should take you about an hour, tops.

**Be sure to follow instructions carefully.**

Here are a couple of things to keep in mind:

* Place no function calls in your code, unless it is inside of another function. Everything should be run by hand from the console. This is to give you additional practice using the console and an efficient app-switching process.
* Create a new branch for each code problem, and merge that branch into *master* when it is completed. Don't forget to pull the new master branch from GitHub into your local master branch each time.

---
### Create and clone a new GitHub repo named lab-april-15
You should not need instructions for this by now. Be sure to create it with a README file, and be sure to put it in the root level of your ~/CF/201 directory.

---
### HTML and JS setup
Create a index.html file (with all of the standard HTML structure like *DOCTYPE* and *title* and *head* and *body*). Place the content inside the \<script> tags in this document into an app.js file and then get the HTML and JS files connected to one another.

---
### Problem 1
*(Don't forget to create a new branch!)* Write a function called **sum()** that takes in two numbers as arguments and then returns the sum of those numbers. Have it console.log() the numbers and the sum with a message that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console, and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch from GitHub into your local master branch.

---
### Problem 2
Write a function called **multiply()** that takes in two numbers as arguments and then returns the product of those numbers. Have it console.log() the numbers and the product with a message that EXACTLY follows this example and uses the values that were input into the function:

"The product of 4 and 7 is 28."

**a-c-p**, yadda, yadda, wizards, cannoli, slugs, unicorns, cats, etc...

---
### Problem 3
Write a function called **sumAndMultiply()** that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers. Use your existing sum() and product() functions to do these calculations, and be sure to turn off their console.log()s by commenting them out. Have this function do a console.log() of the numbers, the sum, and the product with two separate messages that exactly follows the examples below and uses the values that were input into the function:

"4 and 7 and 5 sum to 16."

"The numbers 4 and 7 and 5 have a product of 140."

**a-c-p**, yadda, yadda, unicorns, slugs, cannoli, cats, wizards, etc...

---
### Problem 4
Write a function called **sumArray()** that takes in an array of numbers as a single argument and then returns the sum of those numbers. Have it console.table() the array and  console.log() the sum with a message that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

Test this function by hand in the console (remember, to do this you'll need to create an array first), and when it is finished, add-commit-push (**a-c-p**) your work to your repo, merge it to master, and then pull the new master branch on GitHub into your local master branch.

---
### Problem 5
Write a function called **multiplyArray()** that takes in an array of numbers as a single argument and then returns the product of those numbers. Have it console.table() the array and  console.log() the product with a message that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 20."

**a-c-p**, yadda, yadda, cats, slugs, unicorns, wizards, cannoli, etc...

---
### Problem 6
We're now going to put all of this output into the browser window. First, do these things to get the page structure ready:

* In the HTML file, make a series of \<p> tags as follows:
`<h1>sum()</h1>`
`<p></p>`
`<h1>multiply()</h1>`
`<p></p>`
`<h1>sumAndMultiply()</h1>`
`<p></p>`
`<p></p>`
`<h1>sumArray()</h1>`
`<p></p>`
`<h1>multiplyArray()</h1>`
`<p></p>`

* In the HTML file, inside of the five \<h1> tags that have the function names in them, replace that content with the first sentence of the five problems above, such as: Problem 1: Write a function called sum() that takes in two numbers as arguments and then returns the sum of those numbers.
* Give the empty \<p> tags unique IDs as we did in class today. Use meaningful names!
* In the JS, use `document.getElementById` statements to access those tags, and then place the content of the console.log() messages for each function into those tags using the `textContent` property.

---
# Pair Programming

This is pretty basic, just some additional practice on GitHub flow with a partner. Fork and clone each other's repos from today and take a look at each other's code. Create a branch called 'comments', and go into the HTML and JS files and leave a few comments for your partner about their code, like "That's a good variable name" or "Your code is exactly the same as mine" or whatever. Also, put a sentence in the README file indicating that you've reviewed the code in this repo.

Next, **a-c-p** your branch and make a pull request (PR) to your partner. Have your partner review the PR, look at the individual comments in the 'Files Changed' tab, and then close your PR *without* accepting it. Be mindful of the notifications you receive from GitHub in this process.

Submission instructions are in the Canvas assignment.
