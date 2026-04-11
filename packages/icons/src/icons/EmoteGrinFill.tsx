import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EmoteGrinFillProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinFill = memo(
  forwardRef<SVGSVGElement, EmoteGrinFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-3.75 11.5A.87.87 0 0 0 7.53 15 5.5 5.5 0 0 0 12 17.38c1.84 0 3.46-.95 4.47-2.38a.88.88 0 0 0-.72-1.37zM9 8.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteGrinFill.displayName = 'EmoteGrinFill';

// Triple export pattern (lucide-react style)
export { EmoteGrinFill, EmoteGrinFill as EmoteGrinFillIcon, EmoteGrinFill as SiEmoteGrinFill };
export default EmoteGrinFill;
export type { EmoteGrinFillProps };
