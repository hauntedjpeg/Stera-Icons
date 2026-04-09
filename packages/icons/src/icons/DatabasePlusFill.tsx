import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabasePlusFillProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusFill = memo(
  forwardRef<SVGSVGElement, DatabasePlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-plus-fill" {...props}>
      <path d="M4.13 13.51q.53.34 1.15.62c1.27.56 2.85.96 4.6 1.14A2.24 2.24 0 0 0 12 18.25h1.75V20c0 .68.3 1.29.78 1.7q-1.2.17-2.53.18c-2.01 0-3.87-.32-5.26-.85q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7z" />
        <path d="M16 11.13c.49 0 .88.39.88.87v3.13H20a.88.88 0 0 1 0 1.74h-3.12V20a.88.88 0 0 1-1.75 0v-3.12H12a.87.87 0 1 1 0-1.75h3.13V12c0-.48.4-.87.87-.87" />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v5.5l-.22.25q-.47.5-1.4.96V12a2.25 2.25 0 0 0-4.5 0v1.54q-.86.09-1.76.09c-2.4 0-4.52-.44-6-1.1a5 5 0 0 1-1.66-1.08l-.21-.26V5.7c0-.7.37-1.28.83-1.7a6 6 0 0 1 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4s.01.18.26.4q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.25-.22.26-.36.27-.4 0-.04-.02-.18-.27-.4a4 4 0 0 0-1.23-.7A13 13 0 0 0 12 3.89" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabasePlusFill.displayName = 'DatabasePlusFill';

// Triple export pattern (lucide-react style)
export { DatabasePlusFill, DatabasePlusFill as DatabasePlusFillIcon, DatabasePlusFill as SiDatabasePlusFill };
export default DatabasePlusFill;
export type { DatabasePlusFillProps };
