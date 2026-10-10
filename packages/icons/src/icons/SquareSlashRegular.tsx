import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareSlashRegularProps = Omit<IconBaseProps, 'children'>;

const SquareSlashRegular = memo(
  forwardRef<SVGSVGElement, SquareSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27q-.41.81-1.06 1.46-.63.64-1.45 1.05c-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-1c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-1c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27q.41-.82 1.05-1.45.65-.65 1.46-1.06c.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM5.01 6.08l-.3.49c-.2.41-.33.92-.4 1.7-.06.8-.06 1.82-.06 3.23v1c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4q.26-.12.5-.3zm6.49-1.83c-1.41 0-2.43 0-3.22.07-.79.06-1.3.18-1.71.4q-.26.12-.5.3l12.91 12.9q.17-.23.3-.49c.22-.41.34-.92.4-1.7.07-.8.07-1.82.07-3.23v-1c0-1.41 0-2.43-.07-3.22-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquareSlashRegular.displayName = 'SquareSlashRegular';

// Triple export pattern
export { SquareSlashRegular, SquareSlashRegular as SquareSlashRegularIcon, SquareSlashRegular as SiSquareSlashRegular };
export default SquareSlashRegular;
export type { SquareSlashRegularProps };
