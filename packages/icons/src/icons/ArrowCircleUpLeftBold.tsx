import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.83 8.17c.55 0 1 .45 1 1s-.45 1-1 1h-3.24l3.95 3.95c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-3.95-3.95v3.24c0 .55-.45 1-1 1s-1-.45-1-1V9.17c0-.26.1-.52.3-.7q.29-.3.7-.3z" />
        <path fillRule="evenodd" d="M4.93 4.93c3.9-3.9 10.24-3.9 14.14 0s3.9 10.24 0 14.14-10.24 3.9-14.14 0-3.9-10.24 0-14.14m12.73 1.41c-3.13-3.12-8.2-3.12-11.32 0s-3.12 8.2 0 11.32 8.2 3.12 11.32 0 3.12-8.2 0-11.32" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpLeftBold.displayName = 'ArrowCircleUpLeftBold';

// Triple export pattern
export { ArrowCircleUpLeftBold, ArrowCircleUpLeftBold as ArrowCircleUpLeftBoldIcon, ArrowCircleUpLeftBold as SiArrowCircleUpLeftBold };
export default ArrowCircleUpLeftBold;
export type { ArrowCircleUpLeftBoldProps };
