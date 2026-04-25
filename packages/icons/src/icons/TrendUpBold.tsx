import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpBoldProps = Omit<IconBaseProps, 'children'>;

const TrendUpBold = memo(
  forwardRef<SVGSVGElement, TrendUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.79 18.95a1 1 0 0 0 1.41.01l6.54-6.45 2.46 2.43a1 1 0 0 0 1.4 0l6.9-6.8v2.61a1 1 0 0 0 2 0v-5l-.03-.24-.01-.05-.02-.04-.1-.22-.03-.03a1 1 0 0 0-.23-.24 1 1 0 0 0-.58-.18h-5a1 1 0 0 0 0 2h2.56l-6.16 6.08-2.46-2.43a1 1 0 0 0-1.33-.07l-.08.07-7.23 7.14a1 1 0 0 0-.01 1.41" />
    </IconBase>
  ))
);

TrendUpBold.displayName = 'TrendUpBold';

// Triple export pattern (lucide-react style)
export { TrendUpBold, TrendUpBold as TrendUpBoldIcon, TrendUpBold as SiTrendUpBold };
export default TrendUpBold;
export type { TrendUpBoldProps };
