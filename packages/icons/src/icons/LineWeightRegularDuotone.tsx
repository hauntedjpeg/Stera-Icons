import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineWeightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineWeightRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineWeightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 7c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75H5c-.97 0-1.75-.78-1.75-1.75v-1.5C3.25 7.78 4.03 7 5 7zM5 8.5c-.14 0-.25.11-.25.25v1.5c0 .14.11.25.25.25h14q.23-.02.25-.25v-1.5q-.02-.23-.25-.25z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.75 14.25c1.1 0 2 .9 2 2v2.5c0 1.1-.9 2-2 2H5.25c-1.1 0-2-.9-2-2v-2.5c0-1.1.9-2 2-2zm-13.5 1.5c-.28 0-.5.22-.5.5v2.5c0 .28.22.5.5.5h13.5c.28 0 .5-.22.5-.5v-2.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
        <path d="M20 3.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

LineWeightRegularDuotone.displayName = 'LineWeightRegularDuotone';

// Triple export pattern
export { LineWeightRegularDuotone, LineWeightRegularDuotone as LineWeightRegularDuotoneIcon, LineWeightRegularDuotone as SiLineWeightRegularDuotone };
export default LineWeightRegularDuotone;
export type { LineWeightRegularDuotoneProps };
