import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeRegularProps = Omit<IconBaseProps, 'children'>;

const TelescopeRegular = memo(
  forwardRef<SVGSVGElement, TelescopeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.13 2.6c1.06-.29 2.16.35 2.45 1.41L22 9.32c.29 1.07-.35 2.17-1.41 2.46l-1.7.45c-.82.22-1.66.04-2.31-.43l-1.96.37q.13.4.13.83c0 .8-.35 1.53-.9 2.03l2.82 5.63c.19.37.04.83-.33 1.01s-.82.04-1.01-.34l-2.82-5.63q-.24.05-.5.05-.27 0-.52-.05l-2.82 5.63c-.18.38-.63.53-1 .34-.38-.18-.53-.64-.34-1l2.82-5.64c-.51-.47-.85-1.12-.9-1.85l-4.28.8c-1.03.19-2.03-.44-2.3-1.45l-.44-1.63c-.27-1 .29-2.06 1.27-2.4l11.14-3.93c.33-.72.97-1.3 1.8-1.52zM12 11.75c-.52 0-.97.32-1.16.78q-.09.21-.09.47c0 .49.28.91.7 1.12q.25.13.55.13t.56-.13c.41-.2.7-.63.7-1.12q-.02-.5-.35-.86-.36-.38-.9-.39M4 9.91c-.25.09-.38.35-.32.6l.44 1.63c.07.25.32.41.57.36l2.01-.37-.77-2.9zm3.35-1.18.83 3.12 1.47-.27c.48-.8 1.35-1.33 2.35-1.33.63 0 1.21.22 1.67.57l1.9-.35-1.13-4.23zm11.17-4.68-1.7.45c-.66.18-1.06.86-.88 1.53l1.04 3.87c.18.66.86 1.06 1.53.88l1.69-.45c.26-.08.42-.35.35-.62l-1.42-5.3c-.07-.28-.35-.43-.61-.36" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeRegular.displayName = 'TelescopeRegular';

// Triple export pattern
export { TelescopeRegular, TelescopeRegular as TelescopeRegularIcon, TelescopeRegular as SiTelescopeRegular };
export default TelescopeRegular;
export type { TelescopeRegularProps };
