import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneOffFillDuotone = memo(
  forwardRef<SVGSVGElement, PhoneOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 8.88q2.66-.04 5.35.48 2.46.5 3.61 1.6c.75.69 1.16 1.61 1.16 2.85l-.01.79q-.02.34-.08.51l-3.06-.8c-.6-.16-.95-.28-1.16-.38l-.14-.08v-.07c0-.1.04-.5.04-.8 0-.77-.42-1.32-.95-1.66-.48-.31-1.09-.47-1.64-.55-1.1-.17-2.41-.1-3.12-.1-.7 0-2.02-.07-3.12.1-.55.08-1.16.24-1.64.55-.53.34-.95.89-.95 1.66 0 .3.04.7.04.8v.07l-.14.08q-.3.15-1.16.37l-3.06.81q-.05-.16-.08-.51l-.01-.79c0-1.24.41-2.16 1.16-2.86q1.15-1.1 3.6-1.6 2.7-.52 5.35-.47z" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.13q2.82-.04 5.69.51c1.83.36 3.37 1 4.47 2.03q1.7 1.6 1.72 4.14c0 .51 0 1.27-.2 1.86-.1.32-.3.7-.68.95q-.54.33-1.13.24l-.17-.03h-.05L18.53 16q-.92-.23-1.48-.5c-.37-.17-.71-.4-.93-.79-.21-.38-.21-.76-.2-1 .01-.33.04-.43.04-.73 0-.06 0-.1-.14-.19q-.27-.18-.96-.29c-.93-.14-2.03-.09-2.86-.09s-1.93-.05-2.86.1q-.7.1-.96.28c-.13.09-.14.13-.14.19 0 .3.03.4.04.72.01.25.01.63-.2 1.01s-.56.62-.93.8q-.55.25-1.48.49l-3.12.82h-.02l-.03.01c-.44.09-.9.05-1.3-.21-.39-.26-.58-.63-.69-.95-.2-.6-.18-1.35-.18-1.86q.01-2.54 1.7-4.14C2.94 8.65 4.49 8 6.32 7.64q2.87-.56 5.68-.51zm0 1.75q-2.66-.04-5.35.48-2.46.5-3.61 1.6c-.75.69-1.16 1.6-1.16 2.85l.01.79q.03.35.08.51l3.06-.8c.6-.16.95-.28 1.16-.38l.14-.08v-.07c0-.1-.04-.5-.04-.8 0-.77.42-1.32.95-1.66.48-.31 1.09-.47 1.64-.55 1.1-.17 2.41-.1 3.12-.1.7 0 2.02-.07 3.12.1.55.08 1.16.24 1.64.55.53.34.95.89.95 1.66 0 .3-.04.7-.04.8v.07l.14.08c.21.1.57.22 1.16.37l3.06.81q.05-.16.08-.51l.02-.79c0-1.24-.42-2.16-1.17-2.86q-1.15-1.1-3.6-1.6-2.69-.52-5.35-.47z" clipRule="evenodd" />
    </IconBase>
  ))
);

PhoneOffFillDuotone.displayName = 'PhoneOffFillDuotone';

// Triple export pattern
export { PhoneOffFillDuotone, PhoneOffFillDuotone as PhoneOffFillDuotoneIcon, PhoneOffFillDuotone as SiPhoneOffFillDuotone };
export default PhoneOffFillDuotone;
export type { PhoneOffFillDuotoneProps };
