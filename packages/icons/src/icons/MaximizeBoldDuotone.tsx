import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MaximizeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MaximizeBoldDuotone = memo(
  forwardRef<SVGSVGElement, MaximizeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v1.75c0 .97.78 1.75 1.75 1.75H8c.55 0 1 .45 1 1s-.45 1-1 1H6.25c-2.07 0-3.75-1.68-3.75-3.75V16c0-.55.45-1 1-1M17.75 2.5c2.07 0 3.75 1.68 3.75 3.75V8c0 .55-.45 1-1 1s-1-.45-1-1V6.25c0-.97-.78-1.75-1.75-1.75H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M20.5 15c.55 0 1 .45 1 1v1.75c0 2.07-1.68 3.75-3.75 3.75H16c-.55 0-1-.45-1-1s.45-1 1-1h1.75c.97 0 1.75-.78 1.75-1.75V16c0-.55.45-1 1-1M8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6.25c-.97 0-1.75.78-1.75 1.75V8c0 .55-.45 1-1 1s-1-.45-1-1V6.25c0-2.07 1.68-3.75 3.75-3.75z" />
    </IconBase>
  ))
);

MaximizeBoldDuotone.displayName = 'MaximizeBoldDuotone';

// Triple export pattern
export { MaximizeBoldDuotone, MaximizeBoldDuotone as MaximizeBoldDuotoneIcon, MaximizeBoldDuotone as SiMaximizeBoldDuotone };
export default MaximizeBoldDuotone;
export type { MaximizeBoldDuotoneProps };
