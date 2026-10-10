import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwatchBookFillDuotone = memo(
  forwardRef<SVGSVGElement, SwatchBookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.04 5.07c1.12-1.13 2.94-1.13 4.06 0l2.83 2.83c1.13 1.12 1.13 2.94 0 4.06l-.16.16H19c1.59 0 2.87 1.3 2.88 2.88v4c0 1.59-1.3 2.87-2.88 2.87H6.85 7c2.7 0 4.88-2.18 4.88-4.87v-.46l5.82-5.82c.43-.44.43-1.15 0-1.59L14.87 6.3c-.44-.43-1.16-.43-1.6 0l-1.4 1.4V5.23zm-1.27 15.05H19c.62 0 1.13-.5 1.13-1.12v-4c0-.62-.5-1.13-1.13-1.13h-1.98z" clipRule="evenodd" opacity={0.4} />
        <path d="m5.05 21.47-.03-.01-.03-.02zM3.87 20.74l-.02-.02-.08-.07zM3.7 20.6v-.01l-.15-.14zM3.3 20.18l-.05-.07h-.01zM2.2 17.86v-.03l-.01-.04z" opacity={0.4} />
        <path fillRule="evenodd" d="M9 2.13c1.59 0 2.88 1.28 2.88 2.87v12c0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88V5C2.13 3.41 3.4 2.13 5 2.13zM7 15.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookFillDuotone.displayName = 'SwatchBookFillDuotone';

// Triple export pattern
export { SwatchBookFillDuotone, SwatchBookFillDuotone as SwatchBookFillDuotoneIcon, SwatchBookFillDuotone as SiSwatchBookFillDuotone };
export default SwatchBookFillDuotone;
export type { SwatchBookFillDuotoneProps };
