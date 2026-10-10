import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownFillProps = Omit<IconBaseProps, 'children'>;

const TrendDownFill = memo(
  forwardRef<SVGSVGElement, TrendDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.88 5.14c.34-.35.9-.35 1.23-.01l6.63 6.53 2.55-2.51c.34-.34.89-.34 1.23 0l5.46 5.38 1.9-1.9c.25-.25.63-.32.96-.19.32.14.54.46.54.81v5l-.03.21-.01.04q-.06.18-.19.33l-.03.03-.06.07q-.2.16-.47.19H16.5c-.35 0-.67-.2-.8-.53-.14-.33-.07-.7.18-.96l1.86-1.86L12.9 11l-2.55 2.52c-.32.31-.82.33-1.16.06l-.07-.06L1.9 6.37c-.35-.34-.35-.89-.01-1.23" />
    </IconBase>
  ))
);

TrendDownFill.displayName = 'TrendDownFill';

// Triple export pattern
export { TrendDownFill, TrendDownFill as TrendDownFillIcon, TrendDownFill as SiTrendDownFill };
export default TrendDownFill;
export type { TrendDownFillProps };
