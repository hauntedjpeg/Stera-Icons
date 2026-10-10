import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotsFillProps = Omit<IconBaseProps, 'children'>;

const CircleDotsFill = memo(
  forwardRef<SVGSVGElement, CircleDotsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.25c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.74 1.75h-.02c-.96 0-1.75-.78-1.74-1.75 0-.97.78-1.75 1.75-1.75M4.4 17.12c.68-.68 1.79-.68 2.47 0v.01c.69.68.7 1.8 0 2.47-.68.69-1.78.69-2.47 0s-.69-1.8 0-2.48M17.13 17.12c.68-.68 1.8-.68 2.47 0 .69.69.69 1.8 0 2.48-.69.69-1.8.69-2.48 0s-.68-1.79 0-2.47zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5M3 10.25c.97 0 1.75.78 1.75 1.75S3.97 13.75 3 13.75s-1.75-.78-1.75-1.74v-.02c0-.96.78-1.75 1.75-1.74M21 10.25c.97 0 1.75.78 1.75 1.74v.02c0 .96-.78 1.75-1.75 1.74-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75M4.4 4.4c.69-.69 1.8-.69 2.48 0s.68 1.79 0 2.47h-.01c-.68.69-1.8.7-2.47 0-.69-.68-.69-1.78 0-2.47M17.12 4.4c.69-.69 1.8-.69 2.48 0 .69.69.69 1.8 0 2.48s-1.79.68-2.47 0v-.01c-.69-.68-.7-1.8 0-2.47M12 1.25c.97 0 1.76.78 1.75 1.75 0 .97-.78 1.75-1.75 1.75S10.25 3.97 10.25 3s.78-1.75 1.74-1.75z" />
    </IconBase>
  ))
);

CircleDotsFill.displayName = 'CircleDotsFill';

// Triple export pattern
export { CircleDotsFill, CircleDotsFill as CircleDotsFillIcon, CircleDotsFill as SiCircleDotsFill };
export default CircleDotsFill;
export type { CircleDotsFillProps };
