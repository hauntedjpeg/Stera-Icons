import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinnedBoldProps = Omit<IconBaseProps, 'children'>;

const MapPinnedBold = memo(
  forwardRef<SVGSVGElement, MapPinnedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 12.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M17 9c2.78 0 5 2.3 5 5.1 0 .9-.33 1.79-.75 2.55s-.97 1.48-1.5 2.08-1.06 1.11-1.45 1.47l-.48.42-.14.12-.04.03h-.01v.01h-.01q-.2.15-.45.2h-.02L17 21l-.15-.01h-.02q-.22-.04-.39-.16l-.06-.05-.02-.01-.04-.03-.14-.12-.48-.42c-.4-.36-.92-.87-1.45-1.47s-1.08-1.32-1.5-2.08S12 15 12 14.09C12 11.3 14.22 9 17 9m0 2c-1.64 0-3 1.36-3 3.1q0 .67.5 1.58c.33.6.78 1.2 1.25 1.73.45.5.9.95 1.25 1.27.35-.32.8-.76 1.25-1.27.47-.54.92-1.13 1.25-1.73q.5-.9.5-1.59c0-1.73-1.36-3.09-3-3.09" clipRule="evenodd" />
        <path fillRule="evenodd" d="M9.05 3h.08l.2.06q.03 0 .05.02.07.01.12.06l5.5 3.2 5.5-3.2c.3-.18.69-.19 1 0 .3.17.5.5.5.86v4.27c0 .55-.45 1-1 1s-1-.45-1-1V5.74l-4.5 2.62c-.3.19-.7.19-1 0L10 5.74v8.18l.6.35c.47.28.64.9.36 1.37s-.9.64-1.37.36L9 15.66l-5.5 3.2c-.3.18-.69.19-1 0-.3-.17-.5-.5-.5-.86V7.5c0-.36.19-.69.5-.86l6-3.5q.05-.04.11-.06l.06-.02q.1-.04.2-.05h.08L9 3zM4 8.07v8.19l4-2.34V5.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinnedBold.displayName = 'MapPinnedBold';

// Triple export pattern
export { MapPinnedBold, MapPinnedBold as MapPinnedBoldIcon, MapPinnedBold as SiMapPinnedBold };
export default MapPinnedBold;
export type { MapPinnedBoldProps };
