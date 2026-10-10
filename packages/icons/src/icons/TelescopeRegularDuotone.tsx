import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.15 15.03q.56.52 1.34.67l-2.82 5.64c-.18.37-.63.52-1 .33-.38-.18-.53-.63-.34-1zM16.67 20.67c.19.37.04.82-.34 1-.37.19-.82.04-1-.34L12.5 15.7q.78-.16 1.34-.67zM14.64 4.58c-.25.55-.32 1.2-.15 1.83l-.05-.17-7.1 2.5.84 3.11 1.47-.27q-.39.63-.4 1.42v.17l-2.16.41-1.55-5.8zM15.53 10.3c.18.63.56 1.15 1.05 1.5l-1.96.37q-.26-.82-.95-1.35l1.9-.35z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 10.25c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75S9.25 14.52 9.25 13s1.23-2.75 2.75-2.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25c0-.7-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path d="m5.54 7.78.39 1.45L4 9.91c-.25.09-.38.35-.32.6l.44 1.63c.07.25.32.41.58.36l2-.37.4 1.45-2.13.4c-1.03.19-2.03-.44-2.3-1.45l-.44-1.63c-.27-1 .29-2.06 1.27-2.4z" />
        <path fillRule="evenodd" d="M18.13 2.6c1.06-.29 2.16.35 2.45 1.41L22 9.33c.29 1.06-.35 2.16-1.41 2.45l-1.7.45c-1.46.4-2.97-.48-3.36-1.95l-1.04-3.86c-.4-1.47.48-2.98 1.95-3.37zm.38 1.45-1.69.45c-.66.18-1.06.87-.88 1.53l1.04 3.87c.17.66.86 1.06 1.53.88l1.69-.45c.26-.07.42-.35.35-.62l-1.42-5.3c-.07-.28-.35-.43-.62-.36" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeRegularDuotone.displayName = 'TelescopeRegularDuotone';

// Triple export pattern
export { TelescopeRegularDuotone, TelescopeRegularDuotone as TelescopeRegularDuotoneIcon, TelescopeRegularDuotone as SiTelescopeRegularDuotone };
export default TelescopeRegularDuotone;
export type { TelescopeRegularDuotoneProps };
