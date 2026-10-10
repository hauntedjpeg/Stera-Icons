import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.31 7.32c.44-.44 1.16-.44 1.6 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={0.4} />
        <path d="M12 5.25c.36 0 .67.26.74.62v.05l.04.17.1.59c.1.49.21 1.15.33 1.85.24 1.36.5 2.9.54 3.41V12c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75v-.06c.04-.5.3-2.05.54-3.41l.33-1.85.1-.6.03-.16.01-.05c.07-.36.38-.62.74-.62" />
    </IconBase>
  ))
);

GaugeDots50RegularDuotone.displayName = 'GaugeDots50RegularDuotone';

// Triple export pattern
export { GaugeDots50RegularDuotone, GaugeDots50RegularDuotone as GaugeDots50RegularDuotoneIcon, GaugeDots50RegularDuotone as SiGaugeDots50RegularDuotone };
export default GaugeDots50RegularDuotone;
export type { GaugeDots50RegularDuotoneProps };
