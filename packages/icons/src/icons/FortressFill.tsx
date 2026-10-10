import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FortressFillProps = Omit<IconBaseProps, 'children'>;

const FortressFill = memo(
  forwardRef<SVGSVGElement, FortressFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4 3.13c.33 0 .63.18.78.48l.76 1.52h.92l.76-1.52.06-.1c.16-.24.43-.38.72-.38h2c.48 0 .88.39.88.87v4.13h2.24V4c0-.48.4-.87.88-.87h2c.33 0 .63.18.78.48l.76 1.52h.92l.76-1.52.06-.1c.16-.24.43-.38.72-.38h2c.48 0 .88.39.88.87v15.13H23c.48 0 .88.39.88.87s-.4.88-.88.88h-9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.13V17c0-1.17-.96-2.12-2.13-2.12s-2.12.95-2.12 2.12v2.13H10c.48 0 .88.39.88.87s-.4.88-.88.88H1c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.13V4c0-.48.39-.87.87-.87zm2 5.5c-.48 0-.87.39-.87.87V11c0 .48.39.88.87.88s.88-.4.88-.88V9.5c0-.48-.4-.87-.88-.87m12 0c-.48 0-.87.39-.87.87V11c0 .48.39.88.87.88s.88-.4.88-.88V9.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

FortressFill.displayName = 'FortressFill';

// Triple export pattern
export { FortressFill, FortressFill as FortressFillIcon, FortressFill as SiFortressFill };
export default FortressFill;
export type { FortressFillProps };
