import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalLeftRegularProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftRegular = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2.25c.41 0 .75.34.75.75v18a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M13.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H7.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-5.8 1.5-.6.01c-.12.01-.13.03-.11.02a.3.3 0 0 0-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L7 17l.6.01h5.8l.6-.01q.16-.03.11-.02a.3.3 0 0 0 .11-.1l.02-.12.01-.6v-.8l-.01-.6q-.02-.16-.02-.11a.3.3 0 0 0-.1-.11L14 14.5l-.6-.01zM19.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H7.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM7.6 7l-.6.01c-.12.01-.13.03-.11.02a.3.3 0 0 0-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L7 9.5l.6.01h11.8l.6-.01q.16-.02.11-.02a.3.3 0 0 0 .11-.1l.02-.12.01-.6v-.8l-.01-.6c-.01-.12-.03-.13-.02-.11a.3.3 0 0 0-.1-.11L20 7 19.4 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalLeftRegular.displayName = 'AlignHorizontalLeftRegular';

// Triple export pattern (lucide-react style)
export { AlignHorizontalLeftRegular, AlignHorizontalLeftRegular as AlignHorizontalLeftRegularIcon, AlignHorizontalLeftRegular as SiAlignHorizontalLeftRegular };
export default AlignHorizontalLeftRegular;
export type { AlignHorizontalLeftRegularProps };
