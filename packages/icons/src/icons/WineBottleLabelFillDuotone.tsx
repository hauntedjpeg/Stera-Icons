import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleLabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelFillDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleLabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.25 20c0 1.1-.9 2-2 2h-4.5c-1.1 0-2-.9-2-2v-1.66q.12.04.25.04h8q.13 0 .25-.04zM16.25 16.66q-.12-.03-.25-.04H8q-.13 0-.25.04v-2.82q.12.04.25.04h8q.13 0 .25-.04zM12.75 2c.55 0 1 .45 1 1v4.65c1.45.43 2.5 1.76 2.5 3.35v1.16q-.12-.03-.25-.04H8q-.13 0-.25.04V11c0-1.59 1.05-2.92 2.5-3.35V3c0-.55.45-1 1-1z" opacity={0.4} />
        <path d="M16 16.63q.13 0 .25.03v1.68q-.12.04-.25.04H8q-.13 0-.25-.04v-1.68q.12-.03.25-.04zM16 12.13q.13 0 .25.03v1.68q-.12.04-.25.04H8q-.13 0-.25-.04v-1.68q.12-.03.25-.04z" />
    </IconBase>
  ))
);

WineBottleLabelFillDuotone.displayName = 'WineBottleLabelFillDuotone';

// Triple export pattern
export { WineBottleLabelFillDuotone, WineBottleLabelFillDuotone as WineBottleLabelFillDuotoneIcon, WineBottleLabelFillDuotone as SiWineBottleLabelFillDuotone };
export default WineBottleLabelFillDuotone;
export type { WineBottleLabelFillDuotoneProps };
