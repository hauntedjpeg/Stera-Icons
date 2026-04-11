import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseFillProps = Omit<IconBaseProps, 'children'>;

const DatabaseFill = memo(
  forwardRef<SVGSVGElement, DatabaseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.88 18.3c0 .7-.38 1.28-.84 1.7q-.71.63-1.78 1.03c-1.39.53-3.25.84-5.26.84s-3.87-.3-5.26-.84q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7v-4.79q.53.34 1.15.62c1.76.78 4.14 1.24 6.72 1.24s4.96-.46 6.72-1.24q.62-.29 1.16-.62z" />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v5.5l-.22.25q-.52.57-1.65 1.08a15 15 0 0 1-6.01 1.1c-2.4 0-4.52-.44-6-1.1a5 5 0 0 1-1.66-1.08l-.21-.26V5.7c0-.7.37-1.28.83-1.7a6 6 0 0 1 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4s.01.18.26.4q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.25-.22.26-.36.27-.4 0-.04-.02-.18-.27-.4a4 4 0 0 0-1.23-.7A13 13 0 0 0 12 3.89" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseFill.displayName = 'DatabaseFill';

// Triple export pattern (lucide-react style)
export { DatabaseFill, DatabaseFill as DatabaseFillIcon, DatabaseFill as SiDatabaseFill };
export default DatabaseFill;
export type { DatabaseFillProps };
