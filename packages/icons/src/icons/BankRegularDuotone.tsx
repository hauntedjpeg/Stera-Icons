import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BankRegularDuotone = memo(
  forwardRef<SVGSVGElement, BankRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.25 16.75c-.28 0-.5.22-.5.5v1h-1.5v-1c0-1.1.9-2 2-2v-4.5h1.5v4.5h2.5v-4.5h1.5v4.5h2.5v-4.5h1.5v4.5h2.5v-4.5h1.5v4.5c1.1 0 2 .9 2 2v1h-1.5v-1c0-.28-.22-.5-.5-.5zM12 6.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" opacity={0.4} />
        <path d="M21 18.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M11.68 3.32c.24-.1.52-.1.74.06l9 6c.27.18.4.52.3.84s-.39.53-.72.53H3c-.33 0-.62-.22-.72-.53s.03-.66.3-.84l9-6zm-6.2 5.93h13.04L12 4.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankRegularDuotone.displayName = 'BankRegularDuotone';

// Triple export pattern
export { BankRegularDuotone, BankRegularDuotone as BankRegularDuotoneIcon, BankRegularDuotone as SiBankRegularDuotone };
export default BankRegularDuotone;
export type { BankRegularDuotoneProps };
