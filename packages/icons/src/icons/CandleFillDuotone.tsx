import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CandleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CandleFillDuotone = memo(
  forwardRef<SVGSVGElement, CandleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 9.25q.69 0 1.15.02.47.02.9.19c.68.28 1.21.81 1.5 1.49q.16.44.18.9.03.47.02 1.15v5.25h2.62q.15.02.35.07l.14.06.13.07q.4.27.52.73l.03.15.01.15q0 .21-.04.35l-.12.38c-.2.58-.34 1.03-.6 1.4-.35.48-.85.84-1.42 1.02-.42.13-.9.12-1.5.12H8.13c-.6 0-1.08 0-1.5-.12-.57-.18-1.07-.54-1.42-1.03-.26-.36-.4-.8-.6-1.39l-.12-.38q-.06-.19-.04-.5l.04-.15q.15-.54.65-.8l.14-.06q.2-.05.34-.06l.4-.01h2.23V13q0-.69.02-1.15.02-.47.19-.9c.28-.68.81-1.21 1.49-1.5q.43-.16.9-.18T12 9.25m-5.96 10.5c.22.67.3.85.39.98q.24.34.64.46c.16.05.35.06 1.06.06h7.74c.7 0 .9 0 1.06-.06q.4-.12.64-.46c.1-.13.17-.31.39-.98z" clipRule="evenodd" />
        <path d="M11.5 1.43c.3-.24.7-.24 1 0v.01l.03.03.1.1q.15.12.37.34c.3.29.69.7 1.08 1.2.4.48.8 1.06 1.12 1.67.31.61.55 1.3.55 2.02 0 1.14-.47 2.18-1.22 2.91q-.22-.15-.48-.25-.44-.17-.9-.19-.47-.03-1.15-.02-.69 0-1.15.02-.47.02-.9.19-.25.1-.48.25C8.7 8.98 8.25 7.94 8.25 6.8c0-.71.24-1.4.55-2.02.31-.61.72-1.19 1.12-1.68s.79-.9 1.08-1.2l.36-.34.1-.09.04-.03" opacity={.4} />
    </IconBase>
  ))
);

CandleFillDuotone.displayName = 'CandleFillDuotone';

// Triple export pattern
export { CandleFillDuotone, CandleFillDuotone as CandleFillDuotoneIcon, CandleFillDuotone as SiCandleFillDuotone };
export default CandleFillDuotone;
export type { CandleFillDuotoneProps };
