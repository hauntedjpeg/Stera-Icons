import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeRegularProps = Omit<IconBaseProps, 'children'>;

const TelescopeRegular = memo(
  forwardRef<SVGSVGElement, TelescopeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.13 2.6c1.06-.29 2.16.35 2.45 1.41L22 9.33c.29 1.06-.35 2.16-1.41 2.45l-1.7.45c-.82.22-1.66.04-2.31-.42l-1.96.36q.12.4.13.83c0 .8-.35 1.52-.9 2.03l2.82 5.63c.19.38.04.83-.34 1.01-.37.19-.82.04-1-.34L12.5 15.7q-.25.05-.51.05-.27 0-.51-.05l-2.82 5.63c-.18.38-.63.53-1 .34-.38-.18-.53-.63-.34-1l2.82-5.64c-.51-.47-.85-1.12-.9-1.85l-4.28.8c-1.03.2-2.03-.44-2.3-1.45l-.43-1.63c-.27-1 .28-2.06 1.26-2.4l11.14-3.92c.33-.73.97-1.3 1.8-1.53zM12 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M4 9.91c-.25.09-.38.35-.32.6l.44 1.63c.07.25.32.41.58.36l2-.37-.77-2.9zm3.35-1.18.83 3.12 1.47-.27c.48-.8 1.35-1.33 2.35-1.33q.96.02 1.67.57l1.9-.35-.04-.17v-.02l-1.04-3.86v-.01l-.05-.17zm11.17-4.68-1.7.45c-.66.18-1.06.86-.88 1.53l1.04 3.87c.18.66.86 1.06 1.53.88l1.69-.45c.26-.07.42-.35.35-.62l-1.42-5.3c-.07-.28-.35-.43-.61-.36" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeRegular.displayName = 'TelescopeRegular';

// Triple export pattern
export { TelescopeRegular, TelescopeRegular as TelescopeRegularIcon, TelescopeRegular as SiTelescopeRegular };
export default TelescopeRegular;
export type { TelescopeRegularProps };
