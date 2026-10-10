import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleFillDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 7.5c1.93 0 3.5 1.57 3.5 3.5v9c0 1.1-.9 2-2 2h-4.5c-1.1 0-2-.9-2-2v-9c0-1.93 1.57-3.5 3.5-3.5z" opacity={.4} />
        <path d="M12.75 2c.55 0 1 .45 1 1v4.65q-.48-.15-1-.15h-1.5q-.52 0-1 .15V3c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

WineBottleFillDuotone.displayName = 'WineBottleFillDuotone';

// Triple export pattern
export { WineBottleFillDuotone, WineBottleFillDuotone as WineBottleFillDuotoneIcon, WineBottleFillDuotone as SiWineBottleFillDuotone };
export default WineBottleFillDuotone;
export type { WineBottleFillDuotoneProps };
