import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibRegularDuotone = memo(
  forwardRef<SVGSVGElement, PenNibRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.75 9.84a3.25 3.25 0 1 1-1.5 0V3.75h1.5zM12 11.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13.75 2.25q.38 0 .6.3c2 2.73 4.08 6.19 4.96 9.24.44 1.52.6 3.03.23 4.33a4.1 4.1 0 0 1-2.41 2.7v.93a2 2 0 0 1-2 2H8.87a2 2 0 0 1-2-2v-.94a4.1 4.1 0 0 1-2.41-2.7c-.38-1.29-.2-2.8.23-4.32.88-3.05 2.97-6.5 4.95-9.23q.23-.3.61-.31zm-3.12 1.5c-1.87 2.62-3.72 5.77-4.5 8.46a6.5 6.5 0 0 0-.23 3.5c.24.83.81 1.5 1.96 1.88.3.1.51.39.51.71v1.45c0 .28.23.5.5.5h6.26a.5.5 0 0 0 .5-.5V18.3c0-.32.2-.61.51-.71 1.15-.38 1.72-1.05 1.96-1.89a6.5 6.5 0 0 0-.23-3.5c-.78-2.68-2.63-5.83-4.5-8.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibRegularDuotone.displayName = 'PenNibRegularDuotone';

// Triple export pattern (lucide-react style)
export { PenNibRegularDuotone, PenNibRegularDuotone as PenNibRegularDuotoneIcon, PenNibRegularDuotone as SiPenNibRegularDuotone };
export default PenNibRegularDuotone;
export type { PenNibRegularDuotoneProps };
