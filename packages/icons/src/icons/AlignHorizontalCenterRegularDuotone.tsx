import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 21a1 1 0 1 1-2 0v-2.5h2zM13 13h-2v-2h2zM12 2a1 1 0 0 1 1 1v2.5h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M15.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zm-6.8 1.5-.6.01c-.12.01-.13.03-.11.02a.3.3 0 0 0-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L8 17l.6.01h6.8l.6-.01q.16-.03.11-.02a.3.3 0 0 0 .11-.1l.02-.12.01-.6v-.8l-.01-.6q-.03-.16-.02-.11a.3.3 0 0 0-.1-.11L16 14.5l-.6-.01zM18.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H5.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.03-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM5.6 7l-.6.01c-.12.01-.13.03-.11.02a.3.3 0 0 0-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L5 9.5l.6.01h12.8l.6-.01q.16-.02.11-.02a.3.3 0 0 0 .11-.1l.02-.12.01-.6v-.8l-.01-.6c-.01-.12-.03-.13-.02-.11a.3.3 0 0 0-.1-.11L19 7 18.4 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterRegularDuotone.displayName = 'AlignHorizontalCenterRegularDuotone';

// Triple export pattern
export { AlignHorizontalCenterRegularDuotone, AlignHorizontalCenterRegularDuotone as AlignHorizontalCenterRegularDuotoneIcon, AlignHorizontalCenterRegularDuotone as SiAlignHorizontalCenterRegularDuotone };
export default AlignHorizontalCenterRegularDuotone;
export type { AlignHorizontalCenterRegularDuotoneProps };
