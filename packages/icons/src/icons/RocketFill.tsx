import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketFillProps = Omit<IconBaseProps, 'children'>;

const RocketFill = memo(
  forwardRef<SVGSVGElement, RocketFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.5 19.13c.48 0 .87.39.87.87v.13q0 .1-.04.22-.05.27-.23.67c-.26.52-.74 1.13-1.6 1.7l-.5.33-.48-.32c-.87-.58-1.35-1.2-1.61-1.71q-.19-.4-.24-.66l-.04-.23V20c0-.48.39-.87.87-.87z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M11.63 1.2c.27-.12.6-.1.85.07 2.38 1.59 3.82 3.4 4.6 5.27q.61 1.54.72 3.02l2.82 2.82c.2.2.29.48.24.75l-1 6.5q-.08.46-.5.67c-.26.12-.57.1-.82-.06l-3.8-2.36H9.26l-3.79 2.36c-.25.16-.56.18-.82.06q-.42-.21-.5-.67l-1-6.5c-.05-.27.04-.55.24-.75L6.2 9.56q.1-1.48.73-3.02c.77-1.87 2.2-3.68 4.58-5.27zm-6.7 12.1.73 4.75 2.16-1.35q-.19-.35-.42-.84c-.43-.97-.92-2.33-1.13-3.9zm12.8-1.33c-.21 1.56-.7 2.92-1.14 3.89q-.22.49-.41.84l2.16 1.35.73-4.75zM12 7c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75S12.97 7 12 7" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketFill.displayName = 'RocketFill';

// Triple export pattern
export { RocketFill, RocketFill as RocketFillIcon, RocketFill as SiRocketFill };
export default RocketFill;
export type { RocketFillProps };
