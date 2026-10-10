import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVBoldProps = Omit<IconBaseProps, 'children'>;

const SlidersVBold = memo(
  forwardRef<SVGSVGElement, SlidersVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 15c0 1.86-1.27 3.43-3 3.87V22c0 .55-.45 1-1 1s-1-.45-1-1v-3.13c-1.73-.44-3-2-3-3.87 0-1.86 1.27-3.43 3-3.87V2c0-.55.45-1 1-1s1 .45 1 1v9.13c1.73.44 3 2 3 3.87m-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2M21 9c0 1.86-1.27 3.43-3 3.87V22c0 .55-.45 1-1 1s-1-.45-1-1v-9.13c-1.73-.44-3-2-3-3.87 0-1.86 1.27-3.43 3-3.87V2c0-.55.45-1 1-1s1 .45 1 1v3.13c1.73.44 3 2 3 3.87m-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersVBold.displayName = 'SlidersVBold';

// Triple export pattern
export { SlidersVBold, SlidersVBold as SlidersVBoldIcon, SlidersVBold as SiSlidersVBold };
export default SlidersVBold;
export type { SlidersVBoldProps };
