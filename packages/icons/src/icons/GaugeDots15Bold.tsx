import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots15BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1a1.12 1.12 0 1 1 1.59 1.58 1.12 1.12 0 0 1-1.6-1.59M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M12 10a2 2 0 1 1-.08 4c-.52-.04-2.08-.3-3.44-.54l-2.44-.44q-.1 0-.16-.03h-.06l-.09-.03a1 1 0 0 1 .09-1.94l.06-.01.16-.03 2.44-.44A60 60 0 0 1 12 10M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots15Bold.displayName = 'GaugeDots15Bold';

// Triple export pattern (lucide-react style)
export { GaugeDots15Bold, GaugeDots15Bold as GaugeDots15BoldIcon, GaugeDots15Bold as SiGaugeDots15Bold };
export default GaugeDots15Bold;
export type { GaugeDots15BoldProps };
