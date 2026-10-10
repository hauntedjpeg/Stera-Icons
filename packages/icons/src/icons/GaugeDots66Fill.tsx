import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66FillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66Fill = memo(
  forwardRef<SVGSVGElement, GaugeDots66FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M8.55 15.45c-.44-.44-1.15-.44-1.59 0s-.44 1.15 0 1.59 1.15.44 1.6 0c.43-.44.43-1.15 0-1.6m8.49 0c-.44-.44-1.15-.44-1.6 0-.43.44-.43 1.15 0 1.59.45.44 1.16.44 1.6 0s.44-1.15 0-1.6m-.18-8.31c-.26-.26-.65-.33-.98-.18l-.13.08-.05.03-.14.1-.5.34-1.53 1.07c-1.13.8-2.41 1.71-2.8 2.05l-.06.04c-.73.74-.73 1.92 0 2.66.74.73 1.92.73 2.66 0l.04-.05c.34-.4 1.25-1.68 2.05-2.8l1.07-1.55.35-.5.09-.13.03-.04c.24-.35.2-.82-.1-1.12M6 10.88c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12m12 0c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12M8.55 6.96c-.44-.44-1.15-.44-1.59 0s-.44 1.15 0 1.6c.44.43 1.15.43 1.6 0 .43-.45.43-1.16 0-1.6M12 4.88c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13 1.13-.5 1.13-1.13-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66Fill.displayName = 'GaugeDots66Fill';

// Triple export pattern
export { GaugeDots66Fill, GaugeDots66Fill as GaugeDots66FillIcon, GaugeDots66Fill as SiGaugeDots66Fill };
export default GaugeDots66Fill;
export type { GaugeDots66FillProps };
