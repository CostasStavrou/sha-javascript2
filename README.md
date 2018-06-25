# [SocialHackersAcademy](https://www.socialhackersacademy.org/) - JavaScript 2 module

These are the projects and answers for the next 3 weeks of the JavaScript.
Look at the [SHA JavaScript-Old repo](https://github.com/SocialHackersCodeSchool/JavaScript-Old)
for details.

## Week 1 of JavaScript module 2

This week the exercises have to do mostly with using JavaScript
to dynamically update the DOM.

[Exercises](https://costasstavrou.github.io/sha-javascript2/week1/)


## Week 2 of JavaScript module 2

We continue with using the Github API to dynamically modify the DOM
on our main exercise. Before that there are some JavaScript questions.

[Look here for this week](https://costasstavrou.github.io/sha-javascript2/week2/)


## Week 3 of JavaScript module 3

Same as the previous weeks. [DOM manipulation](https://github.com/SocialHackersCodeSchool/JavaScript-Old/blob/master/Week6/MAKEME.md)

[Final project for the second module](https://costasstavrou.github.io/sha-javascript2/week3/)



**Bonus:** Write a function takes this array `['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']` and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast as possible!

**Answer**

```js
var originalArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
var toRemove = {};
var noDuplicatesArray = originalArray.filter(function(item) {
  if (toRemove[item] === undefined) {
    toRemove[item] = true;
    return true;
  } else {
    return false;
  }
});
console.log(noDuplicatesArray);
```


# License and Copyright

Unless explicitly specified all this is copyrighted by Costas Stavrou, the
author of these Github pages and GPL-3 licensed.
