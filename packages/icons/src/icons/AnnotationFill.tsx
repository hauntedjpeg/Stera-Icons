import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AnnotationFillProps = Omit<IconBaseProps, 'children'>;

const AnnotationFill = memo(
  forwardRef<SVGSVGElement, AnnotationFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 16.25c1.52 0 2.75 1.23 2.75 2.75S6.52 21.75 5 21.75 2.25 20.52 2.25 19 3.48 16.25 5 16.25" />
        <path fillRule="evenodd" d="M14.6 2.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H8.9q.1-.42.1-.87c0-2.2-1.8-4-4-4q-.46 0-.87.1V9.4q-.01-1.64.05-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-4.6 9c-.48 0-.87.39-.87.87s.39.88.87.88h3c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.87.87.88h6c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

AnnotationFill.displayName = 'AnnotationFill';

// Triple export pattern
export { AnnotationFill, AnnotationFill as AnnotationFillIcon, AnnotationFill as SiAnnotationFill };
export default AnnotationFill;
export type { AnnotationFillProps };
