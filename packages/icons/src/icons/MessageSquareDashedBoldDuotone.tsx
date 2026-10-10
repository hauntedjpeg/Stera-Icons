import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 11.25c.55 0 1 .45 1 1v1.28c0 1.2.9 2.23 2.16 2.43.54.1.92.6.83 1.15s-.6.92-1.15.83C3.7 17.59 2 15.78 2 13.54v-1.29c0-.55.45-1 1-1M21 11.25c.55 0 1 .45 1 1v1.28c0 2.25-1.69 4.06-3.84 4.4-.55.1-1.06-.27-1.15-.82s.29-1.06.83-1.15c1.25-.2 2.16-1.24 2.16-2.43v-1.28c0-.55.45-1 1-1M14 3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M14.45 16.17c.45-.3 1.08-.18 1.38.28.3.45.18 1.08-.28 1.38l-5.22 3.48c-1 .67-2.33-.05-2.33-1.24V17c0-.55.45-1 1-1s1 .45 1 1v2.13zM17 3c2.67 0 5 1.99 5 4.64V9c0 .55-.45 1-1 1s-1-.45-1-1V7.64C20 6.27 18.75 5 17 5c-.55 0-1-.45-1-1s.45-1 1-1M6.6 3c.55 0 1 .45 1 1s-.45 1-1 1C5.13 5 4 6.14 4 7.47v1.3c0 .55-.45 1-1 1s-1-.45-1-1v-1.3C2 4.97 4.1 3 6.6 3" />
    </IconBase>
  ))
);

MessageSquareDashedBoldDuotone.displayName = 'MessageSquareDashedBoldDuotone';

// Triple export pattern
export { MessageSquareDashedBoldDuotone, MessageSquareDashedBoldDuotone as MessageSquareDashedBoldDuotoneIcon, MessageSquareDashedBoldDuotone as SiMessageSquareDashedBoldDuotone };
export default MessageSquareDashedBoldDuotone;
export type { MessageSquareDashedBoldDuotoneProps };
