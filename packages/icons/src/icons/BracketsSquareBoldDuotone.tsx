import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 3c1.66 0 3 1.34 3 3v12c0 1.66-1.34 3-3 3h-1.5c-.55 0-1-.45-1-1s.45-1 1-1H18c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-1.5c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M7.5 3c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h1.5c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3z" />
    </IconBase>
  ))
);

BracketsSquareBoldDuotone.displayName = 'BracketsSquareBoldDuotone';

// Triple export pattern
export { BracketsSquareBoldDuotone, BracketsSquareBoldDuotone as BracketsSquareBoldDuotoneIcon, BracketsSquareBoldDuotone as SiBracketsSquareBoldDuotone };
export default BracketsSquareBoldDuotone;
export type { BracketsSquareBoldDuotoneProps };
