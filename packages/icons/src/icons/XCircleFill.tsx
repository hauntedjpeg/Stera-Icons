import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleFillProps = Omit<IconBaseProps, 'children'>;

const XCircleFill = memo(
  forwardRef<SVGSVGElement, XCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M9.62 8.38a.88.88 0 0 0-1.24 1.24L10.76 12l-2.38 2.38a.88.88 0 0 0 1.24 1.24L12 13.24l2.38 2.37a.87.87 0 1 0 1.24-1.24L13.24 12l2.38-2.37a.88.88 0 0 0-1.24-1.24L12 10.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleFill.displayName = 'XCircleFill';

// Triple export pattern (lucide-react style)
export { XCircleFill, XCircleFill as XCircleFillIcon, XCircleFill as SiXCircleFill };
export default XCircleFill;
export type { XCircleFillProps };
