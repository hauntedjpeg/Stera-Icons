import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownBoldProps = Omit<IconBaseProps, 'children'>;

const TrendDownBold = memo(
  forwardRef<SVGSVGElement, TrendDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.79 5.05c.39-.4 1.02-.4 1.41-.01l6.54 6.45 2.46-2.43c.4-.39 1.02-.39 1.4 0l6.9 6.8v-2.61c0-.55.45-1 1-1s1 .45 1 1v5l-.03.24-.01.05-.02.04-.02.05v.03l-.04.06-.02.03q0 .03-.03.05l-.02.03-.1.12-.13.12-.1.06-.13.06-.15.04-.2.02h-5c-.55 0-1-.45-1-1s.45-1 1-1h2.56l-6.16-6.08-2.46 2.43c-.36.37-.94.39-1.33.07l-.07-.07L1.8 6.46c-.4-.39-.4-1.02-.01-1.41" />
    </IconBase>
  ))
);

TrendDownBold.displayName = 'TrendDownBold';

// Triple export pattern
export { TrendDownBold, TrendDownBold as TrendDownBoldIcon, TrendDownBold as SiTrendDownBold };
export default TrendDownBold;
export type { TrendDownBoldProps };
