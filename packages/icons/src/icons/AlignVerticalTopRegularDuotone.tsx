import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 2a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" opacity={.4} />
        <path fillRule="evenodd" d="M8.65 5.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v11.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V7.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-.8 1.5-.6.01c-.12.01-.13.03-.11.02a.3.3 0 0 0-.11.1L7 7 7 7.6v11.8l.01.6q.03.16.02.11.04.08.1.11l.12.02.6.01h.8l.6-.01q.16-.03.11-.02a.3.3 0 0 0 .11-.1L9.5 20l.01-.6V7.6L9.49 7c-.01-.12-.03-.13-.02-.11a.3.3 0 0 0-.1-.11l-.12-.02-.6-.01zM16.15 5.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v5.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V7.6q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-.8 1.5-.6.01q-.16.03-.11.02a.3.3 0 0 0-.11.1L14.5 7l-.01.6v5.8l.01.6q.02.16.02.11.04.08.1.11l.12.02.6.01h.8l.6-.01q.16-.02.11-.02a.3.3 0 0 0 .11-.1L17 14l.01-.6V7.6l-.01-.6c-.01-.12-.03-.13-.02-.11a.3.3 0 0 0-.1-.11l-.12-.02-.6-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalTopRegularDuotone.displayName = 'AlignVerticalTopRegularDuotone';

// Triple export pattern (lucide-react style)
export { AlignVerticalTopRegularDuotone, AlignVerticalTopRegularDuotone as AlignVerticalTopRegularDuotoneIcon, AlignVerticalTopRegularDuotone as SiAlignVerticalTopRegularDuotone };
export default AlignVerticalTopRegularDuotone;
export type { AlignVerticalTopRegularDuotoneProps };
