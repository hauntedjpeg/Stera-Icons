import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5.72 5.72H19c.41 0 .75.34.75.75s-.34.75-.75.75H6.81l5.72 5.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7c-.3-.3-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ArrowLeftRegular.displayName = 'ArrowLeftRegular';

// Triple export pattern
export { ArrowLeftRegular, ArrowLeftRegular as ArrowLeftRegularIcon, ArrowLeftRegular as SiArrowLeftRegular };
export default ArrowLeftRegular;
export type { ArrowLeftRegularProps };
