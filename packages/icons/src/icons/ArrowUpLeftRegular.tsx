import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H7.81l10.72 10.72c.3.3.3.77 0 1.06s-.77.3-1.06 0L6.75 7.81V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpLeftRegular.displayName = 'ArrowUpLeftRegular';

// Triple export pattern
export { ArrowUpLeftRegular, ArrowUpLeftRegular as ArrowUpLeftRegularIcon, ArrowUpLeftRegular as SiArrowUpLeftRegular };
export default ArrowUpLeftRegular;
export type { ArrowUpLeftRegularProps };
