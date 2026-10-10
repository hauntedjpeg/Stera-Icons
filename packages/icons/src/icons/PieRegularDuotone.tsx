import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PieRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PieRegularDuotone = memo(
  forwardRef<SVGSVGElement, PieRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.06 18.26c-.32.9-1.17 1.49-2.12 1.49H7.06c-.95 0-1.8-.6-2.12-1.5l-1.3-3.62q.41.12.86.12.38 0 .75-.09l1.1 3.1c.1.29.39.49.7.49h9.9c.3 0 .6-.2.7-.5l1.1-3.09q.37.09.75.09.45 0 .85-.12zM9.47 7.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1 1c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM13.47 7.72c.3-.3.77-.3 1.06 0l1 1c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1-1c-.3-.3-.3-.77 0-1.06" opacity={0.4} />
        <path fillRule="evenodd" d="M12 4.25c4.97 0 9.1 2.8 10.5 6.79.2.59.26 1.35-.13 2.03-.57 1-1.64 1.68-2.87 1.68-1 0-1.9-.45-2.5-1.16-.6.7-1.5 1.16-2.5 1.16s-1.9-.45-2.5-1.16c-.6.7-1.5 1.16-2.5 1.16S7.6 14.3 7 13.59c-.6.7-1.5 1.16-2.5 1.16-1.23 0-2.3-.69-2.87-1.68-.4-.68-.33-1.44-.12-2.03C2.9 7.06 7.03 4.25 12 4.25m0 1.5c-4.42 0-7.92 2.49-9.08 5.78q-.16.51 0 .79c.33.57.92.93 1.58.93.83 0 1.56-.6 1.77-1.43l.04-.12c.12-.27.39-.45.69-.45.34 0 .64.23.73.57.2.84.93 1.43 1.77 1.43.83 0 1.56-.6 1.77-1.43l.04-.12c.12-.27.39-.45.69-.45.34 0 .64.23.73.57.2.84.93 1.43 1.77 1.43.83 0 1.56-.6 1.77-1.43l.04-.12c.12-.27.39-.45.69-.45.34 0 .64.23.73.57.2.84.93 1.43 1.77 1.43.66 0 1.25-.36 1.57-.93q.17-.28 0-.79c-1.15-3.3-4.65-5.78-9.07-5.78" clipRule="evenodd" />
    </IconBase>
  ))
);

PieRegularDuotone.displayName = 'PieRegularDuotone';

// Triple export pattern
export { PieRegularDuotone, PieRegularDuotone as PieRegularDuotoneIcon, PieRegularDuotone as SiPieRegularDuotone };
export default PieRegularDuotone;
export type { PieRegularDuotoneProps };
