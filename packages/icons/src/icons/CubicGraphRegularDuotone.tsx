import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubicGraphRegularDuotone = memo(
  forwardRef<SVGSVGElement, CubicGraphRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 20.2c.42 0 .75.34.75.76V21c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75v-.05c0-.42.34-.75.75-.75M12 17.2c.42 0 .75.34.75.76v.1c0 .4-.33.74-.75.74-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74M12 14.2c.42 0 .75.34.75.76v.1c0 .4-.33.74-.75.74-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74M12.65 11.56q.15.19.15.44-.01.27-.17.47-.22.31-.63.33l-.15-.01.24-.38zM3.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM6.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.05c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 8.2c.39 0 .7.3.75.67q-.37.46-.7.93H12c-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74M12 5.2c.42 0 .75.34.75.76v.1c0 .4-.33.74-.75.74-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74M12 2.26c.42 0 .75.33.75.75v.04c0 .42-.33.75-.75.75-.4 0-.75-.33-.75-.75v-.04c0-.42.34-.75.75-.75" opacity={0.4} />
        <path fillRule="evenodd" d="M21 4.25c.41 0 .75.34.75.75s-.34.75-.75.75c-4.19 0-6.61 3.13-8.91 6.66-1.11 1.71-2.21 3.53-3.44 4.9C7.41 18.7 5.93 19.75 4 19.75l-.12-.01h.08-.8l-.11.01H3c-.41 0-.75-.33-.75-.75 0-.41.33-.75.75-.75H4c1.31 0 2.42-.7 3.53-1.94 1.12-1.25 2.13-2.93 3.3-4.72C13.08 8.12 15.91 4.25 21 4.25M3.78 19.72h.04l-.07-.01zm-.24-.12.05.02q-.03 0-.06-.04zm-.17-1v-.02zm.23-.24.06-.02zm.13-.06H3.7l.12-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

CubicGraphRegularDuotone.displayName = 'CubicGraphRegularDuotone';

// Triple export pattern
export { CubicGraphRegularDuotone, CubicGraphRegularDuotone as CubicGraphRegularDuotoneIcon, CubicGraphRegularDuotone as SiCubicGraphRegularDuotone };
export default CubicGraphRegularDuotone;
export type { CubicGraphRegularDuotoneProps };
