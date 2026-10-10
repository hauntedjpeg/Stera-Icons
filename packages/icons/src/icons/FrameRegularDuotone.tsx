import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FrameRegularDuotone = memo(
  forwardRef<SVGSVGElement, FrameRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.75 7.25h1.5v9.5h-1.5v1.5h-9.5v-1.5h-1.5v-9.5h1.5v-1.5h9.5zm-9.5 9.5h9.5v-9.5h-9.5z" clipRule="evenodd" opacity={.4} />
        <path d="M7.25 21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25zM21 16.75c.41 0 .75.34.75.75s-.34.75-.75.75h-2.75V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.25zM6.5 2.25c.41 0 .75.34.75.75v4.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75V3c0-.41.34-.75.75-.75M17.5 2.25c.41 0 .75.34.75.75v2.75H21c.41 0 .75.34.75.75s-.34.75-.75.75h-4.25V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

FrameRegularDuotone.displayName = 'FrameRegularDuotone';

// Triple export pattern
export { FrameRegularDuotone, FrameRegularDuotone as FrameRegularDuotoneIcon, FrameRegularDuotone as SiFrameRegularDuotone };
export default FrameRegularDuotone;
export type { FrameRegularDuotoneProps };
