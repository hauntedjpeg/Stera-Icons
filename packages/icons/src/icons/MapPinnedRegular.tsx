import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinnedRegular = memo(
  forwardRef<SVGSVGElement, MapPinnedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 12.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M17 9.25c2.64 0 4.75 2.18 4.75 4.84 0 .86-.31 1.7-.72 2.44s-.95 1.44-1.47 2.03c-.52.6-1.04 1.1-1.43 1.46l-.47.41-.14.11-.04.03v.01h-.01l-.03.03-.04.02-.08.04-.04.02-.12.04-.1.02h-.11l-.1-.01-.13-.04-.04-.02-.04-.02-.03-.02-.05-.04-.03-.01-.01-.02-.04-.03-.14-.1-.47-.42c-.39-.36-.91-.86-1.43-1.46-.52-.59-1.06-1.29-1.47-2.03s-.72-1.58-.72-2.44c0-2.66 2.11-4.84 4.75-4.84m0 1.5c-1.78 0-3.25 1.48-3.25 3.34q.01.76.53 1.71c.34.62.8 1.23 1.28 1.77s.96 1 1.32 1.34l.12.1.12-.1c.36-.33.84-.8 1.32-1.34s.94-1.15 1.28-1.77q.52-.94.53-1.7c0-1.87-1.47-3.35-3.25-3.35" clipRule="evenodd" />
        <path fillRule="evenodd" d="M9.03 3.25q.18 0 .34.1L15 6.63l5.62-3.28c.23-.13.52-.13.75 0 .24.13.38.38.38.65v4.27c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.3l-4.87 2.85q-.38.2-.76 0L9.75 5.3v8.77l.72.42c.36.2.48.67.27 1.03-.2.35-.67.47-1.02.27L9 15.37l-5.62 3.28c-.23.13-.52.13-.75 0-.24-.13-.38-.38-.38-.65V7.5q.01-.42.37-.65l6-3.5q.16-.1.35-.1h.06M3.75 7.93v8.76l4.5-2.62V5.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedRegular.displayName = 'MapPinnedRegular';

// Triple export pattern
export { MapPinnedRegular, MapPinnedRegular as MapPinnedRegularIcon, MapPinnedRegular as SiMapPinnedRegular };
export default MapPinnedRegular;
export type { MapPinnedRegularProps };
