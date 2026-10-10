import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleRegularProps = Omit<IconBaseProps, 'children'>;

const XCircleRegular = memo(
  forwardRef<SVGSVGElement, XCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 8.47c.3-.3.77-.3 1.06 0L12 10.94l2.47-2.46c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06L13.06 12l2.47 2.46c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 13.06l-2.47 2.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 12 8.47 9.53c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleRegular.displayName = 'XCircleRegular';

// Triple export pattern
export { XCircleRegular, XCircleRegular as XCircleRegularIcon, XCircleRegular as SiXCircleRegular };
export default XCircleRegular;
export type { XCircleRegularProps };
