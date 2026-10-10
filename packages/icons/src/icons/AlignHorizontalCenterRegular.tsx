import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterRegularProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterRegular = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c.41 0 .75.34.75.75v2.5h5.65q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-5.65v2h2.65q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-2.65V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.5H8.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02h2.65v-2H5.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.03-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02h5.65V3c0-.41.34-.75.75-.75M8.6 14.5l-.6.01c-.12.01-.13.03-.11.02q-.08.04-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L8 17l.6.01h6.8l.6-.01q.16-.03.11-.02.08-.03.11-.1l.02-.12.01-.6v-.8l-.01-.6q-.03-.16-.02-.11-.03-.08-.1-.11L16 14.5l-.6-.01zM5.6 7l-.6.01c-.12.01-.13.03-.11.02q-.08.04-.11.1l-.02.12-.01.6v.8l.01.6q.03.16.02.11.04.08.1.11L5 9.5l.6.01h12.8l.6-.01q.16-.02.11-.02.08-.04.11-.1l.02-.12.01-.6v-.8l-.01-.6c-.01-.12-.03-.13-.02-.11q-.03-.08-.1-.11L19 7 18.4 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterRegular.displayName = 'AlignHorizontalCenterRegular';

// Triple export pattern
export { AlignHorizontalCenterRegular, AlignHorizontalCenterRegular as AlignHorizontalCenterRegularIcon, AlignHorizontalCenterRegular as SiAlignHorizontalCenterRegular };
export default AlignHorizontalCenterRegular;
export type { AlignHorizontalCenterRegularProps };
