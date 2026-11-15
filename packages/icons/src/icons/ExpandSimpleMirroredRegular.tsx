import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleMirroredRegularProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleMirroredRegular = memo(
  forwardRef<SVGSVGElement, ExpandSimpleMirroredRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.19l-4.72-4.72c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l4.72 4.72V15c0-.41.34-.75.75-.75M9 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H4.81l4.72 4.72c.3.3.3.77 0 1.06s-.77.3-1.06 0L3.75 4.81V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExpandSimpleMirroredRegular.displayName = 'ExpandSimpleMirroredRegular';

// Triple export pattern
export { ExpandSimpleMirroredRegular, ExpandSimpleMirroredRegular as ExpandSimpleMirroredRegularIcon, ExpandSimpleMirroredRegular as SiExpandSimpleMirroredRegular };
export default ExpandSimpleMirroredRegular;
export type { ExpandSimpleMirroredRegularProps };
