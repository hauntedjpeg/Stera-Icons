import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WandRegularProps = Omit<IconBaseProps, 'children'>;

const WandRegular = memo(
  forwardRef<SVGSVGElement, WandRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M15.63 7.35c.3-.17.66-.12.9.12s.29.6.12.9l-1.07 1.91c-.6 1.07-.6 2.37 0 3.44l1.07 1.91c.17.3.12.66-.12.9s-.6.29-.9.12l-1.91-1.07c-1.07-.6-2.37-.6-3.44 0l-1.19.67q-.63.35-1.15.87l-3.91 3.91q-.16.17-.39.2-.15.03-.28 0-.23-.03-.39-.2c-.3-.3-.3-.77 0-1.06l3.91-3.91q.52-.52.87-1.15l.46-.82.2-.37c.6-1.07.6-2.37 0-3.44L7.36 8.37c-.17-.3-.12-.66.12-.9s.6-.29.9-.12l1.91 1.07c1.07.6 2.37.6 3.44 0zM14.1 9.9c-1.33.6-2.85.6-4.18 0 .6 1.33.6 2.85 0 4.18 1.33-.6 2.85-.6 4.18 0-.6-1.33-.6-2.85 0-4.18" clipRule="evenodd" />
        <path d="M17.97 17.97c.3-.3.77-.3 1.06 0l1 1c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1-1c-.3-.3-.3-.77 0-1.06M6 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 2.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75M3.97 3.97c.3-.3.77-.3 1.06 0l1 1c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1-1c-.3-.3-.3-.77 0-1.06M18.97 3.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1 1c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

WandRegular.displayName = 'WandRegular';

// Triple export pattern
export { WandRegular, WandRegular as WandRegularIcon, WandRegular as SiWandRegular };
export default WandRegular;
export type { WandRegularProps };
