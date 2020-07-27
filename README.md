# Issue exporting props from another file in TypeScript

This project is meant to show a bug I found in the 3.9.7 version of typescript.
To simulate this error:

- clone this project;
- run npm install;
- run npm run build;
- run npm test;

Notice that *test-issue.js* tries to replace the method *myTest* for a mocked one. Similar strategies are adopted by testing libraries such as *sinon*.

### Which is the expected behavior?

When *console.log* is called, it is expected to print 2, the mocked function result.

### What happens?

It is prints 1, the original behavior.

### An example that works as expected

If you run _npm run test:expected_, you'll see that it will work as expected. The difference is that this code use the _myTest2_, that is directly exported by _index.ts_, but both exporting should behave equivalent.

## Since which version the problem started

It started at _9.3.2_. In the version _8.3.3_, both examples works as expected. To check it:

- change the version of typescript to _8.3.3_;
- run npm i;
- test again;
