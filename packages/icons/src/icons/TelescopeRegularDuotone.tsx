import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.13 2.6c1.06-.29 2.16.35 2.45 1.41L22 9.33c.29 1.06-.35 2.16-1.41 2.45l-1.7.45c-.82.22-1.66.04-2.31-.43l-1.96.37q-.26-.82-.95-1.35l1.9-.35-1.13-4.23-7.1 2.5.84 3.11 1.47-.28q-.39.63-.4 1.43v.18l-4.28.8c-1.03.2-2.03-.44-2.3-1.45l-.44-1.63c-.27-1 .29-2.06 1.27-2.4l11.14-3.93c.33-.72.97-1.3 1.8-1.52zM4 9.9c-.25.1-.38.35-.32.6l.44 1.63c.07.25.32.41.58.36l2-.37-.77-2.9zm14.52-5.86-1.7.45c-.66.18-1.06.87-.88 1.53l1.04 3.87c.18.66.86 1.06 1.53.88l1.69-.45c.26-.08.42-.35.35-.62l-1.42-5.3c-.07-.28-.35-.43-.61-.36" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 10.25c1.52 0 2.75 1.23 2.75 2.75 0 .8-.35 1.53-.9 2.03l2.82 5.63c.19.37.04.83-.33 1.01-.38.19-.83.04-1.01-.34L12.5 15.7q-.25.05-.51.05t-.51-.05l-2.82 5.64c-.18.37-.63.52-1 .33-.38-.18-.53-.64-.34-1l2.82-5.64c-.55-.5-.9-1.23-.9-2.03 0-1.52 1.23-2.75 2.75-2.75m0 1.5c-.69 0-1.25.56-1.25 1.25 0 .49.28.9.69 1.12q.26.13.56.13t.55-.13h.01c.41-.21.69-.63.69-1.12 0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TelescopeRegularDuotone.displayName = 'TelescopeRegularDuotone';

// Triple export pattern
export { TelescopeRegularDuotone, TelescopeRegularDuotone as TelescopeRegularDuotoneIcon, TelescopeRegularDuotone as SiTelescopeRegularDuotone };
export default TelescopeRegularDuotone;
export type { TelescopeRegularDuotoneProps };
