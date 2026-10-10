import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SliceRegularDuotone = memo(
  forwardRef<SVGSVGElement, SliceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.33 4.1c1.13-1.13 2.95-1.13 4.08 0s1.12 2.94 0 4.07l-7.6 7.6q-.42.4-.92.57-.02-.28-.22-.49l-1.13-1.13c.34.33.87.33 1.2 0l7.6-7.61c.54-.54.54-1.42 0-1.96-.53-.53-1.4-.53-1.95 0l-8.2 8.22-.53-.53-.12-.1q-.18-.12-.41-.12t-.42.12l-.11.1zM10.49 15.79l-.02-.02-1.34-1.34z" opacity={0.4} />
        <path fillRule="evenodd" d="M9.13 12.62q.24 0 .41.12l.12.1 3.01 3.01q.22.22.22.53v2.41c0 1.08-.87 1.96-1.96 1.96H2.5c-.3 0-.58-.18-.7-.46-.1-.28-.04-.6.17-.82l6.63-6.63.11-.1q.19-.12.42-.12M4.3 19.25h6.62c.26 0 .46-.2.46-.46v-2.1l-2.26-2.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceRegularDuotone.displayName = 'SliceRegularDuotone';

// Triple export pattern
export { SliceRegularDuotone, SliceRegularDuotone as SliceRegularDuotoneIcon, SliceRegularDuotone as SiSliceRegularDuotone };
export default SliceRegularDuotone;
export type { SliceRegularDuotoneProps };
