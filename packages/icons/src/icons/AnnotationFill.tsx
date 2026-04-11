import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationFillProps = Omit<IconBaseProps, 'children'>;

const AnnotationFill = memo(
  forwardRef<SVGSVGElement, AnnotationFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 16.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" />
        <path fillRule="evenodd" d="M14.6 2.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H8.9a4 4 0 0 0-4.78-4.77V9.4q-.01-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-4.6 9a.88.88 0 0 0 0 1.74h3a.88.88 0 0 0 0-1.74zm0-3.5a.88.88 0 0 0 0 1.75h6a.88.88 0 0 0 0-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

AnnotationFill.displayName = 'AnnotationFill';

// Triple export pattern (lucide-react style)
export { AnnotationFill, AnnotationFill as AnnotationFillIcon, AnnotationFill as SiAnnotationFill };
export default AnnotationFill;
export type { AnnotationFillProps };
