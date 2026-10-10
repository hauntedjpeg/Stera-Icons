import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationBoldProps = Omit<IconBaseProps, 'children'>;

const AnnotationBold = memo(
  forwardRef<SVGSVGElement, AnnotationBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 16c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-4.27c-.55 0-1-.45-1-1s.45-1 1-1h4.27c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.4c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28C16.53 4 15.74 4 14.6 4h-3.2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22C6 7.47 6 8.26 6 9.4v4.27c0 .55-.45 1-1 1s-1-.45-1-1V9.4q-.01-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q9.75 1.99 11.4 2z" />
        <path d="M13 11c.55 0 1 .45 1 1s-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1zM16 7.5c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

AnnotationBold.displayName = 'AnnotationBold';

// Triple export pattern
export { AnnotationBold, AnnotationBold as AnnotationBoldIcon, AnnotationBold as SiAnnotationBold };
export default AnnotationBold;
export type { AnnotationBoldProps };
