import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-fill-duotone" {...props}>
      <path d="M10.14 3.88c.51 0 .93.4.93.92v6.3a.88.88 0 0 0 1.75 0V9.2a.93.93 0 0 1 1.85.1v2.25a.88.88 0 0 0 1.75 0V10.1a.93.93 0 0 1 1.85.1v3.6a6.33 6.33 0 0 1-12.62.87l-1.1-2.8-.05-.12a.93.93 0 0 1 1.6-.93v.01l1.49 2.51a.88.88 0 0 0 1.63-.44V4.8c0-.51.41-.92.92-.92" opacity={.4} />
        <path fillRule="evenodd" d="M10.14 2.13c1.48 0 2.68 1.2 2.68 2.67v2A2.7 2.7 0 0 1 16 7.87q.6-.34 1.33-.35c1.48 0 2.68 1.2 2.68 2.67v3.6A8.08 8.08 0 0 1 4 15.23l-1.06-2.7a2.67 2.67 0 0 1 4.53-2.81V4.8c0-1.48 1.2-2.67 2.67-2.67m0 1.75a.93.93 0 0 0-.92.92v8.1a.88.88 0 0 1-1.63.44l-1.48-2.5v-.02a.9.9 0 0 0-1.27-.34.93.93 0 0 0-.34 1.27l.06.12 1.1 2.8.04.18a6.33 6.33 0 0 0 12.57-1.05v-3.6a.93.93 0 0 0-1.85-.1v1.45a.87.87 0 1 1-1.75 0V9.3a.92.92 0 0 0-1.85-.1v1.9a.88.88 0 0 1-1.75 0V4.8a.93.93 0 0 0-.93-.92" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerFillDuotone.displayName = 'CursorPointerFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorPointerFillDuotone, CursorPointerFillDuotone as CursorPointerFillDuotoneIcon, CursorPointerFillDuotone as SiCursorPointerFillDuotone };
export default CursorPointerFillDuotone;
export type { CursorPointerFillDuotoneProps };
