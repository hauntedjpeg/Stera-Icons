import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CpuBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CpuBoldDuotone = memo(
  forwardRef<SVGSVGElement, CpuBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.5 1a1 1 0 0 1 1 1v1.8h.06c.73.07 1.37.2 1.96.5a5 5 0 0 1 2.19 2.18c.3.6.42 1.23.48 1.96v.06H22a1 1 0 1 1 0 2h-1.75v3H22a1 1 0 1 1 0 2h-1.8v.06a5 5 0 0 1-.5 1.96 5 5 0 0 1-2.18 2.19c-.6.3-1.23.42-1.96.48h-.06V22a1 1 0 1 1-2 0v-1.75h-3V22a1 1 0 1 1-2 0v-1.8h-.06a5 5 0 0 1-1.96-.5 5 5 0 0 1-2.19-2.18c-.3-.6-.42-1.23-.48-1.96v-.06H2a1 1 0 1 1 0-2h1.75v-3H2a1 1 0 1 1 0-2h1.8v-.06c.07-.73.2-1.37.5-1.96a5 5 0 0 1 2.18-2.19c.6-.3 1.23-.42 1.96-.48h.06V2a1 1 0 0 1 2 0v1.75h3V2a1 1 0 0 1 1-1m-3.35 4.75c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3A3 3 0 0 0 5.8 8.6c-.05.62-.05 1.41-.05 2.55v1.7c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h1.7c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-1.7c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28c-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13.5 7.5q.5 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v3q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02h-3q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.02-.4-.02-.9v-3q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17.4-.02.9-.02zm-3 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v3l.03.87q.04.06.1.1l.13.02.74.01h3l.87-.03a.3.3 0 0 0 .1-.1l.02-.13.01-.74v-3l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

CpuBoldDuotone.displayName = 'CpuBoldDuotone';

// Triple export pattern (lucide-react style)
export { CpuBoldDuotone, CpuBoldDuotone as CpuBoldDuotoneIcon, CpuBoldDuotone as SiCpuBoldDuotone };
export default CpuBoldDuotone;
export type { CpuBoldDuotoneProps };
