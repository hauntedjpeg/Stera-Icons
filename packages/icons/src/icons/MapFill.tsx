import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapFillProps = Omit<IconBaseProps, 'children'>;

const MapFill = memo(
  forwardRef<SVGSVGElement, MapFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.04 4.13h.09q.1.02.2.06l.05.02.06.03L15 7.5l5.56-3.25c.27-.15.6-.15.88 0 .27.16.43.45.43.76v10.5c0 .31-.16.6-.43.76l-6 3.5-.06.03-.05.02q-.1.04-.2.05h-.02l-.07.01h-.17q-.1-.02-.2-.06l-.05-.02-.06-.03L9 16.5l-5.56 3.25c-.27.15-.6.15-.88 0-.27-.16-.44-.45-.44-.76V8.5c0-.31.17-.6.44-.76l6-3.5.1-.05q.1-.04.2-.05h.02l.08-.01h.08M3.88 9v8.48L8.13 15V6.52zm12 0v8.48L20.12 15V6.52z" clipRule="evenodd" />
    </IconBase>
  ))
);

MapFill.displayName = 'MapFill';

// Triple export pattern
export { MapFill, MapFill as MapFillIcon, MapFill as SiMapFill };
export default MapFill;
export type { MapFillProps };
