import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseXFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseXFill = memo(
  forwardRef<SVGSVGElement, DatabaseXFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-x-fill" {...props}>
      <path d="M4.13 13.51q.53.34 1.15.62c1.76.78 4.14 1.24 6.72 1.24q.91 0 1.76-.07l.2.2-.73.73a2.5 2.5 0 1 0 3.54 3.54l.73-.73.73.73q.27.25.57.42-.65.5-1.54.84c-1.39.53-3.25.84-5.26.84s-3.87-.3-5.26-.84q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7z" />
        <path d="M19.38 12.38a.88.88 0 0 1 1.24 1.24l-1.88 1.88 1.88 1.88a.88.88 0 0 1-1.24 1.24l-1.88-1.88-1.88 1.88a.88.88 0 0 1-1.24-1.24l1.88-1.88-1.88-1.88a.88.88 0 0 1 1.24-1.24l1.88 1.88z" />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v4.8c-.6.04-1.2.28-1.65.73l-.73.73-.73-.73a2.5 2.5 0 0 0-4.2 2.39H12c-2.4 0-4.52-.43-6-1.1a5 5 0 0 1-1.66-1.07l-.21-.26V5.7c0-.7.37-1.28.83-1.7a6 6 0 0 1 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4q-.01.04.04.13.03.08.14.2l.08.07q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74a4 4 0 0 0 1.31-.77l.14-.19.05-.13c0-.04-.02-.18-.27-.4a4 4 0 0 0-1.23-.7A13 13 0 0 0 12 3.89" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseXFill.displayName = 'DatabaseXFill';

// Triple export pattern (lucide-react style)
export { DatabaseXFill, DatabaseXFill as DatabaseXFillIcon, DatabaseXFill as SiDatabaseXFill };
export default DatabaseXFill;
export type { DatabaseXFillProps };
