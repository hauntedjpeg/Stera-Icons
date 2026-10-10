import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RocketFillDuotone = memo(
  forwardRef<SVGSVGElement, RocketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.63 1.2c.27-.12.6-.1.86.07 2.37 1.59 3.8 3.4 4.58 5.27s.88 3.7.67 5.32c-.2 1.61-.7 3-1.15 4q-.34.76-.59 1.17l-.2.33q-.02.06-.05.09l-.02.04c-.16.24-.44.39-.73.39H9q-.47-.01-.73-.4l-.02-.03-.06-.1-.2-.32q-.24-.41-.58-1.17c-.45-1-.95-2.39-1.15-4-.2-1.62-.1-3.46.67-5.32s2.2-3.68 4.58-5.27z" opacity={.4} />
        <path fillRule="evenodd" d="M13.5 19.13c.48 0 .87.39.87.87h-.87.87v.13q0 .1-.04.22-.05.27-.23.67c-.26.52-.74 1.13-1.6 1.7l-.5.33-.48-.32c-.87-.58-1.35-1.2-1.61-1.71q-.19-.4-.24-.66l-.04-.23V20h.87-.88c0-.48.4-.87.88-.87zM12 20.9l.02-.02h-.04q.01 0 .02.02" clipRule="evenodd" />
        <path d="M6.2 9.56q-.08 1.2.06 2.3c.2 1.61.7 3 1.14 4q.35.76.6 1.17l.2.33q.02.06.05.09l.01.02v.01h.01c.16.25.44.4.73.4h.25l-3.79 2.36c-.25.16-.56.18-.82.06q-.42-.21-.5-.67l-1-6.5c-.05-.27.04-.55.24-.75zM20.62 12.38c.2.2.29.48.24.75l-1 6.5q-.08.46-.5.67c-.26.12-.57.1-.82-.06l-3.8-2.36H15q.46-.01.73-.4l.02-.03.06-.1.2-.32q.24-.41.58-1.17c.45-1 .95-2.39 1.15-4q.15-1.1.06-2.3zM12 7.13c.9 0 1.62.72 1.62 1.62s-.72 1.63-1.62 1.63-1.63-.73-1.63-1.63.73-1.62 1.63-1.62" />
    </IconBase>
  ))
);

RocketFillDuotone.displayName = 'RocketFillDuotone';

// Triple export pattern
export { RocketFillDuotone, RocketFillDuotone as RocketFillDuotoneIcon, RocketFillDuotone as SiRocketFillDuotone };
export default RocketFillDuotone;
export type { RocketFillDuotoneProps };
