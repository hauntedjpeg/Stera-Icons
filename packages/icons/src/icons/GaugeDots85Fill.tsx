import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots85FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots85FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M8.55 15.45c-.44-.44-1.15-.44-1.59 0s-.44 1.15 0 1.59 1.15.44 1.6 0c.43-.44.43-1.15 0-1.6m8.49 0c-.44-.44-1.15-.44-1.6 0-.43.44-.43 1.15 0 1.59.45.44 1.16.44 1.6 0s.44-1.15 0-1.6M12 10.13c-1.04 0-1.87.83-1.87 1.87s.83 1.88 1.87 1.88h.07c.51-.05 2.07-.3 3.43-.54l1.85-.33.59-.1.16-.04h.05v-.01c.42-.08.73-.44.73-.86 0-.37-.24-.7-.57-.82l-.15-.04-.06-.01-.16-.03-.6-.1c-.48-.1-1.15-.21-1.84-.34-1.36-.23-2.92-.5-3.43-.53zm-6 .74c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m2.55-3.9c-.44-.45-1.15-.45-1.59 0-.44.43-.44 1.14 0 1.58s1.15.44 1.6 0c.43-.44.43-1.15 0-1.59m8.49 0c-.44-.45-1.15-.45-1.6 0-.43.43-.43 1.14 0 1.58.45.44 1.16.44 1.6 0s.44-1.15 0-1.59M12 4.86c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots85Fill.displayName = 'GaugeDots85Fill';

// Triple export pattern
export { GaugeDots85Fill, GaugeDots85Fill as GaugeDots85FillIcon, GaugeDots85Fill as SiGaugeDots85Fill };
export default GaugeDots85Fill;
export type { GaugeDots85FillProps };
