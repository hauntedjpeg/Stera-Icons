import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 5.25c.41 0 .75.34.75.75v10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.81L6.53 18.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L16.19 6.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpRightRegular.displayName = 'ArrowUpRightRegular';

// Triple export pattern
export { ArrowUpRightRegular, ArrowUpRightRegular as ArrowUpRightRegularIcon, ArrowUpRightRegular as SiArrowUpRightRegular };
export default ArrowUpRightRegular;
export type { ArrowUpRightRegularProps };
