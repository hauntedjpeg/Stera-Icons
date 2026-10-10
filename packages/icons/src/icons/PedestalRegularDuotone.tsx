import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PedestalRegularDuotone = memo(
  forwardRef<SVGSVGElement, PedestalRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.25 15.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75M13.75 15.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75S13 20.41 13 20v-4c0-.41.34-.75.75-.75M19.43 9.71q.31.58.32 1.29c0 1.52-1.23 2.75-2.75 2.75H7c-1.52 0-2.75-1.23-2.75-2.75q.01-.7.32-1.29.38.05.93.04H7c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25S17.69 9.75 17 9.75h1.5q.55.01.93-.04" opacity={0.4} />
        <path d="M6.25 13.64q.36.1.75.11h.75V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75zM17.75 20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.25H17q.39 0 .75-.1z" />
        <path fillRule="evenodd" d="M19 3.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v1q0 .51-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2-.36.02-.88.02H5q-.51 0-.88-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.37-.02-.88V6q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM5 4.75l-.76.01-.22.04q-.15.08-.22.22l-.04.22-.01.76v1l.01.76.04.22q.08.15.22.22l.22.04.76.01h14l.76-.01.22-.04q.15-.08.22-.22l.04-.22.01-.76V6l-.01-.76-.04-.22q-.08-.15-.22-.22l-.22-.04-.76-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

PedestalRegularDuotone.displayName = 'PedestalRegularDuotone';

// Triple export pattern
export { PedestalRegularDuotone, PedestalRegularDuotone as PedestalRegularDuotoneIcon, PedestalRegularDuotone as SiPedestalRegularDuotone };
export default PedestalRegularDuotone;
export type { PedestalRegularDuotoneProps };
