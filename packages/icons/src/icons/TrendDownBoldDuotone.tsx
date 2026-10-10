import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.79 5.05c.39-.4 1.02-.4 1.41-.01l6.54 6.45 2.46-2.43c.4-.39 1.02-.39 1.4 0l6.9 6.8v1.39h-1.44l-6.16-6.08-2.46 2.43c-.36.37-.94.39-1.33.07l-.08-.07L1.8 6.46c-.4-.39-.4-1.02-.01-1.41" opacity={.4} />
        <path d="M21.5 12.25c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h4v-4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

TrendDownBoldDuotone.displayName = 'TrendDownBoldDuotone';

// Triple export pattern
export { TrendDownBoldDuotone, TrendDownBoldDuotone as TrendDownBoldDuotoneIcon, TrendDownBoldDuotone as SiTrendDownBoldDuotone };
export default TrendDownBoldDuotone;
export type { TrendDownBoldDuotoneProps };
