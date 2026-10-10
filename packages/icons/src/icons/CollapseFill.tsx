import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseFillProps = Omit<IconBaseProps, 'children'>;

const CollapseFill = memo(
  forwardRef<SVGSVGElement, CollapseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m9 14.12.17.02h.03l.05.02q.1.03.2.1.1.04.17.12.26.28.25.64V19c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18L7 18.24l-2.38 2.38c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L5.76 17l-1.38-1.38c-.25-.25-.32-.63-.19-.96.14-.32.46-.54.8-.54zM19 14.12c.35 0 .67.22.8.54.14.33.07.7-.18.96L18.24 17l2.38 2.38c.34.34.34.9 0 1.24s-.9.34-1.24 0L17 18.24l-1.38 1.38c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-4q0-.13.04-.25l.02-.05.01-.04.1-.18.09-.1.1-.08.1-.07.03-.01.05-.03.04-.01.05-.02.05-.01h.03q.08-.03.17-.03zM3.38 3.38c.34-.34.9-.34 1.24 0L7 5.76l1.38-1.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v3.98q.02.36-.25.64-.2.18-.44.24-.1.02-.2.01H5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95L5.76 7 3.38 4.62c-.34-.34-.34-.9 0-1.24M19.38 3.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L18.24 7l1.38 1.38c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-3.98l-.2-.01h-.02q-.23-.06-.42-.24-.08-.08-.13-.17-.08-.12-.1-.28-.03-.08-.03-.17V5c0-.35.22-.67.54-.8.33-.14.7-.07.96.18L17 5.76z" />
    </IconBase>
  ))
);

CollapseFill.displayName = 'CollapseFill';

// Triple export pattern
export { CollapseFill, CollapseFill as CollapseFillIcon, CollapseFill as SiCollapseFill };
export default CollapseFill;
export type { CollapseFillProps };
