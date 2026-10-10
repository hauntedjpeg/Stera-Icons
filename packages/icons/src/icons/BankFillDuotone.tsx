import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankFillDuotone = memo(
  forwardRef<SVGSVGElement, BankFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.88 15.13c1.11.07 2 .99 2 2.12v.88H3.13v-.88c0-1.13.88-2.05 2-2.12v-4.26h1.75v4.26h2.25v-4.26h1.74v4.26h2.26v-4.26h1.74v4.26h2.26v-4.26h1.75z" opacity={.4} />
        <path d="M21 18.13c.48 0 .87.39.87.87s-.39.88-.87.88H3c-.48 0-.88-.4-.88-.88s.4-.87.88-.87z" />
        <path fillRule="evenodd" d="M11.63 3.2c.27-.12.6-.1.85.07l9 6c.33.22.47.62.36.98-.11.37-.46.63-.84.63H3c-.39 0-.73-.26-.84-.63-.11-.36.03-.76.35-.98l9-6zM12 6.5q-.1 0-.2.02t-.19.06q-.27.11-.44.36l-.1.17q-.06.18-.07.39 0 .21.08.39.03.1.09.17l.06.08q.12.15.3.24.2.12.47.12.15 0 .3-.04.29-.1.47-.32l.06-.08.1-.17q.06-.18.07-.39c0-.38-.21-.71-.52-.88q-.13-.07-.28-.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankFillDuotone.displayName = 'BankFillDuotone';

// Triple export pattern
export { BankFillDuotone, BankFillDuotone as BankFillDuotoneIcon, BankFillDuotone as SiBankFillDuotone };
export default BankFillDuotone;
export type { BankFillDuotoneProps };
