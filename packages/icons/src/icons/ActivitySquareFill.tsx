import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivitySquareFillProps = Omit<IconBaseProps, 'children'>;

const ActivitySquareFill = memo(
  forwardRef<SVGSVGElement, ActivitySquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-1.97 4c-.36-.02-.7.2-.84.54l-1.6 3.88q-.04.07-.12.07H6.5c-.48 0-.87.4-.87.88s.39.88.87.88h1.47c.76 0 1.44-.46 1.73-1.16l.71-1.72 2.26 6.78c.12.34.43.58.8.6.36 0 .7-.2.84-.55l1.6-3.88q.04-.07.12-.07h1.47c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.47c-.76 0-1.44.45-1.73 1.15L13.59 14l-2.26-6.78c-.12-.34-.43-.58-.8-.6" clipRule="evenodd" />
    </IconBase>
  ))
);

ActivitySquareFill.displayName = 'ActivitySquareFill';

// Triple export pattern
export { ActivitySquareFill, ActivitySquareFill as ActivitySquareFillIcon, ActivitySquareFill as SiActivitySquareFill };
export default ActivitySquareFill;
export type { ActivitySquareFillProps };
