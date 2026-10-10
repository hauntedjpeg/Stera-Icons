import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AnnotationFillDuotone = memo(
  forwardRef<SVGSVGElement, AnnotationFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 2.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H7.74q.13-.4.13-.87c0-1.59-1.28-2.87-2.87-2.87q-.46 0-.87.13V9.4q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-4.6 9c-.48 0-.87.39-.87.87s.39.88.87.88h3c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.88.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M5 16.13c1.59 0 2.88 1.28 2.88 2.87S6.58 21.88 5 21.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87M13 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM16 7.63c.48 0 .88.39.88.87s-.4.88-.88.88h-6c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

AnnotationFillDuotone.displayName = 'AnnotationFillDuotone';

// Triple export pattern
export { AnnotationFillDuotone, AnnotationFillDuotone as AnnotationFillDuotoneIcon, AnnotationFillDuotone as SiAnnotationFillDuotone };
export default AnnotationFillDuotone;
export type { AnnotationFillDuotoneProps };
