import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessMediumBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessMediumBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessMediumBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.5c.55 0 1 .45 1 1V21c0 .55-.45 1-1 1s-1-.45-1-1v-1.5c0-.55.45-1 1-1M6 16.6c.38-.4 1.01-.4 1.4 0 .4.38.4 1.02 0 1.4l-1.06 1.07c-.39.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42zM16.6 16.6c.4-.4 1.03-.4 1.42 0l1.06 1.05c.39.4.39 1.03 0 1.42-.4.39-1.02.39-1.41 0L16.6 18c-.39-.4-.39-1.03 0-1.42M4.5 11c.56 0 1 .44 1 1 0 .55-.44 1-1 1H3c-.55 0-1-.45-1-1 0-.56.45-1 1-1zM21 11c.56 0 1 .44 1 1 0 .55-.44 1-1 1h-1.5c-.55 0-1-.45-1-1 0-.56.45-1 1-1zM17.66 4.93c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41L18.01 7.4c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41zM4.94 4.92c.39-.39 1.02-.39 1.41 0L7.41 6c.4.39.4 1.02 0 1.4-.39.4-1.02.4-1.41 0L4.94 6.35c-.4-.4-.4-1.02 0-1.42M12 2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessMediumBoldDuotone.displayName = 'BrightnessMediumBoldDuotone';

// Triple export pattern
export { BrightnessMediumBoldDuotone, BrightnessMediumBoldDuotone as BrightnessMediumBoldDuotoneIcon, BrightnessMediumBoldDuotone as SiBrightnessMediumBoldDuotone };
export default BrightnessMediumBoldDuotone;
export type { BrightnessMediumBoldDuotoneProps };
