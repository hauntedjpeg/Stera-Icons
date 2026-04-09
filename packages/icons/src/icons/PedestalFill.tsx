import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalFillProps = Omit<IconBaseProps, 'children'>;

const PedestalFill = memo(
  forwardRef<SVGSVGElement, PedestalFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-fill" {...props}>
      <path fillRule="evenodd" d="m19 3.13.9.01q.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89v1q0 .51-.02.9a2.13 2.13 0 0 1-1.14 1.75q-.42.18-.83.2l-.25.02a2.86 2.86 0 0 1-1.84 3.89q.05.18.06.35.02.38.02.89v5a.87.87 0 1 1-1.75 0v-5a11 11 0 0 0-.05-.92.4.4 0 0 0-.16-.16l-.17-.03-.75-.02H9a11 11 0 0 0-.92.05.4.4 0 0 0-.16.16l-.03.17-.01.75v5a.87.87 0 1 1-1.75 0v-5l.01-.9.05-.34a2.87 2.87 0 0 1-1.83-3.9H4.1a2 2 0 0 1-.82-.22q-.62-.31-.93-.93a2 2 0 0 1-.22-.82q-.02-.38-.01-.89V6l.01-.9q.03-.4.22-.81.32-.62.93-.93.41-.2.82-.22.38-.02.89-.01zM7 9.88a1.13 1.13 0 0 0 0 2.24h10a1.13 1.13 0 0 0 0-2.24z" clipRule="evenodd" />
        <path d="M10.25 15.13c.48 0 .88.39.88.87v4a.87.87 0 1 1-1.75 0v-4c0-.48.39-.87.87-.87M13.75 15.13c.48 0 .88.39.88.87v4a.87.87 0 1 1-1.76 0v-4c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

PedestalFill.displayName = 'PedestalFill';

// Triple export pattern (lucide-react style)
export { PedestalFill, PedestalFill as PedestalFillIcon, PedestalFill as SiPedestalFill };
export default PedestalFill;
export type { PedestalFillProps };
