import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleAlertFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleAlertFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleAlertFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.35 0 9.88 3.87 9.88 8.87s-4.53 8.88-9.88 8.88q-1.16 0-2.25-.24l-3.8 1.52c-1.35.54-2.77-.59-2.55-2.02l.47-3.02q.01-.04-.05-.15c-1.07-1.41-1.7-3.12-1.7-4.97 0-5 4.53-8.87 9.88-8.87m0 10.62c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m0-6.12c-.48 0-.87.39-.87.87v3c0 .48.39.88.87.88s.88-.4.88-.88v-3c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 12.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 6.63c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

MessageCircleAlertFillDuotone.displayName = 'MessageCircleAlertFillDuotone';

// Triple export pattern
export { MessageCircleAlertFillDuotone, MessageCircleAlertFillDuotone as MessageCircleAlertFillDuotoneIcon, MessageCircleAlertFillDuotone as SiMessageCircleAlertFillDuotone };
export default MessageCircleAlertFillDuotone;
export type { MessageCircleAlertFillDuotoneProps };
