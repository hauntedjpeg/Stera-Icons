import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.12 2.32c.78-.78 2.13-.23 2.13.89V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.81l-7.84 7.84c-.2.2-.2.5 0 .7l7.84 7.84V16c0-.41.34-.75.75-.75s.75.34.75.75v4.8c0 1.1-1.35 1.66-2.13.88L3.85 13.4c-.78-.78-.78-2.04 0-2.82z" />
        <path d="M18.5 7.25c1.24 0 2.25 1 2.25 2.25v5c0 1.24-1 2.25-2.25 2.25h-4.25V16c0-.41-.34-.75-.75-.75h5c.41 0 .75-.34.75-.75v-5c0-.41-.34-.75-.75-.75h-5c.41 0 .75-.34.75-.75v-.75z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigLeftRegularDuotone.displayName = 'ArrowBigLeftRegularDuotone';

// Triple export pattern
export { ArrowBigLeftRegularDuotone, ArrowBigLeftRegularDuotone as ArrowBigLeftRegularDuotoneIcon, ArrowBigLeftRegularDuotone as SiArrowBigLeftRegularDuotone };
export default ArrowBigLeftRegularDuotone;
export type { ArrowBigLeftRegularDuotoneProps };
