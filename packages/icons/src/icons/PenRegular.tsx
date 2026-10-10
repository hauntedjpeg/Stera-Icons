import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenRegularProps = Omit<IconBaseProps, 'children'>;

const PenRegular = memo(
  forwardRef<SVGSVGElement, PenRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.25 1.87c1 0 2.03.35 2.78 1.1s1.1 1.78 1.1 2.78-.35 2.03-1.1 2.78l-12.5 12.5q-.18.19-.46.22l-5 .5q-.35.02-.6-.22-.25-.25-.22-.6l.5-5 .03-.13q.05-.2.19-.33l12.5-12.5c.75-.75 1.78-1.1 2.78-1.1M4.22 16.34l-.38 3.82 3.82-.38L17.44 10 14 6.56zM18.25 3.37c-.67 0-1.3.24-1.72.66L15.06 5.5l3.44 3.44 1.47-1.47c.42-.42.66-1.05.66-1.72s-.24-1.3-.66-1.72-1.05-.66-1.72-.66" clipRule="evenodd" />
    </IconBase>
  ))
);

PenRegular.displayName = 'PenRegular';

// Triple export pattern
export { PenRegular, PenRegular as PenRegularIcon, PenRegular as SiPenRegular };
export default PenRegular;
export type { PenRegularProps };
