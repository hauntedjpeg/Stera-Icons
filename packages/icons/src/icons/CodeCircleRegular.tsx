import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleRegularProps = Omit<IconBaseProps, 'children'>;

const CodeCircleRegular = memo(
  forwardRef<SVGSVGElement, CodeCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.27 7.82c.1-.4.51-.65.91-.55s.65.51.55.91l-2 8c-.1.4-.51.65-.91.55s-.65-.51-.55-.91zM7.97 9.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L7.56 12l1.47 1.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2-2c-.3-.3-.3-.77 0-1.06zM14.97 9.47c.3-.3.77-.3 1.06 0l2 2q.22.22.22.53t-.22.53l-2 2c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L16.44 12l-1.47-1.47c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeCircleRegular.displayName = 'CodeCircleRegular';

// Triple export pattern
export { CodeCircleRegular, CodeCircleRegular as CodeCircleRegularIcon, CodeCircleRegular as SiCodeCircleRegular };
export default CodeCircleRegular;
export type { CodeCircleRegularProps };
