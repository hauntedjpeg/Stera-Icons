import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibRegularProps = Omit<IconBaseProps, 'children'>;

const PenNibRegular = memo(
  forwardRef<SVGSVGElement, PenNibRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.75 2.25q.38 0 .6.3c2 2.73 4.08 6.19 4.96 9.24.44 1.52.6 3.03.23 4.33-.34 1.2-1.14 2.13-2.41 2.7v.93c0 1.1-.9 2-2 2H8.87c-1.1 0-2-.9-2-2v-.94c-1.27-.56-2.07-1.5-2.41-2.7-.38-1.29-.2-2.8.23-4.32.88-3.05 2.97-6.5 4.95-9.23q.23-.3.61-.31zm-3.12 1.5c-1.87 2.62-3.72 5.77-4.5 8.46-.4 1.4-.5 2.6-.23 3.5.24.83.81 1.5 1.96 1.88.3.1.51.39.51.71v1.45c0 .28.23.5.5.5h6.26c.27 0 .5-.22.5-.5V18.3c0-.32.2-.61.51-.71 1.15-.38 1.72-1.05 1.96-1.89q.38-1.37-.23-3.5c-.78-2.68-2.63-5.83-4.5-8.45h-.62v6.09c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V3.75zm1.37 7.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibRegular.displayName = 'PenNibRegular';

// Triple export pattern
export { PenNibRegular, PenNibRegular as PenNibRegularIcon, PenNibRegular as SiPenNibRegular };
export default PenNibRegular;
export type { PenNibRegularProps };
