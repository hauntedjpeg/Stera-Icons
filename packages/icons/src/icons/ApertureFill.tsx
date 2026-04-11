import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureFillProps = Omit<IconBaseProps, 'children'>;

const ApertureFill = memo(
  forwardRef<SVGSVGElement, ApertureFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13A9.84 9.84 0 0 1 21.88 12q0 .84-.14 1.63a9.89 9.89 0 0 1-19.48-3.26A9.9 9.9 0 0 1 12 2.13m2.23 13.22-.15.1q-.04 0-.07.04l-.05.03-6.06 3.5a8 8 0 0 0 6.38.78v-4.48q-.03 0-.05.03m1.79-3.6v7.31a8.1 8.1 0 0 0 3.87-5.13l-3.88-2.24zM3.88 12c0 2.3.96 4.39 2.5 5.87l3.88-2.24-.05-.02-.17-.1-.05-.02-.03-.02-.04-.02v-.01l-6.04-3.48zm4.1-7.06a8.1 8.1 0 0 0-3.87 5.13l3.88 2.24v-.03l-.01-.2V4.93m5.76 3.43.04.02.17.09.06.03.04.03.03.01 6.04 3.5V12a8 8 0 0 0-2.5-5.87zM12 3.87q-1.2 0-2.28.33v4.48l.22-.14h.01L10 8.5h.03l.02-.02 6.05-3.5c-1.2-.7-2.6-1.1-4.1-1.1" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFill.displayName = 'ApertureFill';

// Triple export pattern (lucide-react style)
export { ApertureFill, ApertureFill as ApertureFillIcon, ApertureFill as SiApertureFill };
export default ApertureFill;
export type { ApertureFillProps };
