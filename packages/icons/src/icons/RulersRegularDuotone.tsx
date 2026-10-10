import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulersRegularDuotone = memo(
  forwardRef<SVGSVGElement, RulersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 2.25c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2h-10v10c0 1.1-.9 2-2 2h-3.5c-1.1 0-2-.9-2-2v-10h1.5v10l.01.1c.05.23.25.4.49.4h3.5c.28 0 .5-.22.5-.5v-10h1.5v-1.5h10c.28 0 .5-.22.5-.5v-3.5c0-.28-.22-.5-.5-.5h-10v-1.5z" opacity={.4} />
        <path d="M8.25 17.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25zM8.25 13.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25z" />
        <path fillRule="evenodd" d="M9.75 9.75h-7.5V4c0-.97.78-1.75 1.75-1.75h5.75zM4 3.75c-.14 0-.25.11-.25.25v4.25h4.5v-4.5z" clipRule="evenodd" />
        <path d="M13 6.25c.41 0 .75.34.75.75v1.25h-1.5V7c0-.41.34-.75.75-.75M17 6.25c.41 0 .75.34.75.75v1.25h-1.5V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

RulersRegularDuotone.displayName = 'RulersRegularDuotone';

// Triple export pattern
export { RulersRegularDuotone, RulersRegularDuotone as RulersRegularDuotoneIcon, RulersRegularDuotone as SiRulersRegularDuotone };
export default RulersRegularDuotone;
export type { RulersRegularDuotoneProps };
