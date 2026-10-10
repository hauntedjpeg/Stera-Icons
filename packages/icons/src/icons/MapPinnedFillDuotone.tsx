import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MapPinnedFillDuotone = memo(
  forwardRef<SVGSVGElement, MapPinnedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.56 3.24c.27-.15.6-.15.88 0 .27.16.43.45.43.76v4.27c0 .48-.39.87-.87.87s-.87-.39-.87-.87V5.52l-4.69 2.74c-.27.15-.6.15-.88 0L9.87 5.52V14l.66.38c.42.25.56.78.32 1.2s-.78.56-1.2.31L9 15.51l-5.56 3.25c-.27.15-.6.15-.88 0-.27-.16-.44-.45-.44-.76V7.5c0-.31.17-.6.44-.76l6-3.5.1-.05q.1-.04.2-.05h.02l.08-.01h.17q.1.02.2.06l.05.02.06.03L15 6.5zM3.88 8v8.48L8.13 14V5.52z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M17 9.25c2.64 0 4.75 2.18 4.75 4.84 0 .86-.31 1.7-.72 2.44s-.95 1.44-1.47 2.03c-.52.6-1.04 1.1-1.43 1.46l-.47.41-.14.11-.04.03v.01h-.01l-.03.03-.04.02-.08.04-.04.02-.12.04-.1.02h-.11l-.1-.01-.13-.04-.04-.02-.04-.02-.03-.02-.05-.04-.03-.01-.01-.02-.04-.03-.14-.1-.47-.42c-.39-.36-.91-.86-1.43-1.46-.52-.59-1.06-1.29-1.47-2.03s-.72-1.58-.72-2.44c0-2.66 2.11-4.84 4.75-4.84m0 3.25c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedFillDuotone.displayName = 'MapPinnedFillDuotone';

// Triple export pattern
export { MapPinnedFillDuotone, MapPinnedFillDuotone as MapPinnedFillDuotoneIcon, MapPinnedFillDuotone as SiMapPinnedFillDuotone };
export default MapPinnedFillDuotone;
export type { MapPinnedFillDuotoneProps };
