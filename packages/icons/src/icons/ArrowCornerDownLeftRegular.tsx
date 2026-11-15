import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5.25c.41 0 .75.34.75.75v2.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H5.81l3.72 3.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5-5-.1-.11q-.12-.2-.12-.42 0-.31.22-.53l5-5c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72h9.39c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.35.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownLeftRegular.displayName = 'ArrowCornerDownLeftRegular';

// Triple export pattern
export { ArrowCornerDownLeftRegular, ArrowCornerDownLeftRegular as ArrowCornerDownLeftRegularIcon, ArrowCornerDownLeftRegular as SiArrowCornerDownLeftRegular };
export default ArrowCornerDownLeftRegular;
export type { ArrowCornerDownLeftRegularProps };
