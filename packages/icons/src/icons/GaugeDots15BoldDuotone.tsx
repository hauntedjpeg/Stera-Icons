import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15BoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots15BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.31 7.32c.44-.44 1.16-.44 1.6 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={0.4} />
        <path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2h-.08c-.52-.04-2.08-.3-3.44-.54l-1.85-.33-.59-.1-.16-.04h-.06l-.09-.03C5.3 12.84 5 12.46 5 12c0-.48.35-.9.82-.98l.06-.01.16-.03.6-.11 1.84-.33c1.36-.23 2.92-.5 3.44-.54z" />
    </IconBase>
  ))
);

GaugeDots15BoldDuotone.displayName = 'GaugeDots15BoldDuotone';

// Triple export pattern
export { GaugeDots15BoldDuotone, GaugeDots15BoldDuotone as GaugeDots15BoldDuotoneIcon, GaugeDots15BoldDuotone as SiGaugeDots15BoldDuotone };
export default GaugeDots15BoldDuotone;
export type { GaugeDots15BoldDuotoneProps };
