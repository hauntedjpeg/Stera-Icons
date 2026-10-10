import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.12 2.32c.78-.78 2.13-.23 2.13.89v4.04H18c1.52 0 2.75 1.23 2.75 2.75v4c0 1.52-1.23 2.75-2.75 2.75h-3.75v4.04c0 1.12-1.35 1.67-2.13.89L3.85 13.4c-.78-.78-.78-2.04 0-2.82zm-7.2 9.33c-.2.2-.2.5 0 .7l7.83 7.84V16c0-.41.34-.75.75-.75H18c.7 0 1.25-.56 1.25-1.25v-4c0-.7-.56-1.25-1.25-1.25h-4.5c-.41 0-.75-.34-.75-.75V3.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigLeftRegular.displayName = 'ArrowBigLeftRegular';

// Triple export pattern
export { ArrowBigLeftRegular, ArrowBigLeftRegular as ArrowBigLeftRegularIcon, ArrowBigLeftRegular as SiArrowBigLeftRegular };
export default ArrowBigLeftRegular;
export type { ArrowBigLeftRegularProps };
