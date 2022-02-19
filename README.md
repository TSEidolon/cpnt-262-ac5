# CPNT-262 Achievement 5 - Groundhog Day
## By: Edgar Caballero

Troubleshooting:
1. The while loop kept crashing my browser. No idea why.
     - The code was correct, yet it keeps running.

```
  let output = 'You mixed this: ';
  let i = 0;
  while (i < number) {
    output += ` ${food [Math.floor(Math.random()* food.length)]},`;
  }
```
  - Realized i forgot to increase the count of "`i`" so it does the while loop forever.
  - fixed when I added "`i++;`" to incrementally increase the count of "`i`" so the condition <strong> (i < number) </strong> works.
  - final while code:
```
  let output = 'You mixed this: ';
  let i = 0;
  while (i < number) {
    output += ` ${food [Math.floor(Math.random()* food.length)]},`;
    i++;
  }
```



Attributions:
1. Tony Grimes for the <a href="https://github.com/sait-wbdv/in-class-w22/blob/main/02-15-for-loops/06-phrase-generator-starter/js/app.js" target="_blank"> starter code </a>.
    - Changed the "for loop" to a "while loop" as to not copy the code entirely.

2. MDN Web Docs for the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while" target="_blank"> While loop tutorial</a>.
