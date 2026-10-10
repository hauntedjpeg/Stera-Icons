import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandFillProps = Omit<IconBaseProps, 'children'>;

const ExpandFill = memo(
  forwardRef<SVGSVGElement, ExpandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.38 14.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L7.24 18l1.38 1.38c.25.25.32.63.19.96-.14.32-.46.54-.81.54H4l-.17-.02H3.8l-.14-.05-.02-.01q-.15-.07-.26-.18t-.18-.26v-.02q-.08-.17-.08-.34v-4c0-.35.22-.67.55-.8.32-.14.7-.07.95.18L6 16.76zM14.38 14.38c.34-.34.9-.34 1.24 0L18 16.76l1.38-1.38c.25-.25.63-.32.96-.19.32.14.54.46.54.81v4q0 .17-.07.34l-.01.02q-.07.14-.18.26t-.26.18h-.02q-.08.04-.15.05h-.02q-.08.03-.17.02h-4c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95L16.76 18l-2.38-2.38c-.34-.34-.34-.9 0-1.24M8 3.13c.35 0 .67.2.8.54.14.32.07.7-.18.95L7.24 6l2.38 2.38c.34.34.34.9 0 1.24s-.9.34-1.24 0L6 7.24 4.62 8.62c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V4q0-.17.06-.34l.01-.02q.07-.15.18-.26.12-.11.26-.18h.02q.08-.04.14-.05h.03q.08-.03.17-.02zM20 3.13l.17.01h.02l.14.05.03.01q.14.07.26.18.11.12.18.26v.02q.07.17.07.34v4c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18L18 7.24l-2.38 2.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L16.76 6l-1.38-1.38c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ExpandFill.displayName = 'ExpandFill';

// Triple export pattern
export { ExpandFill, ExpandFill as ExpandFillIcon, ExpandFill as SiExpandFill };
export default ExpandFill;
export type { ExpandFillProps };
