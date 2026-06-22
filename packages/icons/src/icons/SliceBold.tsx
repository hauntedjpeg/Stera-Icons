import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceBoldProps = Omit<IconBaseProps, 'children'>;

const SliceBold = memo(
  forwardRef<SVGSVGElement, SliceBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.16 3.92a3.13 3.13 0 1 1 4.42 4.43l-7.6 7.6a3 3 0 0 1-.84.57v2.27a2.2 2.2 0 0 1-2.2 2.21H2.5a1 1 0 0 1-.7-1.7zM4.9 19h6.02c.12 0 .21-.1.21-.2v-2l-2.01-2.02zM20.17 5.33a1.13 1.13 0 0 0-1.6 0l-8.03 8.04 1.17 1.17a.6.6 0 0 0 .86 0l7.6-7.6c.44-.45.44-1.17 0-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceBold.displayName = 'SliceBold';

// Triple export pattern (lucide-react style)
export { SliceBold, SliceBold as SliceBoldIcon, SliceBold as SiSliceBold };
export default SliceBold;
export type { SliceBoldProps };
