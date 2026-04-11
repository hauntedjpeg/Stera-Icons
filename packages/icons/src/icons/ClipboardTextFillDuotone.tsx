import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.75 3.13c1.73 0 3.13 1.4 3.13 3.12v13.5c0 1.73-1.4 3.13-3.13 3.13H6.25a3.1 3.1 0 0 1-3.12-3.13V6.25c0-1.73 1.4-3.12 3.12-3.12h.88v1.62c0 1.17.95 2.13 2.12 2.13h5.5c1.17 0 2.13-.96 2.13-2.13v-1.5l-.01-.12zM8.5 13.88a.88.88 0 0 0 0 1.74h7a.88.88 0 0 0 0-1.74zm0-3.5a.88.88 0 0 0 0 1.74h7a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 13.88a.88.88 0 0 1 0 1.74h-7a.88.88 0 0 1 0-1.74zM15.5 10.38a.88.88 0 0 1 0 1.74h-7a.88.88 0 0 1 0-1.74zM14.75 1.13c1.17 0 2.13.95 2.13 2.12v1.5c0 1.17-.96 2.13-2.13 2.13h-5.5a2.13 2.13 0 0 1-2.12-2.13v-1.5c0-1.17.95-2.12 2.12-2.12z" />
    </IconBase>
  ))
);

ClipboardTextFillDuotone.displayName = 'ClipboardTextFillDuotone';

// Triple export pattern (lucide-react style)
export { ClipboardTextFillDuotone, ClipboardTextFillDuotone as ClipboardTextFillDuotoneIcon, ClipboardTextFillDuotone as SiClipboardTextFillDuotone };
export default ClipboardTextFillDuotone;
export type { ClipboardTextFillDuotoneProps };
