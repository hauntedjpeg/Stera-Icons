import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots33FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M8.55 15.45c-.44-.44-1.15-.44-1.59 0s-.44 1.15 0 1.59 1.15.44 1.6 0c.43-.44.43-1.15 0-1.6m8.49 0c-.44-.44-1.15-.44-1.6 0-.43.44-.43 1.15 0 1.59.45.44 1.16.44 1.6 0s.44-1.15 0-1.6m-8.86-8.3c-.3-.22-.7-.18-.95.08-.26.25-.3.66-.09.95l.03.05.1.14.34.49 1.08 1.54c.8 1.13 1.7 2.41 2.03 2.8l.04.04c.69.68 1.8.68 2.48 0s.68-1.8 0-2.48l-.04-.04c-.39-.33-1.67-1.24-2.8-2.03L8.86 7.6l-.5-.34-.13-.1zM6 10.86c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m12 0c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m-.96-3.9c-.44-.45-1.15-.45-1.6 0-.43.43-.43 1.14 0 1.58.45.44 1.16.44 1.6 0s.44-1.15 0-1.59M12 4.86c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33Fill.displayName = 'GaugeDots33Fill';

// Triple export pattern
export { GaugeDots33Fill, GaugeDots33Fill as GaugeDots33FillIcon, GaugeDots33Fill as SiGaugeDots33Fill };
export default GaugeDots33Fill;
export type { GaugeDots33FillProps };
