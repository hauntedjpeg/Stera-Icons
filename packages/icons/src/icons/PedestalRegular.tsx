import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalRegularProps = Omit<IconBaseProps, 'children'>;

const PedestalRegular = memo(
  forwardRef<SVGSVGElement, PedestalRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v1q0 .51-.02.88-.02.39-.2.78-.3.57-.87.87-.39.18-.78.2l-.43.02q.3.57.3 1.25c0 1.3-.9 2.37-2.1 2.67q.07.23.08.45.02.37.02.88v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5l-.01-.76-.04-.22q-.08-.15-.22-.22l-.22-.04-.76-.01H9l-.76.01-.22.04q-.15.08-.22.22l-.04.22-.01.76v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5q0-.51.02-.88.01-.22.07-.45c-1.2-.3-2.09-1.38-2.09-2.67q0-.68.3-1.25-.24 0-.43-.02-.39-.02-.78-.2-.57-.3-.87-.87-.18-.39-.2-.78-.02-.37-.02-.88V6q0-.51.02-.88.02-.39.2-.78.3-.57.87-.87.39-.18.78-.2.37-.02.88-.02zM7 9.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25S17.69 9.75 17 9.75zm-2-5-.76.01-.22.04q-.15.08-.22.22l-.04.22-.01.76v1l.01.76.04.22q.08.15.22.22l.22.04.76.01h14l.76-.01.22-.04q.15-.08.22-.22l.04-.22.01-.76V6l-.01-.76-.04-.22q-.08-.15-.22-.22l-.22-.04-.76-.01z" clipRule="evenodd" />
        <path d="M10.25 15.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75M13.75 15.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75S13 20.41 13 20v-4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PedestalRegular.displayName = 'PedestalRegular';

// Triple export pattern
export { PedestalRegular, PedestalRegular as PedestalRegularIcon, PedestalRegular as SiPedestalRegular };
export default PedestalRegular;
export type { PedestalRegularProps };
