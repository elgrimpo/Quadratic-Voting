
import { createCanBoundTo } from '@casl/react';
import { Ability } from '@casl/ability';

export const ability = new Ability();
export default createCanBoundTo(ability);