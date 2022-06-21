# To recreate the issue:

1. Pull down the repo
1. Run `npm install` to install dependencies
1. Run `npm test` and press `a` to run all tests. You should see an error `TypeError: Cannot read property 'nextSibling' of null` with the storyshots test
