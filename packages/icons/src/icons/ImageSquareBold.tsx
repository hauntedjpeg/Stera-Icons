import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareBoldProps = Omit<IconBaseProps, 'children'>;

const ImageSquareBold = memo(
  forwardRef<SVGSVGElement, ImageSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fillRule="evenodd" d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7-.03.41-.1.8l.07.07-.1.1q-.13.53-.35 1a5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-6.02 10a.1.1 0 0 0-.16 0l-3.21 3.2-.2.2.04.75c.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.17-1.06l-2.95-2.95a.1.1 0 0 0-.16 0l-1.1 1.1c-.82.82-2.15.82-2.98 0zm1.82-8c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v3.19l2-2.01a2.1 2.1 0 0 1 3 0l3.75 3.76q.09.06.16 0l1.1-1.1a2.1 2.1 0 0 1 2.98 0l2 2 .01-1.64V9.9c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28c-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareBold.displayName = 'ImageSquareBold';

// Triple export pattern (lucide-react style)
export { ImageSquareBold, ImageSquareBold as ImageSquareBoldIcon, ImageSquareBold as SiImageSquareBold };
export default ImageSquareBold;
export type { ImageSquareBoldProps };
