import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 5.47c.21-.21.54-.28.82-.16.28.11.46.39.46.69v4.25h5.45q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.2c0-.85 0-1.45-.04-1.91s-.1-.71-.2-.91q-.34-.65-.99-.99c-.2-.1-.46-.17-.91-.2-.46-.04-1.06-.04-1.91-.04H9.75V16c0 .3-.18.58-.46.7-.28.1-.6.04-.82-.17l-5-5q-.21-.22-.22-.53 0-.23.13-.42l.09-.11z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFill.displayName = 'ArrowCornerUpLeftFill';

// Triple export pattern
export { ArrowCornerUpLeftFill, ArrowCornerUpLeftFill as ArrowCornerUpLeftFillIcon, ArrowCornerUpLeftFill as SiArrowCornerUpLeftFill };
export default ArrowCornerUpLeftFill;
export type { ArrowCornerUpLeftFillProps };
