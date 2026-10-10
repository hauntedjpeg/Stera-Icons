import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 11.03c.54-.14 1.08.19 1.22.72C6 14.77 8.74 17 12 17s6-2.23 6.78-5.25c.14-.53.68-.86 1.22-.72s.85.68.72 1.22c-.92 3.57-3.97 6.28-7.72 6.7V20h2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-1.06c-3.75-.41-6.8-3.12-7.72-6.7-.13-.53.19-1.07.72-1.2" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c2.76 0 5 2.24 5 5v3c0 2.76-2.24 5-5 5s-5-2.24-5-5V7c0-2.76 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3v3c0 1.66 1.34 3 3 3s3-1.34 3-3V7c0-1.66-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MicBoldDuotone.displayName = 'MicBoldDuotone';

// Triple export pattern
export { MicBoldDuotone, MicBoldDuotone as MicBoldDuotoneIcon, MicBoldDuotone as SiMicBoldDuotone };
export default MicBoldDuotone;
export type { MicBoldDuotoneProps };
