import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.25c.41 0 .75.34.75.75v16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4c0-.41.34-.75.75-.75M13.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5.72 5.72H21c.41 0 .75.34.75.75s-.34.75-.75.75H8.81l5.72 5.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7c-.3-.3-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ArrowLineLeftRegular.displayName = 'ArrowLineLeftRegular';

// Triple export pattern
export { ArrowLineLeftRegular, ArrowLineLeftRegular as ArrowLineLeftRegularIcon, ArrowLineLeftRegular as SiArrowLineLeftRegular };
export default ArrowLineLeftRegular;
export type { ArrowLineLeftRegularProps };
