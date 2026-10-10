import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 2.28c5.03.38 9 4.59 9 9.72s-3.97 9.33-9 9.72v-1.5c4.2-.39 7.5-3.92 7.5-8.22s-3.3-7.84-7.5-8.21z" opacity={.4} />
        <path fillRule="evenodd" d="m12 2.25.75.03v19.44l-.75.03c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25m-.77 1.54-.38.04-.33.05-.08.02-.28.06-.1.02-.28.07-.1.03-.26.09q-.07 0-.13.04l-.25.09-.1.04-.27.11q-.03 0-.05.03l-.29.13-.1.05-.22.12-.13.07-.22.13-.09.06-.23.15-.06.04q-.7.5-1.27 1.1l-.1.1q-.23.25-.43.51l-.05.07-.15.2-.08.13-.12.17-.1.14-.1.2-.1.14-.08.17-.1.19-.07.15-.1.21-.06.16-.08.19-.06.18-.07.2-.06.17-.06.2L4 10l-.06.25-.03.13-.04.24-.03.17-.03.22-.02.17-.02.27-.02.56q0 .26.02.5l.02.33.02.14.03.25.03.17.04.24.03.14L4 14l.05.2.05.19.06.17.07.2.06.18.07.19.08.17.08.18.09.19.08.15.1.19.08.14.12.2.1.14.1.17.1.13.14.2.05.07q1.01 1.3 2.45 2.11l.06.04q.48.27.99.47H9q.15.07.32.12l.05.02.33.1.03.01.34.1h.03q.55.13 1.14.18V3.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideRegularDuotone.displayName = 'CircleDivideRegularDuotone';

// Triple export pattern
export { CircleDivideRegularDuotone, CircleDivideRegularDuotone as CircleDivideRegularDuotoneIcon, CircleDivideRegularDuotone as SiCircleDivideRegularDuotone };
export default CircleDivideRegularDuotone;
export type { CircleDivideRegularDuotoneProps };
