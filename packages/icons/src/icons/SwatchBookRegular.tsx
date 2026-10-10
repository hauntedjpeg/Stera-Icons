import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookRegularProps = Omit<IconBaseProps, 'children'>;

const SwatchBookRegular = memo(
  forwardRef<SVGSVGElement, SwatchBookRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 15.75c.69 0 1.25.56 1.25 1.25S7.69 18.25 7 18.25 5.75 17.69 5.75 17s.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M9 2.25c1.52 0 2.75 1.23 2.75 2.75v.53l.38-.37c1.07-1.08 2.81-1.08 3.89 0l2.82 2.82c1.08 1.08 1.08 2.82 0 3.9l-.37.37H19c1.52 0 2.75 1.23 2.75 2.75v4c0 1.52-1.23 2.75-2.75 2.75H6.9l-.34-.02-.3-.04H6.2q-.05-.02-.1-.03l-.13-.03q-.3-.06-.57-.16l-.3-.12h-.01q-.64-.3-1.16-.73-.3-.27-.58-.59-.14-.17-.27-.36-.19-.28-.33-.57-.48-.97-.49-2.1V5c0-1.52 1.23-2.75 2.75-2.75zm-4 1.5c-.69 0-1.25.56-1.25 1.25v12q0 .78.33 1.43l.06.12.07.11q.13.23.29.41.18.22.4.4.35.31.78.5l.16.07q.33.12.67.17.2.03.42.04h.17q.53-.02 1.05-.21l.22-.1h.03l.2-.12.21-.12.03-.02.2-.15.08-.07q.2-.16.36-.37l.03-.03q.25-.3.4-.63l.1-.2q.18-.46.23-1l.01-.23V5c0-.69-.56-1.25-1.25-1.25zm5.47 16.5H19c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-2.03zm4.49-14.03c-.5-.5-1.28-.5-1.77 0l-1.44 1.43v9.2l6.03-6.04c.5-.49.5-1.28 0-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookRegular.displayName = 'SwatchBookRegular';

// Triple export pattern
export { SwatchBookRegular, SwatchBookRegular as SwatchBookRegularIcon, SwatchBookRegular as SiSwatchBookRegular };
export default SwatchBookRegular;
export type { SwatchBookRegularProps };
