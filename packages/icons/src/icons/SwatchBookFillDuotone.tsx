import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwatchBookFillDuotone = memo(
  forwardRef<SVGSVGElement, SwatchBookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="swatch-book-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.04 5.07a2.9 2.9 0 0 1 4.06 0l2.83 2.83a2.87 2.87 0 0 1 0 4.06l-.16.16H19A2.9 2.9 0 0 1 21.88 15v4A2.87 2.87 0 0 1 19 21.87H6.85 7c2.7 0 4.88-2.18 4.88-4.87v-.46l5.82-5.82c.43-.44.43-1.15 0-1.59L14.87 6.3a1.13 1.13 0 0 0-1.6 0l-1.4 1.4V5.23zm-1.27 15.05H19c.62 0 1.13-.5 1.13-1.12v-4c0-.62-.5-1.13-1.13-1.13h-1.98z" clipRule="evenodd" opacity={0.4} />
        <path d="m5.05 21.47-.03-.01-.03-.02zM3.87 20.74l-.02-.02-.08-.07zM3.7 20.6v-.01l-.15-.14zM3.3 20.18l-.05-.07h-.01zM2.2 17.86v-.03l-.01-.04z" opacity={0.4} />
        <path fillRule="evenodd" d="M9 2.13A2.9 2.9 0 0 1 11.88 5v12a4.87 4.87 0 1 1-9.76 0V5A2.87 2.87 0 0 1 5 2.13zM7 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookFillDuotone.displayName = 'SwatchBookFillDuotone';

// Triple export pattern (lucide-react style)
export { SwatchBookFillDuotone, SwatchBookFillDuotone as SwatchBookFillDuotoneIcon, SwatchBookFillDuotone as SiSwatchBookFillDuotone };
export default SwatchBookFillDuotone;
export type { SwatchBookFillDuotoneProps };
