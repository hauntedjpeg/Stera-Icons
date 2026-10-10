import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.47 5.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L7.81 17.25H16c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v8.19z" />
    </IconBase>
  ))
);

ArrowDownLeftRegular.displayName = 'ArrowDownLeftRegular';

// Triple export pattern
export { ArrowDownLeftRegular, ArrowDownLeftRegular as ArrowDownLeftRegularIcon, ArrowDownLeftRegular as SiArrowDownLeftRegular };
export default ArrowDownLeftRegular;
export type { ArrowDownLeftRegularProps };
