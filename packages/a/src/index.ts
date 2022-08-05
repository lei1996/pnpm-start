import { a } from "@pnpm-start/core";
import { Big, BigSource } from "@pnpm-start/core/big";
import { from } from "@pnpm-start/core/rxjs";

console.log(a);

from([1, 2, 3]).subscribe(console.log);

console.log(new Big(1).times(0.5).toNumber());
