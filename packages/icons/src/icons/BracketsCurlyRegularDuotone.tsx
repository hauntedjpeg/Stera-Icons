import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.22 3.25c1.4 0 2.53 1.13 2.53 2.53v2.2c0 1.53 1 2.87 2.46 3.3.32.1.54.39.54.72s-.22.62-.54.72c-1.46.43-2.46 1.77-2.46 3.3v2.2c0 1.4-1.13 2.53-2.53 2.53H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.22c.57 0 1.03-.46 1.03-1.03v-2.2c0-1.63.8-3.11 2.07-4.02-1.27-.9-2.07-2.4-2.07-4.02v-2.2c0-.57-.46-1.03-1.03-1.03H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M8 3.25c.41 0 .75.34.75.75s-.34.75-.75.75H6.78c-.57 0-1.03.46-1.03 1.03v2.2c0 1.63-.8 3.11-2.07 4.02 1.27.9 2.07 2.4 2.07 4.02v2.2c0 .57.46 1.03 1.03 1.03H8c.41 0 .75.34.75.75s-.34.75-.75.75H6.78c-1.4 0-2.53-1.13-2.53-2.53v-2.2c0-1.53-1-2.87-2.46-3.3-.32-.1-.54-.39-.54-.72s.22-.62.54-.72c1.46-.43 2.46-1.77 2.46-3.3v-2.2c0-1.4 1.13-2.53 2.53-2.53z" />
    </IconBase>
  ))
);

BracketsCurlyRegularDuotone.displayName = 'BracketsCurlyRegularDuotone';

// Triple export pattern
export { BracketsCurlyRegularDuotone, BracketsCurlyRegularDuotone as BracketsCurlyRegularDuotoneIcon, BracketsCurlyRegularDuotone as SiBracketsCurlyRegularDuotone };
export default BracketsCurlyRegularDuotone;
export type { BracketsCurlyRegularDuotoneProps };
