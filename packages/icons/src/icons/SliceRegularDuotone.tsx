import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SliceRegularDuotone = memo(
  forwardRef<SVGSVGElement, SliceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.33 4.1a2.88 2.88 0 1 1 4.08 4.07l-7.6 7.6q-.42.4-.92.57a.8.8 0 0 0-.22-.49l-1.13-1.13c.34.33.87.33 1.2 0l7.6-7.61a1.38 1.38 0 0 0-1.95-1.96l-8.2 8.22-.53-.53-.12-.1a.8.8 0 0 0-.83 0l-.11.1zM10.49 15.79l-.02-.02-1.34-1.34z" opacity={0.4} />
        <path fillRule="evenodd" d="M9.13 12.62q.23 0 .41.12l.12.1 3.01 3.01q.21.22.22.53v2.41c0 1.08-.87 1.96-1.95 1.96H2.5a.75.75 0 0 1-.53-1.28l6.63-6.63.11-.1a1 1 0 0 1 .42-.12M4.3 19.25h6.63c.25 0 .45-.2.45-.46v-2.1l-2.26-2.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceRegularDuotone.displayName = 'SliceRegularDuotone';

// Triple export pattern (lucide-react style)
export { SliceRegularDuotone, SliceRegularDuotone as SliceRegularDuotoneIcon, SliceRegularDuotone as SiSliceRegularDuotone };
export default SliceRegularDuotone;
export type { SliceRegularDuotoneProps };
