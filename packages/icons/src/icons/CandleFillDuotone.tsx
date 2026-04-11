import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleFillDuotone = memo(
  forwardRef<SVGSVGElement, CandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.24 10.13q.54 0 .94.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v4.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.55.05-1.38.04h-3.6q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38v-4.6q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.4-.04.94-.03a3.7 3.7 0 0 0 4.48 0" opacity={.4} />
        <path d="M11.43 1.34a.9.9 0 0 1 1.14 0l.02.01.03.03.46.44c.3.3.7.71 1.1 1.2.4.5.81 1.08 1.13 1.7s.56 1.34.56 2.08c0 2.2-1.68 4.08-3.87 4.08A4 4 0 0 1 8.13 6.8c0-.74.24-1.46.56-2.07.32-.63.73-1.22 1.13-1.7a15 15 0 0 1 1.56-1.65l.03-.03z" />
    </IconBase>
  ))
);

CandleFillDuotone.displayName = 'CandleFillDuotone';

// Triple export pattern (lucide-react style)
export { CandleFillDuotone, CandleFillDuotone as CandleFillDuotoneIcon, CandleFillDuotone as SiCandleFillDuotone };
export default CandleFillDuotone;
export type { CandleFillDuotoneProps };
