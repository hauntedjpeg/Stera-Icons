import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 21a.88.88 0 0 1-1.76 0v-2.37h1.76zM12.88 12.88h-1.76v-1.76h1.76zM12 2.13c.48 0 .88.39.88.87v2.38h-1.76V3c0-.48.4-.87.88-.87" opacity={0.4} />
        <path fillRule="evenodd" d="m15.4 12.88.73.01q.25.02.53.1l.2.09q.46.25.74.69l.07.13q.18.38.19.72.02.32.02.73v.8q0 .41-.02.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02H8.6q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.02-.32-.01-.73v-.8l.01-.73q.01-.34.19-.72.25-.47.69-.75l.13-.07.19-.08q.28-.1.53-.1.32-.04.73-.03zm-6.8 1.74-.67.03-.03.03-.01.08-.01.59v.8l.02.67.03.03.08.01.59.02h6.8l.67-.03.03-.03.01-.08.02-.59v-.8l-.03-.67-.03-.03-.08-.01-.59-.02zM18.4 5.38l.73.01q.25.02.53.1l.2.09q.46.25.74.69l.07.13q.18.38.19.72.02.32.02.73v.8q0 .41-.02.73a2 2 0 0 1-.19.72q-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02H5.6q-.41 0-.73-.02a2 2 0 0 1-.72-.19 2 2 0 0 1-.82-.82 2 2 0 0 1-.19-.72q-.03-.32-.02-.73v-.8q0-.41.02-.73.01-.34.19-.72.25-.47.69-.75l.13-.07.19-.08q.28-.1.53-.1.32-.04.73-.03zM5.6 7.13l-.67.02-.03.03-.01.08-.01.59v.8l.02.67.03.03.08.01.59.02h12.8l.67-.03.03-.03.01-.08.02-.59v-.8l-.03-.67-.03-.03-.08-.01-.59-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterFillDuotone.displayName = 'AlignHorizontalCenterFillDuotone';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenterFillDuotone, AlignHorizontalCenterFillDuotone as AlignHorizontalCenterFillDuotoneIcon, AlignHorizontalCenterFillDuotone as SiAlignHorizontalCenterFillDuotone };
export default AlignHorizontalCenterFillDuotone;
export type { AlignHorizontalCenterFillDuotoneProps };
