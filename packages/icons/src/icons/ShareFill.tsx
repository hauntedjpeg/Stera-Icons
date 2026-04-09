import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShareFillProps = Omit<IconBaseProps, 'children'>;

const ShareFill = memo(
  forwardRef<SVGSVGElement, ShareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="share-fill" {...props}>
      <path d="M12 1.63q.36 0 .62.25l3.5 3.5a.88.88 0 0 1-1.24 1.24l-2-2v4h-1.76v-4l-2 2a.88.88 0 0 1-1.24-1.24l3.5-3.5a1 1 0 0 1 .62-.25M14.4 8.63q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.1 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v.3q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.52.27-1.08.38-1.72.43q-.93.07-2.37.05H9.6q-1.44.01-2.37-.05a5 5 0 0 1-1.72-.42 4.4 4.4 0 0 1-1.9-1.91 5 5 0 0 1-.43-1.72q-.08-.93-.06-2.37v-.3q-.02-1.44.06-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43c.63-.06 1.4-.05 2.37-.05h1.52V15a.88.88 0 0 0 1.76 0V8.63z" />
    </IconBase>
  ))
);

ShareFill.displayName = 'ShareFill';

// Triple export pattern (lucide-react style)
export { ShareFill, ShareFill as ShareFillIcon, ShareFill as SiShareFill };
export default ShareFill;
export type { ShareFillProps };
