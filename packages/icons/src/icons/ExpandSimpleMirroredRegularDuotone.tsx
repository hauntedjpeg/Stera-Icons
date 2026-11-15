import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleMirroredRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleMirroredRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleMirroredRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.53 14.47c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06l4.72 4.72h1.06v-1.06zM3.75 3.75v1.06l4.72 4.72c.3.3.77.3 1.06 0s.3-.77 0-1.06L4.81 3.75z" opacity={0.4} />
        <path d="M21 14.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25V15c0-.41.34-.75.75-.75M9 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H3.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExpandSimpleMirroredRegularDuotone.displayName = 'ExpandSimpleMirroredRegularDuotone';

// Triple export pattern
export { ExpandSimpleMirroredRegularDuotone, ExpandSimpleMirroredRegularDuotone as ExpandSimpleMirroredRegularDuotoneIcon, ExpandSimpleMirroredRegularDuotone as SiExpandSimpleMirroredRegularDuotone };
export default ExpandSimpleMirroredRegularDuotone;
export type { ExpandSimpleMirroredRegularDuotoneProps };
