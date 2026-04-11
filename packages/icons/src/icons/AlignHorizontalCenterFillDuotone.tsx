import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 21a.88.88 0 0 1-1.76 0v-2.37h1.76zM12.88 12.88h-1.76v-1.76h1.76zM12 2.13c.48 0 .88.39.88.87v2.38h-1.76V3c0-.48.4-.87.88-.87" opacity={0.4} />
        <path fillRule="evenodd" d="m15 12.88.9.01a2.13 2.13 0 0 1 1.75 1.14q.18.42.2.83.03.38.02.89l-.01.9a2.13 2.13 0 0 1-1.14 1.75q-.42.18-.83.2-.38.03-.89.02H9l-.9-.01a2 2 0 0 1-.81-.22q-.62-.32-.93-.93a2 2 0 0 1-.22-.82q-.02-.38-.01-.89l.01-.9q.03-.4.22-.81.32-.62.93-.93.41-.2.82-.22.38-.02.89-.02zm-6 1.74a11 11 0 0 0-.92.05.4.4 0 0 0-.16.16l-.03.17-.01.75a11 11 0 0 0 .04.92q.05.11.16.16l.17.03.75.02h6a11 11 0 0 0 .92-.05q.11-.05.16-.16l.03-.17.02-.75a11 11 0 0 0-.05-.92.4.4 0 0 0-.16-.16l-.17-.03-.75-.02zM18 5.37q.51 0 .9.02.4.03.81.22.61.32.93.93.2.41.22.82.02.38.02.89t-.02.9a2.13 2.13 0 0 1-1.14 1.75q-.42.18-.83.2-.38.04-.89.03H6q-.51 0-.9-.02a2 2 0 0 1-.81-.22q-.62-.31-.93-.93a2 2 0 0 1-.22-.82q-.02-.38-.01-.89l.01-.9q.03-.4.22-.81.32-.62.93-.93.41-.2.82-.22.38-.02.89-.02zM6 7.12a11 11 0 0 0-.92.05.4.4 0 0 0-.16.16l-.03.17-.01.75a11 11 0 0 0 .04.92q.05.11.16.16l.17.03.75.01h12a11 11 0 0 0 .92-.04q.11-.05.16-.16l.03-.17.02-.75a11 11 0 0 0-.05-.92.4.4 0 0 0-.16-.16l-.17-.03-.75-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterFillDuotone.displayName = 'AlignHorizontalCenterFillDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterFillDuotone, AlignHorizontalCenterFillDuotone as AlignHorizontalCenterFillDuotoneIcon, AlignHorizontalCenterFillDuotone as SiAlignHorizontalCenterFillDuotone };
export default AlignHorizontalCenterFillDuotone;
export type { AlignHorizontalCenterFillDuotoneProps };
