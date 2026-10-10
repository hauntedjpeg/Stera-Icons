import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RocketBoldDuotone = memo(
  forwardRef<SVGSVGElement, RocketBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.08 9.5q-.1 1.25.05 2.37l.06.36-1.13 1.12.7 4.5 1.9-1.19.23.44.2.32.05.1.02.02v.01h.01l.07.1.02.02.06.06.02.02.1.08.09.05.02.01.07.04.04.01.07.02.05.01.08.02h.04L9 18h.29l-3.76 2.35c-.28.18-.64.2-.95.06s-.52-.43-.57-.76l-1-6.5c-.05-.31.06-.63.28-.86zM20.7 12.3c.23.22.34.54.29.85l-1 6.5c-.05.33-.27.62-.57.76s-.67.12-.95-.06L14.71 18h.41l.02-.01.08-.02h.04l.1-.04q.18-.06.3-.19h.01l.16-.18v-.01h.01l.02-.03.06-.1.19-.32.23-.44 1.9 1.19.7-4.5-1.13-1.12.06-.36q.15-1.12.05-2.37zM12 7c.97 0 1.75.78 1.75 1.75S12.97 10.5 12 10.5s-1.75-.78-1.75-1.75S11.03 7 12 7" opacity={0.4} />
        <path d="M13.5 19c.55 0 1 .45 1 1 0 .37-.13.75-.3 1.07-.47.96-1.34 1.55-2.2 2.13-.86-.58-1.73-1.17-2.2-2.13-.17-.32-.3-.7-.3-1.07 0-.55.45-1 1-1z" />
        <path fillRule="evenodd" d="M11.58 1.1c.3-.15.68-.13.97.07 2.4 1.6 3.85 3.43 4.64 5.32.78 1.88.88 3.75.68 5.38s-.71 3.04-1.16 4.04q-.35.75-.6 1.19l-.2.32-.05.1-.02.02v.01h-.01q-.07.1-.16.19-.15.12-.3.19h-.01l-.1.03-.04.01-.08.02h-.02L15 18H8.88l-.02-.01-.08-.02h-.05l-.07-.03-.04-.01-.07-.04h-.02l-.09-.06-.1-.08-.02-.02-.06-.06-.02-.03-.07-.08v-.01h-.01l-.02-.03-.06-.1-.19-.32q-.25-.43-.6-1.19c-.45-1-.95-2.4-1.16-4.04-.2-1.63-.1-3.5.68-5.38.79-1.89 2.24-3.72 4.64-5.32zM12 3.22c-1.76 1.3-2.78 2.7-3.34 4.04-.62 1.5-.71 3-.54 4.37s.6 2.58 1 3.46q.26.56.45.91h4.86q.2-.35.45-.91c.4-.88.83-2.1 1-3.46.17-1.37.08-2.88-.54-4.37-.56-1.35-1.58-2.74-3.34-4.04" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketBoldDuotone.displayName = 'RocketBoldDuotone';

// Triple export pattern
export { RocketBoldDuotone, RocketBoldDuotone as RocketBoldDuotoneIcon, RocketBoldDuotone as SiRocketBoldDuotone };
export default RocketBoldDuotone;
export type { RocketBoldDuotoneProps };
