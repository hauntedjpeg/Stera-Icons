import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDashRegular = memo(
  forwardRef<SVGSVGElement, CircleDashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.61 20.1c.4-.09.8.18.88.58.08.41-.18.8-.59.88q-.92.2-1.9.19-.98 0-1.9-.19c-.4-.08-.67-.47-.6-.88.09-.4.48-.67.89-.59q.78.16 1.61.16t1.61-.16M4.1 16.38c.34-.23.8-.14 1.04.2q.92 1.36 2.28 2.28c.34.23.43.7.2 1.04s-.7.44-1.04.2c-1.06-.7-1.98-1.62-2.69-2.68-.23-.35-.14-.81.2-1.04M18.86 16.58c.23-.34.7-.43 1.04-.2s.44.7.2 1.04c-.7 1.06-1.62 1.98-2.68 2.69-.35.23-.81.14-1.04-.2s-.14-.82.2-1.05q1.36-.91 2.28-2.28M2.44 10.1c.08-.4.47-.67.88-.6.4.09.67.48.59.89q-.16.78-.16 1.61t.16 1.61c.08.4-.19.8-.6.88s-.8-.18-.87-.59q-.2-.92-.19-1.9 0-.98.19-1.9M20.68 9.5c.41-.07.8.2.88.6q.2.92.19 1.9 0 .98-.19 1.9c-.08.4-.47.67-.88.6-.4-.09-.67-.48-.59-.89q.16-.78.16-1.61t-.16-1.61c-.08-.4.19-.8.6-.88M6.58 3.9c.35-.24.81-.15 1.04.2s.14.8-.2 1.04q-1.37.92-2.28 2.28c-.23.34-.7.43-1.04.2s-.44-.7-.2-1.04C4.6 5.52 5.51 4.6 6.57 3.9M16.38 4.1c.23-.35.7-.44 1.04-.2 1.06.7 1.98 1.62 2.69 2.68.23.35.14.81-.2 1.04s-.82.14-1.05-.2q-.91-1.37-2.28-2.28c-.34-.23-.43-.7-.2-1.04M12 2.25q.98 0 1.9.19c.4.08.67.47.6.88-.09.4-.48.67-.89.59q-.78-.16-1.61-.16t-1.61.16c-.4.08-.8-.19-.88-.6s.18-.8.59-.87q.92-.2 1.9-.19" />
    </IconBase>
  ))
);

CircleDashRegular.displayName = 'CircleDashRegular';

// Triple export pattern
export { CircleDashRegular, CircleDashRegular as CircleDashRegularIcon, CircleDashRegular as SiCircleDashRegular };
export default CircleDashRegular;
export type { CircleDashRegularProps };
