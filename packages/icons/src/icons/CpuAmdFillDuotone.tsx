import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CpuAmdFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CpuAmdFillDuotone = memo(
  forwardRef<SVGSVGElement, CpuAmdFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.5 1.13c.48 0 .88.39.88.87v1.92l.17.01a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91v.18H22a.88.88 0 0 1 0 1.74h-1.88v3.26H22a.88.88 0 0 1 0 1.74h-1.92l-.01.18a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48h-.18V22a.88.88 0 0 1-1.74 0v-1.88h-3.26V22a.88.88 0 0 1-1.74 0v-1.92l-.18-.01a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91v-.18H2a.88.88 0 0 1 0-1.74h1.88v-3.26H2a.87.87 0 1 1 0-1.74h1.92l.01-.18a5 5 0 0 1 .48-1.91A5 5 0 0 1 6.54 4.4a5 5 0 0 1 1.91-.48h.18V2a.87.87 0 1 1 1.74 0v1.88h3.26V2c0-.48.39-.87.87-.87m-3.35 4.5c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26a35 35 0 0 0-.04 2.56v1.7c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h1.7c1.13 0 1.93 0 2.56-.06a3 3 0 0 0 1.26-.29q.9-.46 1.36-1.36c.15-.28.24-.65.3-1.26.04-.63.05-1.43.05-2.56v-1.7c0-1.13 0-1.93-.06-2.56a3 3 0 0 0-.29-1.26 3 3 0 0 0-1.36-1.36 3 3 0 0 0-1.26-.3 35 35 0 0 0-2.56-.04z" clipRule="evenodd" opacity={.4} />
        <path d="m14 7.13.9.01q.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89v1.67q.02.4-.06.8-.08.34-.26.62-.23.35-.53.61l-2.33 2.33q-.26.3-.6.53-.3.18-.62.26-.4.07-.8.05H10l-.9-.01a2 2 0 0 1-.81-.22q-.62-.32-.93-.93a2 2 0 0 1-.22-.82q-.02-.38-.01-.89v-4l.01-.9q.03-.4.22-.81.32-.62.93-.93.41-.2.82-.22.38-.02.89-.01z" />
    </IconBase>
  ))
);

CpuAmdFillDuotone.displayName = 'CpuAmdFillDuotone';

// Triple export pattern (lucide-react style)
export { CpuAmdFillDuotone, CpuAmdFillDuotone as CpuAmdFillDuotoneIcon, CpuAmdFillDuotone as SiCpuAmdFillDuotone };
export default CpuAmdFillDuotone;
export type { CpuAmdFillDuotoneProps };
