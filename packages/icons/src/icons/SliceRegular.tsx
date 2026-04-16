import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceRegularProps = Omit<IconBaseProps, 'children'>;

const SliceRegular = memo(
  forwardRef<SVGSVGElement, SliceRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.33 4.1a2.88 2.88 0 1 1 4.08 4.07l-7.6 7.6q-.41.4-.92.57v2.45c0 1.08-.87 1.96-1.95 1.96H2.5a.75.75 0 0 1-.53-1.28zM4.31 19.25h6.63c.25 0 .45-.2.45-.46v-2.1l-2.26-2.26zm16.04-14.1a1.4 1.4 0 0 0-1.95 0l-8.21 8.22 1.34 1.34c.34.34.88.34 1.22 0l7.6-7.6c.54-.54.54-1.42 0-1.96" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceRegular.displayName = 'SliceRegular';

// Triple export pattern (lucide-react style)
export { SliceRegular, SliceRegular as SliceRegularIcon, SliceRegular as SiSliceRegular };
export default SliceRegular;
export type { SliceRegularProps };
