import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.47 5.47c.3-.3.77-.3 1.06 0l10.72 10.72V8c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.19L5.47 6.53c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowDownRightRegular.displayName = 'ArrowDownRightRegular';

// Triple export pattern
export { ArrowDownRightRegular, ArrowDownRightRegular as ArrowDownRightRegularIcon, ArrowDownRightRegular as SiArrowDownRightRegular };
export default ArrowDownRightRegular;
export type { ArrowDownRightRegularProps };
