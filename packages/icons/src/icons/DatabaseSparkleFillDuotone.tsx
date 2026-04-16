import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.13 13.51q.53.34 1.15.62c1.08.48 2.39.84 3.83 1.04-.41 1.2.1 2.67 1.54 3.15l1.08.37a2.5 2.5 0 0 1 1.58 1.58l.37 1.08q.07.23.18.43-.9.1-1.86.1c-2.01 0-3.87-.32-5.26-.85q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v5.5l-.22.25q-.3.33-.82.64l-.15-.36-.37-1.08-.07-.2a2.45 2.45 0 0 0-4.5 0l-.07.2-.37 1.08a2.5 2.5 0 0 1-1.58 1.58l-.83.28A14 14 0 0 1 6 12.53a5 5 0 0 1-1.66-1.08l-.21-.26V5.7c0-.7.37-1.28.83-1.7a6 6 0 0 1 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4s.01.18.26.4q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.25-.22.26-.36.27-.4 0-.04-.02-.18-.27-.4a4 4 0 0 0-1.23-.7A13 13 0 0 0 12 3.89" clipRule="evenodd" opacity={0.4} />
        <path d="M15.57 11.28a.45.45 0 0 1 .86 0l.36 1.09a4.5 4.5 0 0 0 2.84 2.84l1.09.36c.4.14.4.72 0 .86l-1.09.36a4.5 4.5 0 0 0-2.84 2.84l-.36 1.09a.45.45 0 0 1-.86 0l-.36-1.09a4.5 4.5 0 0 0-2.84-2.84l-1.09-.36a.45.45 0 0 1 0-.86l1.09-.36a4.5 4.5 0 0 0 2.84-2.84z" />
    </IconBase>
  ))
);

DatabaseSparkleFillDuotone.displayName = 'DatabaseSparkleFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseSparkleFillDuotone, DatabaseSparkleFillDuotone as DatabaseSparkleFillDuotoneIcon, DatabaseSparkleFillDuotone as SiDatabaseSparkleFillDuotone };
export default DatabaseSparkleFillDuotone;
export type { DatabaseSparkleFillDuotoneProps };
