import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ApertureFillProps = Omit<IconBaseProps, 'children'>;

const ApertureFill = memo(
  forwardRef<SVGSVGElement, ApertureFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c2.39 0 4.58.84 6.28 2.25 2.2 1.81 3.6 4.55 3.6 7.62q0 .84-.14 1.63c-.59 3.52-3.03 6.4-6.28 7.62q-1.63.61-3.46.63c-2.39 0-4.58-.85-6.28-2.26-2.2-1.81-3.6-4.55-3.6-7.62q0-.84.14-1.63c.59-3.52 3.03-6.4 6.28-7.62q1.63-.61 3.46-.62m2.23 13.22-.15.1q-.04 0-.07.04l-.05.03-6.06 3.5c1.2.7 2.6 1.1 4.1 1.1q1.2 0 2.28-.32v-4.48q-.03 0-.05.03m1.79-3.6v7.31c1.92-1.1 3.34-2.94 3.87-5.13l-3.88-2.24zM3.88 12c0 2.3.96 4.39 2.5 5.87l3.88-2.24-.05-.02-.17-.1-.05-.02-.03-.02-.04-.02v-.01l-6.04-3.48zm4.1-7.06c-1.92 1.1-3.34 2.94-3.87 5.13l3.88 2.24v-.03l-.01-.2V4.93m5.76 3.43.04.02.17.09.06.03.04.03.03.01 6.04 3.5V12c0-2.3-.96-4.39-2.5-5.87zM12 3.87q-1.2 0-2.28.33v4.48l.22-.14h.01L10 8.5h.03l.02-.02 6.05-3.5c-1.2-.7-2.6-1.1-4.1-1.1" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureFill.displayName = 'ApertureFill';

// Triple export pattern
export { ApertureFill, ApertureFill as ApertureFillIcon, ApertureFill as SiApertureFill };
export default ApertureFill;
export type { ApertureFillProps };
