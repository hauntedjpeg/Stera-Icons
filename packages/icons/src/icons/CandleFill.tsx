import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillProps = Omit<IconBaseProps, 'children'>;

const CandleFill = memo(
  forwardRef<SVGSVGElement, CandleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.43 1.34a.9.9 0 0 1 1.14 0l.02.01.03.03.46.44c.3.3.7.71 1.1 1.2.4.5.81 1.08 1.13 1.7s.57 1.34.57 2.08a4.2 4.2 0 0 1-1.16 2.9q.63.47.94 1.2.17.45.2.95.02.47.02 1.15v5.13h2.5q.16.01.38.07l.15.06.15.09q.43.3.58.8l.03.17.01.16q-.01.23-.05.38l-.12.4c-.2.56-.34 1.04-.62 1.42q-.56.77-1.48 1.07c-.45.13-.94.13-1.54.13H8.14c-.61 0-1.1 0-1.55-.13a3 3 0 0 1-1.48-1.07c-.28-.38-.42-.86-.61-1.43q-.08-.2-.13-.4a1.4 1.4 0 0 1-.04-.53l.03-.17c.1-.38.37-.7.73-.89l.15-.06q.22-.06.37-.07h2.52V13q0-.68.02-1.15.02-.49.2-.95.3-.74.93-1.2a4.2 4.2 0 0 1-1.15-2.9c0-.74.24-1.46.56-2.07.32-.63.73-1.22 1.13-1.7a15 15 0 0 1 1.56-1.65l.03-.03zM6.22 19.88c.18.53.23.67.3.78q.23.3.59.41c.13.05.3.06 1.03.06h7.73c.72 0 .89-.01 1.02-.06q.36-.11.58-.41c.08-.1.13-.25.32-.78zM12 3.2q-.37.38-.82.92c-.35.43-.69.9-.93 1.39q-.37.74-.37 1.28c0 1.34 1 2.33 2.12 2.33s2.13-1 2.13-2.33q0-.55-.38-1.28a8 8 0 0 0-.93-1.4q-.45-.53-.82-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

CandleFill.displayName = 'CandleFill';

// Triple export pattern (lucide-react style)
export { CandleFill, CandleFill as CandleFillIcon, CandleFill as SiCandleFill };
export default CandleFill;
export type { CandleFillProps };
