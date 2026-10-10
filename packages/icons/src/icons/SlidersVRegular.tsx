import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersVRegularProps = Omit<IconBaseProps, 'children'>;

const SlidersVRegular = memo(
  forwardRef<SVGSVGElement, SlidersVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.75 15c0 1.81-1.29 3.33-3 3.67V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.33c-1.71-.34-3-1.86-3-3.67s1.29-3.33 3-3.67V2c0-.41.34-.75.75-.75s.75.34.75.75v9.33c1.71.34 3 1.86 3 3.67m-1.5 0c0-1.24-1-2.25-2.25-2.25-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25M20.75 9c0 1.81-1.29 3.33-3 3.67V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9.33c-1.71-.34-3-1.86-3-3.67s1.29-3.33 3-3.67V2c0-.41.34-.75.75-.75s.75.34.75.75v3.33c1.71.34 3 1.86 3 3.67m-1.5 0c0-1.24-1-2.25-2.25-2.25-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersVRegular.displayName = 'SlidersVRegular';

// Triple export pattern
export { SlidersVRegular, SlidersVRegular as SlidersVRegularIcon, SlidersVRegular as SiSlidersVRegular };
export default SlidersVRegular;
export type { SlidersVRegularProps };
