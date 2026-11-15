import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 5.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72h9.39q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.2c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04H5.81l3.72 3.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5-5q-.21-.22-.22-.53 0-.23.13-.42l.09-.11z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftRegular.displayName = 'ArrowCornerUpLeftRegular';

// Triple export pattern
export { ArrowCornerUpLeftRegular, ArrowCornerUpLeftRegular as ArrowCornerUpLeftRegularIcon, ArrowCornerUpLeftRegular as SiArrowCornerUpLeftRegular };
export default ArrowCornerUpLeftRegular;
export type { ArrowCornerUpLeftRegularProps };
