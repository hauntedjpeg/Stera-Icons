import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.75 3.13c1.73 0 3.13 1.4 3.13 3.12v13.5c0 1.73-1.4 3.13-3.13 3.13H6.25c-1.73 0-3.12-1.4-3.12-3.13V6.25c0-1.73 1.4-3.12 3.12-3.12h.88v1.62c0 1.17.95 2.13 2.12 2.13h5.5c1.17 0 2.13-.96 2.13-2.13v-1.5l-.01-.12zM8.5 13.88c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.88.87.88h7c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 13.88c.48 0 .88.39.88.87s-.4.88-.88.88h-7c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15.5 10.38c.48 0 .88.39.88.87s-.4.88-.88.88h-7c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM14.75 1.13c1.17 0 2.13.95 2.13 2.12v1.5c0 1.17-.96 2.13-2.13 2.13h-5.5c-1.17 0-2.12-.96-2.12-2.13v-1.5c0-1.17.95-2.12 2.12-2.12z" />
    </IconBase>
  ))
);

ClipboardTextFillDuotone.displayName = 'ClipboardTextFillDuotone';

// Triple export pattern
export { ClipboardTextFillDuotone, ClipboardTextFillDuotone as ClipboardTextFillDuotoneIcon, ClipboardTextFillDuotone as SiClipboardTextFillDuotone };
export default ClipboardTextFillDuotone;
export type { ClipboardTextFillDuotoneProps };
