Here is the task. It's kind of a riddle, in the sense that it's very simple code once you figure out how to write it, but it might seem kind of too-tricky at first.

You will write your code in the `student_work.js`, which is already included from the HTML file.

We would like the web-page to do all of the following things, _in a single event handler_. Doing it in one event handler means using propagation and delegation.

1. If I click on a number, that number is doubled (like with `_.innerText = Number(_.innerText) * 2`, except you need to fill in the blank).
2. If I click on a div with the `old` class (but I don't hit the number), remove that div from the DOM
3. If I click on a div with the `new` class, remove the `new` class and add the `old` class
4. If I click on the background container, call the `addSmallBox` function (which will add a new div).
