'use strict';

for(let i = 0; i < 10; i++) {
  process.nextTick(() => console.log(i));
}
