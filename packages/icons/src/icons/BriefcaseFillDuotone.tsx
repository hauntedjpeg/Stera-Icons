import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseFillDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.88 15q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32q-.5.97-1.48 1.48-.6.28-1.32.33-.68.05-1.71.04H7q-1.03.01-1.71-.04c-.47-.04-.91-.12-1.32-.33Q3 19 2.49 18.03q-.29-.6-.33-1.32-.05-.68-.04-1.71v-3.29l.14.05.73.25c.61.2 1.48.48 2.47.75 1.25.35 2.72.7 4.17.92v.82c0 .48.39.88.87.88h3c.48 0 .88-.4.88-.88v-.82c1.44-.22 2.91-.57 4.16-.92.99-.27 1.86-.55 2.47-.75l.73-.25.14-.05z" opacity={0.4} />
        <path d="M17 6.13q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.29.6.33 1.32l.02.56-.45.17h-.02l-.04.02-.19.07-.7.24c-.6.2-1.43.46-2.39.73-1.93.53-4.26 1.04-6.07 1.05-1.8 0-4.14-.52-6.07-1.05-.96-.27-1.8-.53-2.4-.73l-.7-.24-.18-.07-.04-.01h-.02l-.46-.18.03-.56c.04-.47.12-.91.33-1.32Q3 7 3.97 6.49q.6-.29 1.32-.33.68-.05 1.71-.04z" opacity={0.4} />
        <path d="m2.6 10.02.05.02.19.07.7.24c.6.2 1.43.46 2.39.73 1.93.53 4.26 1.04 6.07 1.05 1.8 0 4.14-.52 6.07-1.05.96-.27 1.8-.53 2.4-.73l.7-.24.18-.07.04-.01h.02l.45-.18.02 1.15v.71l-.14.05-.73.25c-.61.2-1.48.48-2.47.75-1.25.35-2.72.7-4.16.92v.82c0 .48-.4.88-.88.88h-3c-.48 0-.87-.4-.87-.88v-.82c-1.45-.21-2.92-.57-4.17-.92-.99-.27-1.86-.55-2.47-.75l-.73-.25-.13-.05V9.85zM13.78 2.88l.79.01q.35.02.73.17.57.26.9.78.23.35.29.7.08.33.14.77l.12.82h-1.77l-.08-.55-.11-.64c-.03-.13-.05-.15-.05-.15q-.06-.08-.16-.13 0-.01-.15-.02l-.65-.01H9.57l-.15.03q-.1.05-.16.13s-.02.02-.05.15l-.1.64-.09.54H7.25l.12-.8q.07-.45.14-.78.06-.35.28-.7.34-.51.9-.78.38-.15.74-.17.35-.03.79-.02z" />
    </IconBase>
  ))
);

BriefcaseFillDuotone.displayName = 'BriefcaseFillDuotone';

// Triple export pattern
export { BriefcaseFillDuotone, BriefcaseFillDuotone as BriefcaseFillDuotoneIcon, BriefcaseFillDuotone as SiBriefcaseFillDuotone };
export default BriefcaseFillDuotone;
export type { BriefcaseFillDuotoneProps };
