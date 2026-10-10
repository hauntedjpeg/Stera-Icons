import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageMessagesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageMessagesRegularDuotone = memo(
  forwardRef<SVGSVGElement, MessageMessagesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 7.75q.69 0 1.15.02t.9.19c.68.28 1.21.81 1.5 1.49q.16.43.18.9.03.47.02 1.15V21c0 .27-.15.52-.39.66-.24.13-.53.12-.76-.02l-3.81-2.39H10.5q-.62.01-1.04-.05c-1.09-.22-1.94-1.07-2.16-2.16q-.06-.41-.05-1.04c0-.41.34-.75.75-.75s.75.34.75.75c0 .5 0 .64.02.74.1.5.49.89.99.99.1.02.24.02.74.02H18q.22 0 .4.11l2.85 1.79V11.5q0-.7-.02-1.04t-.07-.44q-.21-.47-.68-.68-.1-.05-.44-.07T19 9.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75" opacity={.4} />
        <path fillRule="evenodd" d="M12.8 2.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v3.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H6.21L2.4 16.14c-.23.14-.52.15-.76.02-.24-.14-.39-.39-.39-.66V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zm-7.6 1.5q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v7.95l2.85-1.79q.18-.1.4-.11h6.8c.57 0 .96 0 1.25-.02s.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25V6.2q0-.83-.02-1.25c-.03-.29-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

MessageMessagesRegularDuotone.displayName = 'MessageMessagesRegularDuotone';

// Triple export pattern
export { MessageMessagesRegularDuotone, MessageMessagesRegularDuotone as MessageMessagesRegularDuotoneIcon, MessageMessagesRegularDuotone as SiMessageMessagesRegularDuotone };
export default MessageMessagesRegularDuotone;
export type { MessageMessagesRegularDuotoneProps };
