import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameRegularProps = Omit<IconBaseProps, 'children'>;

const FrameRegular = memo(
  forwardRef<SVGSVGElement, FrameRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 2.25c.41 0 .75.34.75.75v2.75H21c.41 0 .75.34.75.75s-.34.75-.75.75h-2.75v9.5H21c.41 0 .75.34.75.75s-.34.75-.75.75h-2.75V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75h-9.5V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75v-9.5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75V3c0-.41.34-.75.75-.75s.75.34.75.75v2.75h9.5V3c0-.41.34-.75.75-.75M7.25 16.75h9.5v-9.5h-9.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FrameRegular.displayName = 'FrameRegular';

// Triple export pattern
export { FrameRegular, FrameRegular as FrameRegularIcon, FrameRegular as SiFrameRegular };
export default FrameRegular;
export type { FrameRegularProps };
