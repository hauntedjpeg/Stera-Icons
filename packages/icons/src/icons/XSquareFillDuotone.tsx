import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, XSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM9.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L10.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 13.24l2.38 2.37c.34.34.9.34 1.24 0s.34-.9 0-1.24L13.24 12l2.38-2.37c.34-.35.34-.9 0-1.24s-.9-.34-1.24 0L12 10.76z" clipRule="evenodd" opacity={.4} />
        <path d="M8.38 8.38c.34-.34.9-.34 1.24 0L12 10.76l2.38-2.37c.34-.34.9-.34 1.24 0s.34.9 0 1.24L13.24 12l2.38 2.37c.34.35.34.9 0 1.24s-.9.34-1.24 0L12 13.24l-2.38 2.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L10.76 12 8.38 9.62c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

XSquareFillDuotone.displayName = 'XSquareFillDuotone';

// Triple export pattern
export { XSquareFillDuotone, XSquareFillDuotone as XSquareFillDuotoneIcon, XSquareFillDuotone as SiXSquareFillDuotone };
export default XSquareFillDuotone;
export type { XSquareFillDuotoneProps };
