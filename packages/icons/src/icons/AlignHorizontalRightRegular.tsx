import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalRightRegularProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalRightRegular = memo(
  forwardRef<SVGSVGElement, AlignHorizontalRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 2.25c.41 0 .75.34.75.75v18c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M16.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-5.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-5.8 1.5-.6.01q-.16.02-.11.02-.08.04-.11.1l-.02.12-.01.6v.8l.01.6q.02.16.02.11.04.08.1.11L10 17l.6.01h5.8l.6-.01q.16-.03.11-.02.08-.03.11-.1l.02-.12.01-.6v-.8l-.01-.6q-.03-.16-.02-.11-.03-.08-.1-.11L17 14.5l-.6-.01zM16.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H4.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM4.6 7l-.6.01c-.12.01-.13.03-.11.02q-.08.04-.11.1l-.02.12-.01.6v.8l.01.6q.02.16.02.11.03.08.1.11L4 9.5l.6.01h11.8l.6-.01q.16-.02.11-.02.08-.04.11-.1l.02-.12.01-.6v-.8l-.01-.6c-.01-.12-.03-.13-.02-.11q-.03-.08-.1-.11L17 7 16.4 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalRightRegular.displayName = 'AlignHorizontalRightRegular';

// Triple export pattern
export { AlignHorizontalRightRegular, AlignHorizontalRightRegular as AlignHorizontalRightRegularIcon, AlignHorizontalRightRegular as SiAlignHorizontalRightRegular };
export default AlignHorizontalRightRegular;
export type { AlignHorizontalRightRegularProps };
