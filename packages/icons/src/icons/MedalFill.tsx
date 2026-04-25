import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalFillProps = Omit<IconBaseProps, 'children'>;

const MedalFill = memo(
  forwardRef<SVGSVGElement, MedalFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.8 1.13q.81 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.03 1.38v1.82c0 .66.02 1.2-.15 1.68q-.22.6-.67 1.08c-.36.36-.84.6-1.43.89l-3.16 1.58a5.87 5.87 0 1 1-6.92 0l-3.16-1.58c-.59-.3-1.07-.53-1.43-.9q-.46-.46-.67-1.07c-.17-.49-.16-1.02-.16-1.68V5.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.04 1.38-.03zm-7.93 9.33 1.7.84a6 6 0 0 1 2.87 0l1.68-.84V2.87H8.87zM7.12 2.87c-.53 0-.89 0-1.16.03-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47L4.88 5.2v1.82c0 .78.02.97.07 1.11q.08.24.26.42c.1.11.26.2.96.55l.96.48zm9.75 6.71.97-.48c.7-.35.86-.44.96-.55q.17-.18.26-.42c.05-.14.06-.33.06-1.1V5.2c0-.57 0-.95-.02-1.24-.02-.28-.06-.4-.1-.47q-.16-.32-.49-.5a1 1 0 0 0-.47-.1 16 16 0 0 0-1.17-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalFill.displayName = 'MedalFill';

// Triple export pattern (lucide-react style)
export { MedalFill, MedalFill as MedalFillIcon, MedalFill as SiMedalFill };
export default MedalFill;
export type { MedalFillProps };
