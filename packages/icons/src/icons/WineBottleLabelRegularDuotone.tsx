import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleLabelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelRegularDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleLabelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 18.25h-7v-1.5h7zM15.5 13.75h-7v-1.5h7z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.5 2.25c1.1 0 2 .9 2 2V8.5q-.01.08.1.23.15.15.42.28C16.18 9.5 17 10.65 17 12v7c0 1.52-1.23 2.75-2.75 2.75h-4.5C8.23 21.75 7 20.52 7 19v-7c0-1.35.82-2.5 1.98-3q.27-.11.41-.27c.1-.1.11-.18.11-.23V4.25c0-1.1.9-2 2-2zm-1 1.5c-.28 0-.5.22-.5.5V8.5c0 1-.82 1.63-1.43 1.89-.63.26-1.07.89-1.07 1.61v7c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-7c0-.72-.44-1.35-1.07-1.61C13.82 10.13 13 9.5 13 8.5V4.25c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineBottleLabelRegularDuotone.displayName = 'WineBottleLabelRegularDuotone';

// Triple export pattern
export { WineBottleLabelRegularDuotone, WineBottleLabelRegularDuotone as WineBottleLabelRegularDuotoneIcon, WineBottleLabelRegularDuotone as SiWineBottleLabelRegularDuotone };
export default WineBottleLabelRegularDuotone;
export type { WineBottleLabelRegularDuotoneProps };
