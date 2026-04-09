import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabaseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseFillDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-fill-duotone" {...props}>
      <path d="M18.13 18.3c0 .04-.02.18-.27.4q-.37.35-1.23.7a13 13 0 0 1-4.63.73c-1.85 0-3.5-.3-4.63-.74a4 4 0 0 1-1.23-.69c-.25-.22-.26-.36-.26-.4v-4.27q.4.22.86.4c1.39.53 3.25.85 5.26.85s3.87-.32 5.26-.85q.46-.18.86-.4zM18.13 11.7l-.01.05c-.02.07-.07.19-.26.35q-.37.35-1.23.7a13 13 0 0 1-4.63.73c-1.85 0-3.5-.3-4.63-.74a4 4 0 0 1-1.23-.69c-.19-.16-.24-.28-.26-.35V8.03q.4.22.86.4c1.39.53 3.25.85 5.26.85s3.87-.32 5.26-.85q.46-.18.86-.4zM12 3.88c1.85 0 3.5.29 4.63.73q.86.34 1.23.69c.25.22.27.36.27.4s-.02.18-.27.4q-.37.35-1.23.7a13 13 0 0 1-4.63.73c-1.85 0-3.5-.3-4.63-.74a4 4 0 0 1-1.23-.69c-.25-.22-.26-.36-.26-.4s.01-.18.26-.4q.37-.35 1.23-.7A13 13 0 0 1 12 3.89" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v12.6c0 .7-.38 1.28-.84 1.7q-.71.63-1.78 1.03c-1.39.53-3.25.84-5.26.84s-3.87-.3-5.26-.84q-1.07-.4-1.78-1.03c-.46-.42-.83-1-.83-1.7V5.7c0-.7.37-1.28.83-1.7a6 6 0 0 1 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m6.13 11.9q-.4.22-.87.4c-1.39.53-3.25.85-5.26.85s-3.87-.32-5.26-.85q-.46-.18-.87-.4v4.27c0 .04.02.18.27.4q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.25-.22.27-.36.27-.4zm0-6q-.4.22-.87.4c-1.39.53-3.25.85-5.26.85s-3.87-.32-5.26-.85q-.46-.18-.87-.4v3.67l.01.05c.02.07.07.19.26.35q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.19-.16.24-.28.26-.35V8.03M12 3.88c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4s.01.18.26.4q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.25-.22.26-.36.27-.4 0-.04-.02-.18-.27-.4a4 4 0 0 0-1.23-.7A13 13 0 0 0 12 3.89" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseFillDuotone.displayName = 'DatabaseFillDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseFillDuotone, DatabaseFillDuotone as DatabaseFillDuotoneIcon, DatabaseFillDuotone as SiDatabaseFillDuotone };
export default DatabaseFillDuotone;
export type { DatabaseFillDuotoneProps };
