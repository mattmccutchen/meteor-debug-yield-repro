import { Meteor } from 'meteor/meteor';
import Future from 'fibers/future';

console.log("top level");
debugger;

Meteor.startup(() => {
  debugger;
  console.log("before");
  let f = new Future();
  Meteor.defer(() => {
    console.log("resuming the original fiber");
    f.return();
  });
  f.wait();
  console.log("after");
});
