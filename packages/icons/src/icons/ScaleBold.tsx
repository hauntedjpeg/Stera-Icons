import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScaleBoldProps = Omit<IconBaseProps, 'children'>;

const ScaleBold = memo(
  forwardRef<SVGSVGElement, ScaleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c.55 0 1 .45 1 1v1.35q.34.06.67.18l3.64 1.3q.48.17 1 .17H21c.55 0 1 .45 1 1s-.45 1-1 1h-.55l2.48 6.54c.16.41.02.89-.34 1.15C21.47 16.53 20.26 17 19 17s-2.47-.47-3.6-1.3c-.36-.27-.5-.75-.33-1.16l2.5-6.6q-.48-.07-.93-.23L13 6.41V20h2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h2V6.42l-3.64 1.3q-.46.15-.93.22l2.5 6.6c.16.41.02.89-.34 1.15C7.47 16.53 6.26 17 5 17s-2.47-.47-3.6-1.3c-.36-.27-.5-.75-.33-1.16L3.55 8H3c-.55 0-1-.45-1-1s.45-1 1-1h2.68q.53 0 1.01-.17l3.64-1.3q.33-.11.67-.18V3c0-.55.45-1 1-1M3.22 14.5Q4.16 15 5 15q.84 0 1.78-.5L5 9.8zm14 0q.94.51 1.78.5.84 0 1.78-.5L19 9.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScaleBold.displayName = 'ScaleBold';

// Triple export pattern
export { ScaleBold, ScaleBold as ScaleBoldIcon, ScaleBold as SiScaleBold };
export default ScaleBold;
export type { ScaleBoldProps };
