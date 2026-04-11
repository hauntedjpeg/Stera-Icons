import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CpuAmdRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CpuAmdRegularDuotone = memo(
  forwardRef<SVGSVGElement, CpuAmdRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.5 1.25c.41 0 .75.34.75.75v2.04q.15 0 .29.02 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87l.02.29H22a.75.75 0 0 1 0 1.5h-2v3.5h2a.75.75 0 0 1 0 1.5h-2.04q0 .15-.02.29a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46l-.29.02V22a.75.75 0 0 1-1.5 0v-2h-3.5v2a.75.75 0 0 1-1.5 0v-2.04q-.15 0-.29-.02a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87l-.02-.29H2a.75.75 0 0 1 0-1.5h2v-3.5H2a.75.75 0 0 1 0-1.5h2.04q0-.15.02-.29.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46l.29-.02V2a.75.75 0 0 1 1.5 0v2h3.5V2c0-.41.34-.75.75-.75M11.15 5.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v1.7c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h1.7c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-1.7c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M14 7.25q.51 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.36.02.88v1.67q.02.4-.06.78a2 2 0 0 1-.23.58q-.21.32-.52.59l-2.32 2.32c-.2.2-.37.38-.6.52a2 2 0 0 1-.57.23q-.37.07-.78.06H10q-.52 0-.88-.02a2 2 0 0 1-.78-.2 2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.78q-.02-.37-.02-.88v-4q0-.52.02-.88.02-.39.2-.78a2 2 0 0 1 .87-.87q.39-.18.78-.2.36-.02.88-.02zm-4 1.5-.76.01a1 1 0 0 0-.22.04.5.5 0 0 0-.22.22l-.04.22-.01.76v4l.01.76.04.22q.08.15.22.22l.22.04.76.01h1.67l.43-.01.14-.06c.04-.02.07-.05.32-.3l2.32-2.32c.25-.25.28-.28.3-.32l.06-.14.01-.43V10l-.01-.76a1 1 0 0 0-.04-.22.5.5 0 0 0-.22-.22 1 1 0 0 0-.22-.04L14 8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CpuAmdRegularDuotone.displayName = 'CpuAmdRegularDuotone';

// Triple export pattern (lucide-react style)
export { CpuAmdRegularDuotone, CpuAmdRegularDuotone as CpuAmdRegularDuotoneIcon, CpuAmdRegularDuotone as SiCpuAmdRegularDuotone };
export default CpuAmdRegularDuotone;
export type { CpuAmdRegularDuotoneProps };
