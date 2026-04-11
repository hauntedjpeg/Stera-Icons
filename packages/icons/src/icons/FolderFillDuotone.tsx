import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.37 9.62H2.63V7.7q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04h2.47c.45 0 .82 0 1.17.08q.45.12.83.35c.31.19.57.45.89.77l.12.12c.38.38.47.46.56.52q.15.09.33.13c.1.03.22.03.76.03h3.47q.82-.01 1.38.04.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.04.54.03 1.3" opacity={.4} />
        <path d="M21.38 14.7q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.3q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.63h18.75z" />
    </IconBase>
  ))
);

FolderFillDuotone.displayName = 'FolderFillDuotone';

// Triple export pattern (lucide-react style)
export { FolderFillDuotone, FolderFillDuotone as FolderFillDuotoneIcon, FolderFillDuotone as SiFolderFillDuotone };
export default FolderFillDuotone;
export type { FolderFillDuotoneProps };
