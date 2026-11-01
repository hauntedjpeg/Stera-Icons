import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashSquareFillProps = Omit<IconBaseProps, 'children'>;

const HashSquareFill = memo(
  forwardRef<SVGSVGElement, HashSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.25 13.25h-2.5v-2.5h2.5z" />
        <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm1 4.5c-.41 0-.75.34-.75.75v1.75h-2.5V7.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v2.5H7.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h2.5v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-2.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75V7.5c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

HashSquareFill.displayName = 'HashSquareFill';

// Triple export pattern
export { HashSquareFill, HashSquareFill as HashSquareFillIcon, HashSquareFill as SiHashSquareFill };
export default HashSquareFill;
export type { HashSquareFillProps };
