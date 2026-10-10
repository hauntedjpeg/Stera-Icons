import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CherryFillDuotone = memo(
  forwardRef<SVGSVGElement, CherryFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.32 10.89a5.12 5.12 0 1 1-1.74.19q.1 1.21.64 2.31a.88.88 0 0 0 1.56-.78 5 5 0 0 1-.46-1.72" opacity={0.4} />
        <path d="M7.35 8.92Q7.12 9.97 7.13 11a.88.88 0 0 0 1.75 0q-.01-.99.25-2c1.05.24 1.97.8 2.67 1.56a6.86 6.86 0 0 0-2.07 8.26A5.1 5.1 0 0 1 2.88 14c0-2.6 1.94-4.76 4.47-5.08" opacity={0.4} />
        <path fillRule="evenodd" d="m22 1.13.17.01.05.01.03.01.14.05.02.02.05.02.02.02.03.02.05.04a.9.9 0 0 1 .08 1.27l-.05.05-.21.14-.03.01-.04.02-.13.04h-.03l-.05.01c-1.87.2-3.66 1.7-4.77 3.73a9 9 0 0 0-.9 2.54 6.87 6.87 0 1 1-5.77 11.2q-1.23.53-2.66.54a6.88 6.88 0 0 1-.04-13.75 8 8 0 0 1 2.16-2.8C12.4 2.4 16.14 1.13 22 1.13m-5.68 9.76q.07.93.46 1.72a.87.87 0 0 1-1.56.78 6 6 0 0 1-.64-2.31 5.13 5.13 0 1 0 1.74-.2M7.35 8.92a5.12 5.12 0 1 0 2.38 9.9 6.85 6.85 0 0 1 2.07-8.26A5 5 0 0 0 9.13 9a8 8 0 0 0-.26 2 .88.88 0 0 1-1.74 0q-.01-1.01.22-2.08M17.8 3.15c-3.16.44-5.23 1.4-6.56 2.52a7 7 0 0 0-1.44 1.7c1.4.38 2.62 1.2 3.52 2.3q.62-.28 1.3-.4a10.3 10.3 0 0 1 3.18-6.12" clipRule="evenodd" />
    </IconBase>
  ))
);

CherryFillDuotone.displayName = 'CherryFillDuotone';

// Triple export pattern
export { CherryFillDuotone, CherryFillDuotone as CherryFillDuotoneIcon, CherryFillDuotone as SiCherryFillDuotone };
export default CherryFillDuotone;
export type { CherryFillDuotoneProps };
