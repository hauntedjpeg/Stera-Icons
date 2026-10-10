import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleFillProps = Omit<IconBaseProps, 'children'>;

const WineBottleFill = memo(
  forwardRef<SVGSVGElement, WineBottleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 2c.55 0 1 .45 1 1v4.65c1.45.43 2.5 1.76 2.5 3.35v9c0 1.1-.9 2-2 2h-4.5c-1.1 0-2-.9-2-2v-9c0-1.59 1.05-2.92 2.5-3.35V3c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

WineBottleFill.displayName = 'WineBottleFill';

// Triple export pattern
export { WineBottleFill, WineBottleFill as WineBottleFillIcon, WineBottleFill as SiWineBottleFill };
export default WineBottleFill;
export type { WineBottleFillProps };
