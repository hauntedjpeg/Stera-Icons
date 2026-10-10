import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleBoldProps = Omit<IconBaseProps, 'children'>;

const XCircleBold = memo(
  forwardRef<SVGSVGElement, XCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 8.3c.38-.4 1.02-.4 1.4 0l2.3 2.29 2.3-2.3c.38-.38 1.02-.38 1.4.01.4.39.4 1.02 0 1.41L13.43 12l2.29 2.29c.39.39.39 1.02 0 1.41-.4.4-1.03.4-1.42 0L12 13.41l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L10.58 12l-2.3-2.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleBold.displayName = 'XCircleBold';

// Triple export pattern
export { XCircleBold, XCircleBold as XCircleBoldIcon, XCircleBold as SiXCircleBold };
export default XCircleBold;
export type { XCircleBoldProps };
