import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersRegularDuotone = memo(
  forwardRef<SVGSVGElement, SlidersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.33 16.25q-.08.37-.08.75t.08.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 16.25c.41 0 .75.34.75.75s-.34.75-.75.75h-3.33q.08-.37.08-.75t-.08-.75zM5.33 6.25q-.08.37-.08.75t.08.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 6.25c.41 0 .75.34.75.75s-.34.75-.75.75h-9.33q.08-.37.08-.75t-.08-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M15 13.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M9 3.25c2.07 0 3.75 1.68 3.75 3.75S11.07 10.75 9 10.75 5.25 9.07 5.25 7 6.93 3.25 9 3.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersRegularDuotone.displayName = 'SlidersRegularDuotone';

// Triple export pattern
export { SlidersRegularDuotone, SlidersRegularDuotone as SlidersRegularDuotoneIcon, SlidersRegularDuotone as SiSlidersRegularDuotone };
export default SlidersRegularDuotone;
export type { SlidersRegularDuotoneProps };
