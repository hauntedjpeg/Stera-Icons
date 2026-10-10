import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots100FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M8.55 15.45c-.44-.44-1.15-.44-1.59 0s-.44 1.15 0 1.59 1.15.44 1.6 0c.43-.44.43-1.15 0-1.6m4.78-4.78c-.74-.73-1.92-.73-2.66 0-.73.74-.73 1.92 0 2.66l.05.04c.4.34 1.68 1.25 2.8 2.05l1.55 1.07.49.35.14.09.04.03c.35.24.82.2 1.12-.1.26-.26.33-.65.18-.98l-.08-.13-.03-.05-.1-.14-.34-.5-1.07-1.53c-.8-1.13-1.71-2.41-2.05-2.8zm-7.33.2c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m12 0c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m-9.45-3.9c-.44-.45-1.15-.45-1.59 0-.44.43-.44 1.14 0 1.58s1.15.44 1.6 0c.43-.44.43-1.15 0-1.59m8.49 0c-.44-.45-1.15-.45-1.6 0-.43.43-.43 1.14 0 1.58.45.44 1.16.44 1.6 0s.44-1.15 0-1.59M12 4.86c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100Fill.displayName = 'GaugeDots100Fill';

// Triple export pattern
export { GaugeDots100Fill, GaugeDots100Fill as GaugeDots100FillIcon, GaugeDots100Fill as SiGaugeDots100Fill };
export default GaugeDots100Fill;
export type { GaugeDots100FillProps };
