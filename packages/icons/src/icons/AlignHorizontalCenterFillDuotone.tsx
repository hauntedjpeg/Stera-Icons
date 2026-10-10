import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 21c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2.37h1.74zM12.88 12.88h-1.76v-1.76h1.76zM12 2.13c.48 0 .88.39.88.87v2.38h-1.76V3c0-.48.4-.87.88-.87" opacity={0.4} />
        <path fillRule="evenodd" d="m15.4 12.88.73.01q.25.02.53.1l.2.09q.46.25.74.69l.07.13q.18.38.19.72.02.32.02.73v.8q0 .41-.02.73-.01.34-.19.72-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02H8.6q-.41 0-.73-.02-.34-.01-.72-.19-.54-.28-.82-.82-.18-.38-.19-.72-.02-.32-.01-.73v-.8l.01-.73q.01-.34.19-.72.25-.47.69-.75l.13-.07.19-.08q.28-.1.53-.1.32-.04.73-.03zm-6.8 1.74c-.3 0-.46 0-.59.02h-.08l-.03.04-.01.08-.01.59v1.39l.02.08.03.03.08.01.59.02h6.8c.3 0 .46 0 .59-.02h.08l.03-.04.01-.08.02-.59v-.8c0-.3 0-.46-.02-.59v-.08l-.04-.03-.08-.01-.59-.02zM18.4 5.38l.73.01q.25.02.53.1l.2.09q.46.25.74.69l.07.13q.18.38.19.72.02.32.02.73v.8q0 .41-.02.73-.01.34-.19.72-.28.54-.82.82-.38.18-.72.19-.32.02-.73.02H5.6q-.41 0-.73-.02-.34-.01-.72-.19-.54-.28-.82-.82-.18-.38-.19-.72-.03-.32-.02-.73v-.8q0-.41.02-.73.01-.34.19-.72.25-.47.69-.75l.13-.07.19-.08q.28-.1.53-.1.32-.04.73-.03zM5.6 7.13h-.59l-.08.02-.03.03-.01.08-.01.59v1.39l.02.08.03.03.08.01.59.02h12.8c.3 0 .46 0 .59-.02h.08l.03-.04.01-.08.02-.59v-.8c0-.3 0-.46-.02-.59v-.08l-.04-.03-.08-.01-.59-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalCenterFillDuotone.displayName = 'AlignHorizontalCenterFillDuotone';

// Triple export pattern
export { AlignHorizontalCenterFillDuotone, AlignHorizontalCenterFillDuotone as AlignHorizontalCenterFillDuotoneIcon, AlignHorizontalCenterFillDuotone as SiAlignHorizontalCenterFillDuotone };
export default AlignHorizontalCenterFillDuotone;
export type { AlignHorizontalCenterFillDuotoneProps };
