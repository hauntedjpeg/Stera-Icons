import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedalFillDuotone = memo(
  forwardRef<SVGSVGElement, MedalFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12.88a4.12 4.12 0 1 1 .01 8.24 4.12 4.12 0 0 1-.01-8.25M15.13 2.88v7.58l-1.7.84a6 6 0 0 0-2.87 0l-1.69-.84V2.87zM7.13 9.58l-.97-.48c-.7-.35-.86-.44-.96-.55q-.18-.18-.26-.42a4 4 0 0 1-.07-1.1V5.2c0-.57 0-.95.03-1.24.02-.28.06-.4.1-.47q.16-.32.49-.5c.07-.03.19-.07.47-.1l1.17-.02zM16.88 2.88q.78 0 1.16.02c.28.02.4.06.47.1q.32.16.5.49c.03.07.07.19.1.47l.02 1.24v1.82c0 .78-.02.97-.07 1.11q-.08.24-.26.42c-.1.11-.26.2-.96.55l-.96.48z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.8 1.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.03 1.38v1.82c0 .66.02 1.2-.15 1.68q-.22.6-.67 1.08c-.36.36-.84.6-1.43.89l-3.16 1.58a5.87 5.87 0 1 1-6.92 0l-3.16-1.58c-.59-.3-1.07-.53-1.43-.9q-.46-.46-.67-1.07c-.17-.49-.16-1.02-.16-1.68V5.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.04 1.38-.03zM12 12.88a4.12 4.12 0 1 0-.01 8.24 4.12 4.12 0 0 0 .01-8.25m-3.13-2.42 1.7.84a6 6 0 0 1 2.87 0l1.68-.84V2.87H8.87zM7.12 2.87c-.53 0-.89 0-1.16.03-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47L4.88 5.2v1.82c0 .78.02.97.07 1.11q.08.24.26.42c.1.11.26.2.96.55l.96.48zm9.75 6.71.97-.48c.7-.35.86-.44.96-.55q.18-.18.26-.42c.05-.14.06-.33.06-1.1V5.2c0-.57 0-.95-.02-1.24-.02-.28-.06-.4-.1-.47q-.16-.32-.49-.5a1 1 0 0 0-.47-.1 16 16 0 0 0-1.17-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalFillDuotone.displayName = 'MedalFillDuotone';

// Triple export pattern (lucide-react style)
export { MedalFillDuotone, MedalFillDuotone as MedalFillDuotoneIcon, MedalFillDuotone as SiMedalFillDuotone };
export default MedalFillDuotone;
export type { MedalFillDuotoneProps };
