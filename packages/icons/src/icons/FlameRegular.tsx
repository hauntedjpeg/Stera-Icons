import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameRegularProps = Omit<IconBaseProps, 'children'>;

const FlameRegular = memo(
  forwardRef<SVGSVGElement, FlameRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25h.11l.02.01.06.02.08.02.06.03.06.03.06.04.02.02h.01l.02.02.06.05.23.2.82.73c.67.63 1.56 1.52 2.46 2.57s1.8 2.27 2.5 3.56c.68 1.28 1.18 2.69 1.18 4.09 0 4.44-3.43 8.11-7.75 8.11s-7.75-3.67-7.75-8.11c0-1.4.5-2.8 1.18-4.09.7-1.3 1.6-2.51 2.5-3.56s1.8-1.94 2.46-2.57l.82-.73.23-.2.06-.05.02-.02.03-.02.06-.04.06-.03.06-.03.08-.02.06-.02h.02zm-.02 10.3c-.3.3-.72.75-1.14 1.29-.85 1.1-1.59 2.42-1.59 3.66 0 1.03.4 1.69.91 2.1.54.45 1.24.65 1.84.65s1.3-.2 1.84-.64c.51-.42.91-1.08.91-2.11 0-1.24-.74-2.57-1.6-3.66-.4-.54-.82-.98-1.13-1.3l-.02-.01zm-.56-8.03c-.64.6-1.5 1.45-2.35 2.44-.85 1-1.7 2.13-2.32 3.3s-1 2.32-1 3.38c0 1.99.83 3.76 2.12 4.96q-.12-.5-.12-1.1c0-1.76 1.01-3.43 1.9-4.59.47-.59.93-1.08 1.27-1.42l.42-.4.12-.12.04-.03h.01l.04-.04.05-.03.07-.04.05-.03.09-.02.05-.02h.02l.12-.01.12.01h.01l.06.02.08.02.06.03.07.04q.02 0 .05.03l.04.03.01.01.04.03.12.11.42.4c.34.35.8.84 1.26 1.43.9 1.16 1.91 2.83 1.91 4.59q0 .6-.12 1.1c1.3-1.2 2.12-2.97 2.12-4.96 0-1.06-.38-2.21-1-3.38-.63-1.17-1.47-2.3-2.32-3.3s-1.7-1.84-2.35-2.44L12.01 4h-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameRegular.displayName = 'FlameRegular';

// Triple export pattern
export { FlameRegular, FlameRegular as FlameRegularIcon, FlameRegular as SiFlameRegular };
export default FlameRegular;
export type { FlameRegularProps };
