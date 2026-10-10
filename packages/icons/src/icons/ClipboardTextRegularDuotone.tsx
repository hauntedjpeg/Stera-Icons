import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardTextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextRegularDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardTextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.75 3.25c1.66 0 3 1.34 3 3v13.5c0 1.66-1.34 3-3 3H6.25c-1.66 0-3-1.34-3-3V6.25c0-1.66 1.34-3 3-3h1v1.5h-1c-.83 0-1.5.67-1.5 1.5v13.5c0 .83.67 1.5 1.5 1.5h11.5c.83 0 1.5-.67 1.5-1.5V6.25c0-.83-.67-1.5-1.5-1.5h-1v-1.5z" opacity={.4} />
        <path d="M15.5 14c.41 0 .75.34.75.75s-.34.75-.75.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15.5 10.5c.41 0 .75.34.75.75s-.34.75-.75.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M14.75 1.25c1.1 0 2 .9 2 2v1.5c0 1.1-.9 2-2 2h-5.5c-1.1 0-2-.9-2-2v-1.5c0-1.1.9-2 2-2zm-5.5 1.5c-.28 0-.5.22-.5.5v1.5c0 .28.22.5.5.5h5.5c.28 0 .5-.22.5-.5v-1.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardTextRegularDuotone.displayName = 'ClipboardTextRegularDuotone';

// Triple export pattern
export { ClipboardTextRegularDuotone, ClipboardTextRegularDuotone as ClipboardTextRegularDuotoneIcon, ClipboardTextRegularDuotone as SiClipboardTextRegularDuotone };
export default ClipboardTextRegularDuotone;
export type { ClipboardTextRegularDuotoneProps };
