import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseBanFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanFill = memo(
  forwardRef<SVGSVGElement, DatabaseBanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.13 13.51q.53.34 1.15.62c1.25.55 2.8.94 4.51 1.13q-.03.36-.04.74a6.25 6.25 0 0 0 3.92 5.8q-.81.07-1.67.07c-2.01 0-3.87-.3-5.26-.84q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7z" />
        <path fillRule="evenodd" d="M16 11.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75m-2.74 3.37a3.12 3.12 0 0 0 4.24 4.24zM16 12.88a3 3 0 0 0-1.5.38l4.24 4.24q.38-.67.39-1.5c0-1.73-1.4-3.12-3.13-3.12" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v5.4a6.25 6.25 0 0 0-9.62 2.45 14 14 0 0 1-4.27-1.02 5 5 0 0 1-1.65-1.08l-.21-.26V5.7c0-.7.37-1.28.83-1.7a6 6 0 0 1 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4q-.01.04.04.13.03.08.14.2l.08.07q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74a4 4 0 0 0 1.31-.77l.14-.19.05-.13c0-.04-.02-.18-.27-.4a4 4 0 0 0-1.23-.7A13 13 0 0 0 12 3.89" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanFill.displayName = 'DatabaseBanFill';

// Triple export pattern (lucide-react style)
export { DatabaseBanFill, DatabaseBanFill as DatabaseBanFillIcon, DatabaseBanFill as SiDatabaseBanFill };
export default DatabaseBanFill;
export type { DatabaseBanFillProps };
