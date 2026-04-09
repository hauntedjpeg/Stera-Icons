import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillProps = Omit<IconBaseProps, 'children'>;

const CandleFill = memo(
  forwardRef<SVGSVGElement, CandleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="candle-fill" {...props}>
      <path fillRule="evenodd" d="M11.43 1.34a.9.9 0 0 1 1.14 0l.02.01.03.03.46.44c.3.3.7.71 1.1 1.2.4.5.81 1.08 1.13 1.7s.56 1.34.56 2.08c0 1.35-.63 2.58-1.63 3.33q.54 0 .94.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v4.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.55.05-1.38.04h-3.6q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.55-.04-1.38v-4.6q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.4-.04.94-.03a4.16 4.16 0 0 1-1.07-5.4c.32-.63.73-1.22 1.13-1.7a15 15 0 0 1 1.56-1.65l.03-.03zM12 3.2q-.37.38-.82.92c-.35.43-.69.9-.93 1.39q-.37.74-.37 1.28c0 1.34 1 2.33 2.12 2.33s2.13-1 2.13-2.33q0-.55-.38-1.28a8 8 0 0 0-.93-1.4q-.45-.53-.82-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleFill.displayName = 'CandleFill';

// Triple export pattern (lucide-react style)
export { CandleFill, CandleFill as CandleFillIcon, CandleFill as SiCandleFill };
export default CandleFill;
export type { CandleFillProps };
