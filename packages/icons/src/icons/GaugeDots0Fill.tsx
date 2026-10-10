import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots0FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m5.04 13.45c-.44-.44-1.15-.44-1.6 0-.43.44-.43 1.15 0 1.59.45.44 1.16.44 1.6 0s.44-1.15 0-1.6m-3.71-4.78c-.74-.73-1.92-.73-2.66 0l-.04.05c-.34.4-1.25 1.68-2.05 2.8l-1.07 1.55-.34.49-.1.14-.03.04c-.24.35-.2.82.1 1.12.26.26.65.33.98.18l.13-.08.05-.03.14-.1.5-.34 1.53-1.07c1.13-.8 2.41-1.71 2.8-2.05l.06-.04c.73-.74.73-1.92 0-2.66m-7.33.2c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m12 0c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m-9.45-3.9c-.44-.45-1.15-.45-1.59 0-.44.43-.44 1.14 0 1.58s1.15.44 1.6 0c.43-.44.43-1.15 0-1.59m8.49 0c-.44-.45-1.15-.45-1.6 0-.43.43-.43 1.14 0 1.58.45.44 1.16.44 1.6 0s.44-1.15 0-1.59M12 4.86c-.62 0-1.12.5-1.12 1.13s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0Fill.displayName = 'GaugeDots0Fill';

// Triple export pattern
export { GaugeDots0Fill, GaugeDots0Fill as GaugeDots0FillIcon, GaugeDots0Fill as SiGaugeDots0Fill };
export default GaugeDots0Fill;
export type { GaugeDots0FillProps };
