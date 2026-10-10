import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2c.55 0 1 .45 1 1v18c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M13.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-4.8 1.5-.6.01c-.12.01-.13.03-.11.02q-.08.04-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L8 17l.6.01h4.8l.6-.01q.16-.03.11-.02.08-.03.11-.1l.02-.12.01-.6v-.8l-.01-.6q-.02-.16-.02-.11-.04-.08-.1-.11L14 14.5l-.6-.01zM19.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM8.6 7l-.6.01c-.12.01-.13.03-.11.02q-.08.04-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L8 9.5l.6.01h10.8l.6-.01q.16-.02.11-.02.08-.04.11-.1l.02-.12.01-.6v-.8l-.01-.6c-.01-.12-.03-.13-.02-.11q-.03-.08-.1-.11L20 7 19.4 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalLeftRegularDuotone.displayName = 'AlignHorizontalLeftRegularDuotone';

// Triple export pattern
export { AlignHorizontalLeftRegularDuotone, AlignHorizontalLeftRegularDuotone as AlignHorizontalLeftRegularDuotoneIcon, AlignHorizontalLeftRegularDuotone as SiAlignHorizontalLeftRegularDuotone };
export default AlignHorizontalLeftRegularDuotone;
export type { AlignHorizontalLeftRegularDuotoneProps };
