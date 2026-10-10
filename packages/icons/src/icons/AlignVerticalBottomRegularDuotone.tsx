import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalBottomRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.65 2.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v11.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72V4.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-.8 1.5-.6.01c-.12.01-.13.03-.11.02q-.08.03-.11.1L7 4 7 4.6v11.8l.01.6q.03.16.02.11.04.08.1.11l.12.02.6.01h.8l.6-.01q.16-.03.11-.02.08-.03.11-.1L9.5 17l.01-.6V4.6L9.49 4c-.01-.12-.03-.13-.02-.11q-.04-.08-.1-.11l-.12-.02-.6-.01zM16.15 8.25q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v5.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-5.8q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-.8 1.5-.6.01q-.16.02-.11.02-.08.04-.11.1l-.02.12-.01.6v5.8l.01.6q.02.16.02.11.04.08.1.11l.12.02.6.01h.8l.6-.01q.16-.03.11-.02.08-.03.11-.1L17 17l.01-.6v-5.8l-.01-.6q-.03-.16-.02-.11-.03-.08-.1-.11l-.12-.02-.6-.01z" clipRule="evenodd" />
        <path d="M21 20c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
    </IconBase>
  ))
);

AlignVerticalBottomRegularDuotone.displayName = 'AlignVerticalBottomRegularDuotone';

// Triple export pattern
export { AlignVerticalBottomRegularDuotone, AlignVerticalBottomRegularDuotone as AlignVerticalBottomRegularDuotoneIcon, AlignVerticalBottomRegularDuotone as SiAlignVerticalBottomRegularDuotone };
export default AlignVerticalBottomRegularDuotone;
export type { AlignVerticalBottomRegularDuotoneProps };
