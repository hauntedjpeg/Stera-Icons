import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShuffleBoldProps = Omit<IconBaseProps, 'children'>;

const ShuffleBold = memo(
  forwardRef<SVGSVGElement, ShuffleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 6c1.44 0 2.57.9 3.44 1.9.88 1.02 1.68 2.36 2.42 3.59.76 1.27 1.46 2.43 2.2 3.3.76.86 1.38 1.21 1.94 1.21h2.59l-.8-.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l2.5 2.5q.28.28.29.7t-.3.7l-2.5 2.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l.79-.8H16c-1.44 0-2.57-.9-3.44-1.9-.88-1.02-1.68-2.36-2.42-3.59-.76-1.27-1.46-2.43-2.2-3.3C7.17 8.36 6.55 8 6 8H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path d="M8.4 14.2c.32-.43.95-.52 1.4-.2.43.34.52.96.2 1.4-.97 1.3-2.26 2.6-4 2.6H3c-.55 0-1-.45-1-1s.45-1 1-1h3c.69 0 1.45-.53 2.4-1.8M17.8 3.8c.38-.4 1.02-.4 1.4 0l2.5 2.5q.3.28.3.7t-.3.7l-2.5 2.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l.79-.8H16c-.69 0-1.45.53-2.4 1.8-.32.44-.95.53-1.4.2s-.53-.96-.2-1.4c.97-1.3 2.26-2.6 4-2.6h2.59l-.8-.8c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ShuffleBold.displayName = 'ShuffleBold';

// Triple export pattern
export { ShuffleBold, ShuffleBold as ShuffleBoldIcon, ShuffleBold as SiShuffleBold };
export default ShuffleBold;
export type { ShuffleBoldProps };
