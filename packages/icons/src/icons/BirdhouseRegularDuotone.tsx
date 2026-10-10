import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BirdhouseRegularDuotone = memo(
  forwardRef<SVGSVGElement, BirdhouseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.1 19.25 4.45 10.7l1.31-1.16 1.85 9.71zM18.23 9.54l1.3 1.16-1.62 8.55h-1.53z" opacity={0.4} />
        <path d="M19 19.25c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M12 9.25c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
        <path d="M10.5 3.33c.86-.76 2.14-.76 3 0l8 7.11c.3.27.34.75.06 1.06-.27.3-.75.34-1.06.06l-8-7.11c-.29-.26-.71-.26-1 0l-8 7.11c-.31.28-.79.25-1.06-.06-.28-.31-.25-.79.06-1.06z" />
    </IconBase>
  ))
);

BirdhouseRegularDuotone.displayName = 'BirdhouseRegularDuotone';

// Triple export pattern
export { BirdhouseRegularDuotone, BirdhouseRegularDuotone as BirdhouseRegularDuotoneIcon, BirdhouseRegularDuotone as SiBirdhouseRegularDuotone };
export default BirdhouseRegularDuotone;
export type { BirdhouseRegularDuotoneProps };
