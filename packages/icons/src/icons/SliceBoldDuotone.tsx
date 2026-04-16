import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SliceBoldDuotone = memo(
  forwardRef<SVGSVGElement, SliceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.16 3.92a3.13 3.13 0 1 1 4.42 4.43l-7.6 7.6a3 3 0 0 1-.84.57v-.14a1 1 0 0 0-.3-.7l-3-3.02-.08-.07a1 1 0 0 0-1.27 0l-.06.06zm3 1.41a1.13 1.13 0 0 0-1.59 0l-8.03 8.04 1.17 1.17a.6.6 0 0 0 .86 0l7.6-7.6c.44-.45.44-1.17 0-1.6" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.13 12.37a1 1 0 0 1 .63.22l.07.07 3.02 3.01a1 1 0 0 1 .29.71v2.41a2.2 2.2 0 0 1-2.2 2.21H2.5a1 1 0 0 1-.7-1.7l6.62-6.64.07-.07a1 1 0 0 1 .64-.22M4.9 19h6.02c.12 0 .21-.1.21-.2v-2l-2.01-2.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceBoldDuotone.displayName = 'SliceBoldDuotone';

// Triple export pattern (lucide-react style)
export { SliceBoldDuotone, SliceBoldDuotone as SliceBoldDuotoneIcon, SliceBoldDuotone as SiSliceBoldDuotone };
export default SliceBoldDuotone;
export type { SliceBoldDuotoneProps };
