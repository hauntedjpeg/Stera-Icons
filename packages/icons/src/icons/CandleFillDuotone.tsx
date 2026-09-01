import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleFillDuotone = memo(
  forwardRef<SVGSVGElement, CandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.38 18.26q.14 0 .34.06l.14.06.13.07q.4.27.52.73l.04.15v.15q0 .2-.04.35l-.12.38c-.2.58-.34 1.03-.6 1.4a2.8 2.8 0 0 1-2.49 1.14H7.7q-.6 0-1.07-.12A2.8 2.8 0 0 1 5.2 21.6c-.26-.36-.4-.8-.6-1.39l-.12-.38q-.06-.19-.03-.5l.03-.15q.15-.54.65-.8l.14-.06q.2-.05.34-.06l.4-.01h12.35M11.5 1.43c.3-.24.71-.24 1 0v.01l.03.03.1.1a14 14 0 0 1 2.57 3.21c.31.61.55 1.3.55 2.02 0 1.1-.43 2.1-1.13 2.82q-.25-.15-.52-.28-.45-.17-.95-.2L12 9.14q-.68 0-1.15.02a3 3 0 0 0-1.47.47A4 4 0 0 1 8.25 6.8c0-.71.24-1.4.55-2.02.31-.61.72-1.19 1.12-1.68a15 15 0 0 1 1.44-1.54l.1-.09.04-.03" opacity={0.4} />
        <path d="M12 9.13q.68 0 1.15.02.49.02.95.2c.7.29 1.26.85 1.56 1.55q.17.45.2.95.02.47.02 1.15v5.25H8.12V13q0-.68.03-1.15.02-.49.2-.95c.29-.7.85-1.26 1.55-1.56q.45-.17.95-.2.47-.02 1.15-.02" />
    </IconBase>
  ))
);

CandleFillDuotone.displayName = 'CandleFillDuotone';

// Triple export pattern (lucide-react style)
export { CandleFillDuotone, CandleFillDuotone as CandleFillDuotoneIcon, CandleFillDuotone as SiCandleFillDuotone };
export default CandleFillDuotone;
export type { CandleFillDuotoneProps };
