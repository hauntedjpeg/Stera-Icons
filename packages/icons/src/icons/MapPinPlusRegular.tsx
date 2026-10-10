import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinPlusRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinPlusRegular = memo(
  forwardRef<SVGSVGElement, MapPinPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.75c.41 0 .75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V7.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c4.28 0 7.75 3.47 7.75 7.75 0 3.28-1.9 6.2-3.69 8.24-.9 1.04-1.8 1.88-2.48 2.45q-.52.45-.82.68l-.23.17-.07.05-.08.05-.06.04-.06.02-.08.03h-.05l-.03.01-.1.01h-.1l-.03-.01-.05-.01-.08-.03-.06-.02-.06-.04-.05-.02v-.01h-.01l-.02-.02q-.03 0-.07-.05l-.23-.17-.82-.68c-.68-.57-1.58-1.41-2.48-2.45-1.8-2.04-3.69-4.96-3.69-8.24 0-4.28 3.47-7.75 7.75-7.75m0 1.5c-3.45 0-6.25 2.8-6.25 6.25 0 2.72 1.6 5.3 3.31 7.26.85.96 1.7 1.75 2.33 2.3l.61.5.6-.5c.64-.55 1.49-1.34 2.34-2.3 1.7-1.96 3.31-4.54 3.31-7.26 0-3.45-2.8-6.25-6.25-6.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinPlusRegular.displayName = 'MapPinPlusRegular';

// Triple export pattern
export { MapPinPlusRegular, MapPinPlusRegular as MapPinPlusRegularIcon, MapPinPlusRegular as SiMapPinPlusRegular };
export default MapPinPlusRegular;
export type { MapPinPlusRegularProps };
