import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.38 14.7q0 .85-.02 1.5-.16-.08-.36-.08h-2.13V14c0-.48-.4-.87-.87-.87-.49 0-.88.39-.88.87v2.12H15c-.48 0-.87.4-.87.88s.39.87.87.87h2.12V20q0 .2.08.36l-1.5.02H8.3q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.63h18.75z" opacity={.4} />
        <path d="M18 13.12c.48 0 .87.4.87.88v2.12H21c.48 0 .88.4.88.88s-.4.87-.88.87h-2.13V20c0 .48-.4.87-.87.87-.49 0-.88-.39-.88-.87v-2.13H15c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88h2.12V14c0-.48.4-.88.88-.88M9.17 3.62c.45 0 .82 0 1.17.08q.45.12.83.35c.31.19.57.45.89.77l.12.12c.38.38.47.46.56.52q.15.09.33.13c.1.03.22.03.76.03h3.47q.82-.01 1.38.04.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.04.54.03 1.3H2.63V7.7q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04z" />
    </IconBase>
  ))
);

FolderPlusFillDuotone.displayName = 'FolderPlusFillDuotone';

// Triple export pattern
export { FolderPlusFillDuotone, FolderPlusFillDuotone as FolderPlusFillDuotoneIcon, FolderPlusFillDuotone as SiFolderPlusFillDuotone };
export default FolderPlusFillDuotone;
export type { FolderPlusFillDuotoneProps };
