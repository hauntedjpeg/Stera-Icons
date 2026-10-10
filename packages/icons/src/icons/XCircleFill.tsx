import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleFillProps = Omit<IconBaseProps, 'children'>;

const XCircleFill = memo(
  forwardRef<SVGSVGElement, XCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M9.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L10.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 13.24l2.38 2.37c.34.34.9.34 1.24 0s.34-.9 0-1.24L13.24 12l2.38-2.37c.34-.35.34-.9 0-1.24s-.9-.34-1.24 0L12 10.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleFill.displayName = 'XCircleFill';

// Triple export pattern
export { XCircleFill, XCircleFill as XCircleFillIcon, XCircleFill as SiXCircleFill };
export default XCircleFill;
export type { XCircleFillProps };
