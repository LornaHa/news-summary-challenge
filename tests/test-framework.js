const describe = (desc, fn) => {
 console.log(desc)
 fn()
};

describe('Outer', () => {

 describe('inner', () => {

 });

});

const it = (msg, fn) => describe(' ' + msg, fn)

// const expect = (value) => { return };

const expect = (exp) => matchers(exp)

const matchers = (exp) => ({
 toBe: (assertion) => {
   if (exp === assertion) {
     console.log('pass')
     return true
   } else {
     console.log('fail')
     return false
   }
 }
});
