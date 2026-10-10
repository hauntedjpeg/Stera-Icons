import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareDashedRegularProps = Omit<IconBaseProps, 'children'>;

const MessageSquareDashedRegular = memo(
  forwardRef<SVGSVGElement, MessageSquareDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.58 16.38c.35-.23.81-.14 1.04.2s.14.81-.2 1.04l-5.23 3.49c-.83.55-1.94-.05-1.94-1.04V17c0-.41.34-.75.75-.75s.75.34.75.75v2.6zM3 11.5c.41 0 .75.34.75.75v1.28c0 1.33 1 2.46 2.37 2.68.4.07.69.45.62.86s-.45.69-.86.62c-2.04-.33-3.63-2.04-3.63-4.16v-1.28c0-.41.34-.75.75-.75M21 11.5c.41 0 .75.34.75.75v1.28c0 2.12-1.6 3.83-3.63 4.16-.41.07-.8-.21-.86-.62-.07-.4.21-.8.62-.86 1.37-.22 2.37-1.35 2.37-2.68v-1.28c0-.41.34-.75.75-.75M17 3.25c2.55 0 4.75 1.9 4.75 4.39V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.64c0-1.53-1.39-2.89-3.25-2.89-.41 0-.75-.34-.75-.75s.34-.75.75-.75M6.6 3.25c.41 0 .75.34.75.75s-.34.75-.75.75c-1.6 0-2.85 1.24-2.85 2.72v1.3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.3c0-2.36 1.97-4.22 4.35-4.22M14 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MessageSquareDashedRegular.displayName = 'MessageSquareDashedRegular';

// Triple export pattern
export { MessageSquareDashedRegular, MessageSquareDashedRegular as MessageSquareDashedRegularIcon, MessageSquareDashedRegular as SiMessageSquareDashedRegular };
export default MessageSquareDashedRegular;
export type { MessageSquareDashedRegularProps };
