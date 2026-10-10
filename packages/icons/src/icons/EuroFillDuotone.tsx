import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EuroFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EuroFillDuotone = memo(
  forwardRef<SVGSVGElement, EuroFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.76 12.75q.05 1.36.3 2.5H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM15 12.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.62q-.29-1.01-.35-2.5zM7.05 8.75q-.24 1.14-.29 2.5H5c-.69 0-1.25-.56-1.25-1.25S4.31 8.75 5 8.75zM15 8.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.27q.06-1.49.35-2.5z" opacity={0.4} />
        <path d="M17 2.75c.69 0 1.25.56 1.25 1.25S17.69 5.25 17 5.25h-2.25c-1.89 0-3.17.45-4.02 1.35-.86.92-1.48 2.55-1.48 5.4s.62 4.48 1.48 5.4c.85.9 2.13 1.35 4.02 1.35H17c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-2.25c-2.26 0-4.34-.55-5.84-2.15-1.48-1.58-2.16-3.95-2.16-7.1s.68-5.52 2.16-7.1c1.5-1.6 3.58-2.15 5.84-2.15z" />
    </IconBase>
  ))
);

EuroFillDuotone.displayName = 'EuroFillDuotone';

// Triple export pattern
export { EuroFillDuotone, EuroFillDuotone as EuroFillDuotoneIcon, EuroFillDuotone as SiEuroFillDuotone };
export default EuroFillDuotone;
export type { EuroFillDuotoneProps };
