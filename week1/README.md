# [SocialHackersAcademy](https://www.socialhackersacademy.org/) - JavaScript 2 module

These are the projects and answers for the next 3 weeks of the JavaScript.
Look at the [SHA JavaScript-Old repo](https://github.com/SocialHackersCodeSchool/JavaScript-Old/blob/master/Week4/MAKEME.md)
for details.

## Week 1 of JavaScript module 2

### Custom challenge

1. Go to https://api.github.com/orgs/SocialHackersCodeSchool/repos, you will see a list of the repositories our SHA organization has (yes it's a lot of JSON).
2. You can copy the JSON and put it in a string at the top of your `.js` file. Print the name of the 3rd repository in the array to the console.
3. Make a `<ul>` with a `<li>` for each repository name (just like you did with the books in the previous assignment).
4. It should only display the modules that are actually being used in the curriculum at the moment, you of course know which those are, but if you need a reminder you can find them in our [curriculum overview](https://github.com/SocialHackersCodeSchool/curriculum).
5. Use CSS to divide the page in two columns. The left column will have a list of the names for repository. The right column should have the following information about each repository: the number of `stargazers`, the number of `watchers`, the number of `forks`, the `language` of the repository.
6. place the `avatar_url` (logo) of our organization somewhere on a nice place in your page as an image.

**Solution**

The project is [here](https://costasstavrou.github.io/sha-javascript2/week1/step1/index.html)


### DOM exercises

1. Create a webpage with an empty body. Using JS append an h1 title, 2 paragraphs and between these 2 paragraphs an unordered list (`<ul>`), with 5 items. Try not to repeat your self ([DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)). You can freely choose your content.

**Solution**

[DOM manipulations](https://costasstavrou.github.io/sha-javascript2/week1/step2/index.html)


2. Create a webpage ([check the bootstrap examples for insperation and/or usage](https://v4-alpha.getbootstrap.com/examples/)) with 2 themes, a dark and a light one. Apply the light theme by default by adding the class `light-theme` on the body tag. Put a button on the top of your page with the text `Switch theme!`. OnClick remove `light-theme` and add the `dark-theme` class. Bonus: Instead of the static button text `Switch theme!` try to put the name of the theme that will be applied, ex. `Switch to Dark/Light theme`.

**Solution**

[Switch themes exercise](https://costasstavrou.github.io/sha-javascript2/week1/step3/index.html)


# License and Copyright

Unless explicitly specified all this is copyrighted by Costas Stavrou, the
author of these Github pages and GPL-3 licensed.
