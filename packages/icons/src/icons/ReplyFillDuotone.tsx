import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReplyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReplyFillDuotone = memo(
  forwardRef<SVGSVGElement, ReplyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.13 9.5c0 .48.39.87.87.88 3.74 0 5.92.51 7.22 1.7.91.84 1.5 2.12 1.75 4.15l-.13-.13c-1.4-1.25-3.6-2.47-6.84-2.48h-2c-.48 0-.87.4-.87.88v3.39L4.22 12l5.9-5.89z" opacity={.4} />
        <path fillRule="evenodd" d="M10.38 3.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v4.64c3.33.07 5.85.6 7.53 2.15 1.86 1.7 2.47 4.42 2.47 8.21 0 .41-.28.77-.69.86s-.81-.13-.98-.5l-.01-.03-.06-.1-.26-.45c-.25-.37-.64-.88-1.2-1.38-1.12-1-2.91-2.03-5.67-2.03h-1.13V20c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-8-8c-.34-.34-.34-.9 0-1.24zM4.24 12l5.88 5.89V14.5c0-.48.4-.88.88-.88h2c3.24 0 5.44 1.23 6.83 2.48l.14.13c-.26-2.03-.84-3.31-1.75-4.15-1.3-1.2-3.49-1.7-7.22-1.7-.48 0-.88-.4-.88-.88V6.11z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReplyFillDuotone.displayName = 'ReplyFillDuotone';

// Triple export pattern
export { ReplyFillDuotone, ReplyFillDuotone as ReplyFillDuotoneIcon, ReplyFillDuotone as SiReplyFillDuotone };
export default ReplyFillDuotone;
export type { ReplyFillDuotoneProps };
