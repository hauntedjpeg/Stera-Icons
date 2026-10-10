import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageSquareDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MessageSquareDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, MessageSquareDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 10.1c0-1.26 0-1.89.25-2.37q.33-.65.98-.98C7.2 6.5 7.84 6.5 9.1 6.5h5.8c1.26 0 1.89 0 2.37.25q.65.33.98.98c.25.48.25 1.11.25 2.37v.8c0 1.26 0 1.89-.25 2.37q-.33.65-.98.98c-.48.25-1.11.25-2.37.25H9.1c-1.26 0-1.89 0-2.37-.25q-.65-.33-.98-.98c-.25-.48-.25-1.11-.25-2.37z" opacity={.4} />
        <path d="M14.51 16.27c.4-.27.95-.16 1.22.24s.16.95-.24 1.22l-5.23 3.48c-.91.6-2.13-.05-2.13-1.14V17c0-.48.39-.87.87-.87s.88.39.88.87v2.36zM3 11.38c.48 0 .88.39.88.87v1.28c0 1.26.95 2.35 2.26 2.56.48.07.8.52.72 1-.07.48-.52.8-1 .73-2.1-.34-3.74-2.1-3.74-4.29v-1.28c0-.48.4-.87.88-.87M21 11.38c.48 0 .88.39.88.87v1.28c0 2.18-1.64 3.95-3.74 4.29-.48.07-.93-.25-1-.73-.08-.48.24-.93.72-1 1.31-.21 2.27-1.3 2.27-2.56v-1.28c0-.48.39-.87.87-.87M17 3.13c2.61 0 4.88 1.94 4.88 4.5V9c0 .48-.4.88-.88.88s-.87-.4-.87-.88V7.64c0-1.45-1.32-2.76-3.13-2.76-.48 0-.87-.4-.87-.88s.39-.87.87-.87M6.6 3.13c.48 0 .87.39.87.87s-.39.88-.87.88c-1.54 0-2.72 1.19-2.72 2.59v1.3c0 .48-.4.87-.88.87s-.87-.39-.87-.87v-1.3c0-2.43 2.03-4.34 4.47-4.34M14 3.13c.48 0 .88.39.88.87s-.4.88-.88.88h-4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

MessageSquareDashedFillDuotone.displayName = 'MessageSquareDashedFillDuotone';

// Triple export pattern
export { MessageSquareDashedFillDuotone, MessageSquareDashedFillDuotone as MessageSquareDashedFillDuotoneIcon, MessageSquareDashedFillDuotone as SiMessageSquareDashedFillDuotone };
export default MessageSquareDashedFillDuotone;
export type { MessageSquareDashedFillDuotoneProps };
