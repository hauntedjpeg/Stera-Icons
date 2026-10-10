import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphRegularProps = Omit<IconBaseProps, 'children'>;

const CubicGraphRegular = memo(
  forwardRef<SVGSVGElement, CubicGraphRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 20.2c.42 0 .75.34.75.76V21c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75v-.05c0-.42.34-.75.75-.75" />
        <path fillRule="evenodd" d="M21 4.25c.41 0 .75.34.75.75s-.34.75-.75.75c-3.85 0-6.2 2.64-8.35 5.81q.15.18.15.44-.01.27-.17.47-.22.31-.63.33-.07 0-.15-.02c-1.03 1.6-2.06 3.26-3.2 4.53C7.41 18.7 5.93 19.75 4 19.75l-.12-.01h.08-.8l-.11.01H3c-.41 0-.75-.33-.75-.75 0-.41.33-.75.75-.75H4c1.31 0 2.42-.7 3.53-1.94 1.12-1.25 2.13-2.93 3.3-4.72q.57-.9 1.2-1.79H12c-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74.39 0 .7.29.75.66 1.97-2.5 4.5-4.62 8.25-4.62M3.78 19.72h.04l-.07-.01zm-.24-.12.05.02q-.03 0-.06-.04zm-.17-1v-.02zm.23-.24.06-.02zm.13-.06H3.7l.12-.03z" clipRule="evenodd" />
        <path d="M12 17.2c.42 0 .75.34.75.76v.1c0 .4-.33.74-.75.74-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74M12 14.2c.42 0 .75.34.75.76v.1c0 .4-.33.74-.75.74-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74M3.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM6.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18.05 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.05c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 5.2c.42 0 .75.34.75.76v.1c0 .4-.33.74-.75.74-.4 0-.75-.33-.75-.75v-.1c0-.4.34-.74.75-.74M12 2.26c.42 0 .75.33.75.75v.04c0 .42-.33.75-.75.75-.4 0-.75-.33-.75-.75v-.04c0-.42.34-.75.75-.75" />
    </IconBase>
  ))
);

CubicGraphRegular.displayName = 'CubicGraphRegular';

// Triple export pattern
export { CubicGraphRegular, CubicGraphRegular as CubicGraphRegularIcon, CubicGraphRegular as SiCubicGraphRegular };
export default CubicGraphRegular;
export type { CubicGraphRegularProps };
