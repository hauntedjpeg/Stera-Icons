import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellXFillDuotone = memo(
  forwardRef<SVGSVGElement, BellXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c3.84 0 6.87 3.25 6.87 7.17v.38c0 1.02.3 2 .87 2.85l.92 1.38c1.27 1.9-.1 4.46-2.4 4.47H16.3c-.4 2-2.17 3.5-4.29 3.5s-3.88-1.5-4.29-3.5H5.74c-2.3 0-3.67-2.56-2.4-4.47l.92-1.38c.57-.85.86-1.83.86-2.85V9.3c0-3.92 3.04-7.17 6.88-7.18M9.53 18.38c.36 1.01 1.33 1.74 2.47 1.75 1.14 0 2.11-.74 2.47-1.75zm5.09-10.5c-.34-.34-.9-.34-1.24 0L12 9.26l-1.38-1.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l1.38 1.38-1.38 1.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 11.74l1.38 1.38c.34.34.9.34 1.24 0s.34-.9 0-1.24l-1.38-1.38 1.38-1.38c.34-.34.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M13.38 7.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.38 1.38 1.38 1.38c.34.34.34.9 0 1.24s-.9.34-1.24 0L12 11.74l-1.38 1.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l1.38-1.38-1.38-1.38c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0L12 9.26z" />
    </IconBase>
  ))
);

BellXFillDuotone.displayName = 'BellXFillDuotone';

// Triple export pattern
export { BellXFillDuotone, BellXFillDuotone as BellXFillDuotoneIcon, BellXFillDuotone as SiBellXFillDuotone };
export default BellXFillDuotone;
export type { BellXFillDuotoneProps };
