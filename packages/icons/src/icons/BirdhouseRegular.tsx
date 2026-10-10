import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseRegularProps = Omit<IconBaseProps, 'children'>;

const BirdhouseRegular = memo(
  forwardRef<SVGSVGElement, BirdhouseRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 9.25c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.45 3.25-3.25 3.25s-3.25-1.46-3.25-3.25c0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10.5 3.33c.86-.76 2.14-.76 3 0l8 7.11c.3.27.34.75.06 1.06-.27.3-.75.34-1.06.06l-.97-.86-1.62 8.55H19c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.1L4.46 10.7l-.97.86c-.31.28-.79.25-1.06-.06-.28-.31-.25-.79.06-1.06zm2 1.12c-.28-.26-.71-.26-1 0L5.77 9.54l1.85 9.71h8.76l1.85-9.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

BirdhouseRegular.displayName = 'BirdhouseRegular';

// Triple export pattern
export { BirdhouseRegular, BirdhouseRegular as BirdhouseRegularIcon, BirdhouseRegular as SiBirdhouseRegular };
export default BirdhouseRegular;
export type { BirdhouseRegularProps };
