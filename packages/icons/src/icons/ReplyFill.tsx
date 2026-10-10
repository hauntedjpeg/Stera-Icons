import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReplyFillProps = Omit<IconBaseProps, 'children'>;

const ReplyFill = memo(
  forwardRef<SVGSVGElement, ReplyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.38 3.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v4.64c3.33.07 5.85.6 7.53 2.15 1.86 1.7 2.47 4.42 2.47 8.21 0 .41-.28.77-.69.86s-.81-.13-.98-.5l-.01-.03-.06-.1-.26-.45c-.25-.37-.64-.88-1.2-1.38-1.12-1-2.91-2.03-5.67-2.03h-1.13V20c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-8-8c-.34-.34-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

ReplyFill.displayName = 'ReplyFill';

// Triple export pattern
export { ReplyFill, ReplyFill as ReplyFillIcon, ReplyFill as SiReplyFill };
export default ReplyFill;
export type { ReplyFillProps };
