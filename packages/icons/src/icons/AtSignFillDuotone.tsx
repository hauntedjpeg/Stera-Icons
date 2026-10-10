import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignFillDuotone = memo(
  forwardRef<SVGSVGElement, AtSignFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25q0 .52-.05 1.02c-.17 1.72-.9 3.06-2.02 3.83-1.09.75-2.46.88-3.62.28.6.28 1.32.05 1.63-.54.3-.57.12-1.28-.4-1.63l-.11-.06c.3.16.7.16 1.08-.1.38-.27.84-.87.95-2.02q.04-.39.04-.78c0-4.28-3.47-7.75-7.75-7.75S4.25 7.72 4.25 12s3.47 7.75 7.75 7.75q1.37-.01 2.58-.44c.65-.23 1.37.11 1.6.76s-.11 1.37-.76 1.6q-1.61.57-3.42.58C6.34 22.25 1.75 17.66 1.75 12S6.34 1.75 12 1.75" opacity={.4} />
        <path fillRule="evenodd" d="M15.6 7.15c.7 0 1.25.56 1.25 1.25v4.5c0 1.28.5 1.82.83 2 .6.32.84 1.08.51 1.69s-1.08.84-1.69.51q-.87-.47-1.42-1.35c-.84.69-1.91 1.1-3.08 1.1-2.68 0-4.85-2.17-4.85-4.85S9.32 7.15 12 7.15c.9 0 1.76.25 2.49.69.2-.41.62-.69 1.11-.69M12 9.65c-1.3 0-2.35 1.05-2.35 2.35s1.05 2.35 2.35 2.35c1.22 0 2.22-.92 2.34-2.11l.01-.24-.01-.24c-.12-1.18-1.12-2.1-2.34-2.11" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFillDuotone.displayName = 'AtSignFillDuotone';

// Triple export pattern
export { AtSignFillDuotone, AtSignFillDuotone as AtSignFillDuotoneIcon, AtSignFillDuotone as SiAtSignFillDuotone };
export default AtSignFillDuotone;
export type { AtSignFillDuotoneProps };
