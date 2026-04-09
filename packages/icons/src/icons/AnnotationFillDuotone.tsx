import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AnnotationFillDuotone = memo(
  forwardRef<SVGSVGElement, AnnotationFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="annotation-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.6 2.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H7.74a2.87 2.87 0 0 0-3.61-3.6V9.4q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-4.6 9a.88.88 0 0 0 0 1.74h3a.88.88 0 0 0 0-1.74zm0-3.5a.88.88 0 0 0 0 1.75h6a.88.88 0 0 0 0-1.76z" clipRule="evenodd" opacity={.4} />
        <path d="M5 16.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.75M13 11.13a.88.88 0 0 1 0 1.74h-3a.88.88 0 0 1 0-1.74zM16 7.63a.88.88 0 0 1 0 1.75h-6a.87.87 0 1 1 0-1.76z" />
    </IconBase>
  ))
);

AnnotationFillDuotone.displayName = 'AnnotationFillDuotone';

// Triple export pattern (lucide-react style)
export { AnnotationFillDuotone, AnnotationFillDuotone as AnnotationFillDuotoneIcon, AnnotationFillDuotone as SiAnnotationFillDuotone };
export default AnnotationFillDuotone;
export type { AnnotationFillDuotoneProps };
