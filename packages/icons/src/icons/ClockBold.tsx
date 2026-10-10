import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClockBoldProps = Omit<IconBaseProps, 'children'>;

const ClockBold = memo(
  forwardRef<SVGSVGElement, ClockBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v4.59l2.54 2.53c.39.4.39 1.02 0 1.42-.4.39-1.03.39-1.42 0L11.3 12.7q-.12-.13-.19-.28-.06-.1-.08-.23L11 12V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ClockBold.displayName = 'ClockBold';

// Triple export pattern
export { ClockBold, ClockBold as ClockBoldIcon, ClockBold as SiClockBold };
export default ClockBold;
export type { ClockBoldProps };
