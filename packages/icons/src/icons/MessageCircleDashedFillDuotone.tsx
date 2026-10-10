import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageCircleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageCircleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageCircleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 5.63c3.35 0 6.38 2.25 6.38 5.37s-3.03 5.38-6.38 5.38S5.63 14.12 5.63 11 8.65 5.63 12 5.63" opacity={.4} />
        <path d="M4.93 14.94c.48.07.8.52.74 1l-.54 3.46c-.01.1.08.17.17.14l4.05-1.62c.45-.18.96.04 1.14.49.18.44-.04.95-.49 1.13l-4.05 1.62c-1.35.54-2.77-.59-2.55-2.02l.54-3.47c.07-.48.52-.8 1-.73M14.04 17.9c.47-.1.94.19 1.05.66.1.47-.2.94-.66 1.04q-.84.2-1.71.25c-.48.03-.9-.33-.93-.81s.34-.9.82-.93q.74-.05 1.43-.21M18.8 14.9c.28-.38.83-.46 1.22-.17s.46.84.17 1.23q-1.04 1.39-2.57 2.34c-.4.25-.95.13-1.2-.28-.26-.41-.13-.95.28-1.2q1.25-.79 2.1-1.91M2.97 10.4c.48-.02.89.36.9.84q.04.81.3 1.67c.15.46-.1.96-.57 1.1s-.95-.1-1.1-.57q-.33-1.08-.37-2.13c-.02-.48.36-.9.84-.9M20.6 8.5c.48-.12.95.17 1.06.64q.21.9.22 1.86 0 .9-.2 1.77c-.1.47-.57.76-1.05.66-.47-.1-.76-.58-.66-1.05q.16-.66.16-1.38 0-.75-.17-1.45c-.12-.47.18-.95.65-1.06M6.05 4.03c.4-.28.94-.18 1.21.22.28.4.18.94-.21 1.21-.98.69-1.8 1.56-2.36 2.54-.23.42-.77.56-1.19.33s-.57-.78-.33-1.2c.7-1.23 1.7-2.28 2.88-3.1M16.04 3.8c.24-.42.77-.57 1.2-.33q1.64.93 2.79 2.36c.3.37.24.92-.14 1.23s-.93.24-1.23-.14Q17.75 5.77 16.37 5c-.42-.24-.57-.78-.33-1.2M12 2.13q.93 0 1.8.14c.48.08.8.53.73 1.01s-.53.8-1.01.72q-.75-.12-1.52-.12-.88 0-1.74.18c-.47.1-.94-.2-1.04-.67s.2-.94.67-1.04q1.05-.22 2.11-.23" />
    </IconBase>
  ))
);

MessageCircleDashedFillDuotone.displayName = 'MessageCircleDashedFillDuotone';

// Triple export pattern
export { MessageCircleDashedFillDuotone, MessageCircleDashedFillDuotone as MessageCircleDashedFillDuotoneIcon, MessageCircleDashedFillDuotone as SiMessageCircleDashedFillDuotone };
export default MessageCircleDashedFillDuotone;
export type { MessageCircleDashedFillDuotoneProps };
