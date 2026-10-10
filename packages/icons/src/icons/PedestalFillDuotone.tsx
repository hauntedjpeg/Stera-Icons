import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PedestalFillDuotone = memo(
  forwardRef<SVGSVGElement, PedestalFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.25 15.13c.48 0 .88.39.88.87v4c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-4c0-.48.39-.87.87-.87M13.75 15.13c.48 0 .88.39.88.87v4c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-4c0-.48.39-.87.87-.87M17 9.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13H7c-.62 0-1.12-.5-1.12-1.13S6.38 9.88 7 9.88zM19 4.88h.75l.17.04q.11.05.16.16 0 0 .03.17l.02.75v1q0 .53-.02.75 0 .17-.03.17-.05.11-.16.16 0 0-.17.03l-.75.02H5q-.53 0-.75-.02-.17 0-.17-.03-.11-.05-.16-.16 0 0-.03-.17L3.87 7V6q0-.53.02-.75 0-.17.03-.17.05-.11.16-.16 0 0 .17-.03L5 4.88z" opacity={0.4} />
        <path fillRule="evenodd" d="m19 3.13.9.01q.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89v1q0 .51-.02.9c-.03.26-.07.54-.22.81q-.32.62-.93.93-.41.2-.82.22h-.25q.23.53.23 1.14c0 1.3-.87 2.4-2.07 2.76q.05.18.06.35.02.38.02.89v5c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-5q0-.52-.02-.75 0-.17-.03-.17-.05-.11-.16-.16 0 0-.17-.03l-.75-.02H9q-.52 0-.75.02-.17 0-.17.03-.11.05-.16.16 0 0-.03.17l-.01.75v5c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-5l.01-.9.05-.34C5 13.4 4.13 12.3 4.13 11q0-.61.23-1.13l-.25-.01q-.41-.03-.82-.22-.62-.31-.93-.93-.2-.41-.22-.82-.02-.38-.01-.89V6l.01-.9q.03-.4.22-.81.32-.62.93-.93.41-.2.82-.22.38-.02.89-.01zM7 9.88c-.62 0-1.12.5-1.12 1.12s.5 1.13 1.12 1.13h10c.62 0 1.13-.5 1.13-1.13s-.5-1.12-1.13-1.12zm-2-5h-.75l-.17.04q-.11.05-.16.16 0 0-.03.17L3.88 6v1.75l.04.17q.05.11.16.16 0 0 .17.03l.75.02h14q.52 0 .75-.02.17 0 .17-.03.11-.05.16-.16 0 0 .03-.17l.02-.75V6q0-.53-.02-.75 0-.17-.03-.17-.05-.11-.16-.16 0 0-.17-.03L19 4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

PedestalFillDuotone.displayName = 'PedestalFillDuotone';

// Triple export pattern
export { PedestalFillDuotone, PedestalFillDuotone as PedestalFillDuotoneIcon, PedestalFillDuotone as SiPedestalFillDuotone };
export default PedestalFillDuotone;
export type { PedestalFillDuotoneProps };
