import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceBoldProps = Omit<IconBaseProps, 'children'>;

const SliceBold = memo(
  forwardRef<SVGSVGElement, SliceBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.16 3.92c1.22-1.22 3.2-1.22 4.42 0s1.23 3.2 0 4.43l-7.6 7.6q-.37.37-.84.57v2.27c0 1.22-.99 2.21-2.2 2.21H2.5c-.4 0-.77-.24-.92-.62-.16-.37-.07-.8.21-1.09zM4.9 19h6.02c.12 0 .21-.1.21-.2v-2l-2.01-2.02zM20.17 5.33c-.44-.44-1.16-.44-1.6 0l-8.03 8.04 1.17 1.17c.24.23.62.23.86 0l7.6-7.6c.44-.45.44-1.17 0-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceBold.displayName = 'SliceBold';

// Triple export pattern
export { SliceBold, SliceBold as SliceBoldIcon, SliceBold as SiSliceBold };
export default SliceBold;
export type { SliceBoldProps };
