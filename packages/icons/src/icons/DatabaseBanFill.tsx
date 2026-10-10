import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseBanFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanFill = memo(
  forwardRef<SVGSVGElement, DatabaseBanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.13 13.51q.53.34 1.15.62c1.25.55 2.8.94 4.51 1.13q-.03.36-.04.74c0 2.63 1.62 4.87 3.92 5.8q-.81.07-1.67.07c-2.01 0-3.87-.3-5.26-.84q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7z" />
        <path fillRule="evenodd" d="M16 11.13c2.7 0 4.88 2.18 4.88 4.87 0 1.35-.55 2.57-1.43 3.45s-2.1 1.43-3.45 1.43c-2.7 0-4.87-2.19-4.87-4.88 0-1.35.54-2.57 1.42-3.45s2.1-1.43 3.45-1.43m-2.74 3.37q-.38.67-.38 1.5c0 1.73 1.4 3.13 3.12 3.13q.83-.01 1.5-.4zM16 12.88q-.83 0-1.5.38l4.24 4.24q.38-.67.39-1.5c0-1.73-1.4-3.12-3.13-3.12" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v5.4c-1.07-.85-2.42-1.35-3.88-1.35-2.58 0-4.8 1.56-5.75 3.8-1.67-.16-3.14-.52-4.26-1.02q-1.12-.5-1.65-1.08-.13-.13-.21-.26V5.7c0-.7.37-1.28.83-1.7s1.08-.76 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4q-.01.04.04.13.03.08.14.2l.08.07q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69l.08-.08q.1-.11.14-.19t.05-.13c0-.04-.02-.18-.27-.4q-.37-.35-1.23-.7c-1.14-.43-2.78-.72-4.63-.72" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanFill.displayName = 'DatabaseBanFill';

// Triple export pattern
export { DatabaseBanFill, DatabaseBanFill as DatabaseBanFillIcon, DatabaseBanFill as SiDatabaseBanFill };
export default DatabaseBanFill;
export type { DatabaseBanFillProps };
