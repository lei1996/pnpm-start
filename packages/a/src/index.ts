import { a } from "@pnpm-test/core";
import { Big, BigSource } from "@pnpm-test/core/big";
import { from } from "@pnpm-test/core/rxjs";

console.log(a);

from([1, 2, 3]).subscribe(console.log);

console.log(new Big(1).times(0.5).toNumber());
