import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, SquareSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.98 17.93q-.21.3-.48.58-.26.26-.58.48L5.02 6.08q.21-.31.47-.58.27-.27.58-.49z" opacity={.4} />
        <path fillRule="evenodd" d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27q-.41.81-1.06 1.46-.63.64-1.45 1.05c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-1c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27q.41-.82 1.05-1.45.65-.65 1.46-1.06c.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-1 1.5c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4q-.6.3-1.08.78-.46.46-.78 1.07c-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4q.6-.3 1.07-.77t.79-1.08c.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-1c0-1.41 0-2.43-.07-3.22-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquareSlashRegularDuotone.displayName = 'SquareSlashRegularDuotone';

// Triple export pattern
export { SquareSlashRegularDuotone, SquareSlashRegularDuotone as SquareSlashRegularDuotoneIcon, SquareSlashRegularDuotone as SiSquareSlashRegularDuotone };
export default SquareSlashRegularDuotone;
export type { SquareSlashRegularDuotoneProps };
