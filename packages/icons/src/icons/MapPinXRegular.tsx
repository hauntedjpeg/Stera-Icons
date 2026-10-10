import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MapPinXRegularProps = Omit<IconBaseProps, 'children'>;

const MapPinXRegular = memo(
  forwardRef<SVGSVGElement, MapPinXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c4.28 0 7.75 3.47 7.75 7.75q0 1.13-.27 2.18c-.1.4-.5.65-.91.55-.4-.1-.65-.5-.55-.91q.23-.9.23-1.82c0-3.45-2.8-6.25-6.25-6.25S5.75 6.55 5.75 10c0 2.72 1.6 5.3 3.31 7.26.85.96 1.7 1.75 2.33 2.3l.61.5.51-.43c.32-.27.8-.23 1.06.09.27.32.23.79-.08 1.06l-.76.6-.21.17-.08.06c-.26.19-.61.19-.88 0l-.02-.02q-.03 0-.07-.05l-.23-.17-.82-.68c-.68-.57-1.58-1.41-2.48-2.45-1.8-2.04-3.69-4.96-3.69-8.24 0-4.28 3.47-7.75 7.75-7.75" />
        <path d="M20.47 13.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06L19.56 17l1.97 1.97c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.97-1.97-1.97 1.97c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L17.44 17l-1.97-1.97c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l1.97 1.97z" />
        <path fillRule="evenodd" d="M12 6.75c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

MapPinXRegular.displayName = 'MapPinXRegular';

// Triple export pattern
export { MapPinXRegular, MapPinXRegular as MapPinXRegularIcon, MapPinXRegular as SiMapPinXRegular };
export default MapPinXRegular;
export type { MapPinXRegularProps };
