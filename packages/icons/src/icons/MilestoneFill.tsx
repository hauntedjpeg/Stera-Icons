import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MilestoneFillProps = Omit<IconBaseProps, 'children'>;

const MilestoneFill = memo(
  forwardRef<SVGSVGElement, MilestoneFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c.48 0 .88.39.88.87v2.25h4.37c.66 0 1.3.24 1.81.68l3 2.63c.57.5.57 1.38 0 1.88l-3 2.63c-.5.44-1.15.68-1.81.68h-4.37V21c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-7.25H5c-1.52 0-2.75-1.23-2.75-2.75V8c0-1.52 1.23-2.75 2.75-2.75h6.13V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

MilestoneFill.displayName = 'MilestoneFill';

// Triple export pattern
export { MilestoneFill, MilestoneFill as MilestoneFillIcon, MilestoneFill as SiMilestoneFill };
export default MilestoneFill;
export type { MilestoneFillProps };
