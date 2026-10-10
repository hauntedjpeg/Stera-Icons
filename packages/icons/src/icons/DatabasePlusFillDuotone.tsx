import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabasePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabasePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.13 13.51q.53.34 1.15.62c1.27.56 2.85.96 4.6 1.14q-.12.34-.13.73c0 1.24 1.01 2.25 2.25 2.25h1.75V20c0 .68.3 1.29.78 1.7q-1.2.17-2.53.18c-2.01 0-3.87-.32-5.26-.85q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v5.5l-.22.25q-.47.5-1.4.96V12c0-1.24-1.01-2.25-2.26-2.25s-2.25 1-2.25 2.25v1.54q-.85.09-1.75.09c-2.4 0-4.52-.44-6-1.1q-1.13-.5-1.66-1.08-.13-.13-.21-.26V5.7c0-.7.37-1.28.83-1.7s1.08-.76 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4s.01.18.26.4q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.25-.22.26-.36.27-.4 0-.04-.02-.18-.27-.4q-.37-.35-1.23-.7c-1.14-.43-2.78-.72-4.63-.72" clipRule="evenodd" opacity={0.4} />
        <path d="M16 11.13c.49 0 .88.39.88.87v3.13H20c.49 0 .88.39.88.87s-.4.88-.88.88h-3.12V20c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3.12H12c-.48 0-.87-.4-.87-.88s.4-.87.87-.87h3.13V12c0-.48.4-.87.87-.87" />
    </IconBase>
  ))
);

DatabasePlusFillDuotone.displayName = 'DatabasePlusFillDuotone';

// Triple export pattern
export { DatabasePlusFillDuotone, DatabasePlusFillDuotone as DatabasePlusFillDuotoneIcon, DatabasePlusFillDuotone as SiDatabasePlusFillDuotone };
export default DatabasePlusFillDuotone;
export type { DatabasePlusFillDuotoneProps };
