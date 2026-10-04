import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M15.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-4.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-4.8 1.5-.6.01q-.16.02-.11.02a.3.3 0 0 0-.11.1l-.02.12-.01.6v.8l.01.6q.02.16.02.11.04.08.1.11L10 17l.6.01h4.8l.6-.01q.16-.03.11-.02a.3.3 0 0 0 .11-.1l.02-.12.01-.6v-.8l-.01-.6q-.03-.16-.02-.11a.3.3 0 0 0-.1-.11L16 14.5l-.6-.01zM15.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H4.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM4.6 7l-.6.01c-.12.01-.13.03-.11.02a.3.3 0 0 0-.11.1l-.02.12-.01.6v.8l.01.6q.02.16.02.11.03.08.1.11L4 9.5l.6.01h10.8l.6-.01q.16-.02.11-.02a.3.3 0 0 0 .11-.1l.02-.12.01-.6v-.8l-.01-.6c-.01-.12-.03-.13-.02-.11a.3.3 0 0 0-.1-.11L16 7 15.4 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalRightRegularDuotone.displayName = 'AlignHorizontalRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalRightRegularDuotone, AlignHorizontalRightRegularDuotone as AlignHorizontalRightRegularDuotoneIcon, AlignHorizontalRightRegularDuotone as SiAlignHorizontalRightRegularDuotone };
export default AlignHorizontalRightRegularDuotone;
export type { AlignHorizontalRightRegularDuotoneProps };
