import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots15FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M8.55 15.45c-.44-.44-1.15-.44-1.59 0s-.44 1.15 0 1.59 1.15.44 1.6 0c.43-.44.43-1.15 0-1.6m8.49 0c-.44-.44-1.15-.44-1.6 0-.43.44-.43 1.15 0 1.59.45.44 1.16.44 1.6 0s.44-1.15 0-1.6m-5.1-5.32c-.52.04-2.08.3-3.44.53L6.65 11l-.59.1-.16.04h-.05v.01c-.42.08-.72.44-.72.86 0 .37.23.7.56.82l.15.04.06.01.16.03.6.1c.48.1 1.15.21 1.84.34 1.36.23 2.92.5 3.43.53H12c1.04 0 1.88-.83 1.88-1.87s-.84-1.87-1.88-1.87zm6.06.74c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m-9.45-3.9c-.44-.45-1.15-.45-1.59 0-.44.43-.44 1.14 0 1.58s1.15.44 1.6 0c.43-.44.43-1.15 0-1.59m8.49 0c-.44-.45-1.15-.45-1.6 0-.43.43-.43 1.14 0 1.58.45.44 1.16.44 1.6 0s.44-1.15 0-1.59M12 4.86c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots15Fill.displayName = 'GaugeDots15Fill';

// Triple export pattern
export { GaugeDots15Fill, GaugeDots15Fill as GaugeDots15FillIcon, GaugeDots15Fill as SiGaugeDots15Fill };
export default GaugeDots15Fill;
export type { GaugeDots15FillProps };
