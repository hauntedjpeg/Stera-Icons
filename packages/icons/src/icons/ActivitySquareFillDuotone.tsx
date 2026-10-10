import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivitySquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivitySquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ActivitySquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-1.97 4c-.36-.02-.7.2-.84.54l-1.6 3.88q-.04.07-.12.08H6.5c-.48 0-.87.39-.87.87s.39.88.87.88h1.47c.76 0 1.44-.46 1.73-1.16l.71-1.72 2.26 6.78c.12.34.43.58.8.6.36 0 .7-.2.84-.54l1.6-3.89q.04-.06.12-.07h1.47c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87h-1.47c-.76 0-1.44.45-1.73 1.15L13.59 14l-2.26-6.78c-.12-.34-.43-.58-.8-.6" clipRule="evenodd" opacity={.4} />
        <path d="M10.53 6.63c.37 0 .68.25.8.6L13.59 14l.7-1.72c.3-.7.98-1.15 1.74-1.15h1.47c.48 0 .88.39.88.87s-.4.88-.88.88h-1.47q-.08 0-.12.07l-1.6 3.88c-.14.34-.48.56-.84.54-.37 0-.68-.25-.8-.6L10.41 10l-.7 1.72c-.3.7-.98 1.16-1.74 1.16H6.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h1.47q.08-.01.12-.08l1.6-3.88c.14-.34.48-.56.84-.54" />
    </IconBase>
  ))
);

ActivitySquareFillDuotone.displayName = 'ActivitySquareFillDuotone';

// Triple export pattern
export { ActivitySquareFillDuotone, ActivitySquareFillDuotone as ActivitySquareFillDuotoneIcon, ActivitySquareFillDuotone as SiActivitySquareFillDuotone };
export default ActivitySquareFillDuotone;
export type { ActivitySquareFillDuotoneProps };
