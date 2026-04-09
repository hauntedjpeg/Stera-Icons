import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoxRegularProps = Omit<IconBaseProps, 'children'>;

const CursorBoxRegular = memo(
  forwardRef<SVGSVGElement, CursorBoxRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-box" {...props}>
      <path fillRule="evenodd" d="m12.84 11.32.2.04 7.8 2.61c1.23.4 1.2 2.15-.04 2.52l-3.33.98-.98 3.33a1.32 1.32 0 0 1-2.52.05l-2.6-7.82a1.32 1.32 0 0 1 1.47-1.71m2.37 8.5.93-3.17a.8.8 0 0 1 .51-.5l3.18-.94-6.93-2.3z" clipRule="evenodd" />
        <path d="M14.1 2.75q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v.81a.75.75 0 0 1-1.5 0V9.9c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05H9.9c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v4.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h.8a.75.75 0 0 1 0 1.5h-.8q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V9.9q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" />
    </IconBase>
  ))
);

CursorBoxRegular.displayName = 'CursorBoxRegular';

// Triple export pattern (lucide-react style)
export { CursorBoxRegular, CursorBoxRegular as CursorBoxRegularIcon, CursorBoxRegular as SiCursorBoxRegular };
export default CursorBoxRegular;
export type { CursorBoxRegularProps };
