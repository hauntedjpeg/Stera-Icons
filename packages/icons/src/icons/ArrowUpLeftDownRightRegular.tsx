import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.81l13.44 13.44V13.5c0-.41.34-.75.75-.75s.75.34.75.75V20c0 .41-.34.75-.75.75h-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.69L4.75 5.81v4.69c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightRegular.displayName = 'ArrowUpLeftDownRightRegular';

// Triple export pattern
export { ArrowUpLeftDownRightRegular, ArrowUpLeftDownRightRegular as ArrowUpLeftDownRightRegularIcon, ArrowUpLeftDownRightRegular as SiArrowUpLeftDownRightRegular };
export default ArrowUpLeftDownRightRegular;
export type { ArrowUpLeftDownRightRegularProps };
